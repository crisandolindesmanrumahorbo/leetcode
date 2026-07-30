import { readFileSync } from 'fs';

// Function 1: Returns formatted string with GET section then POST section
function formatRequests(requests: any[]): string {
  const filtered = requests
    .filter(req => {
      const method = req.request?.method;
      const url = req.request?.url;
      return (method === 'POST' || method === 'GET') && 
             url?.startsWith('https://api-dev.growin.id');
    });
  
  // Track seen requests to deduplicate (both GET and POST)
  const seenRequests = new Set<string>();
  
  // Filter out duplicates (same method + same URL)
  const uniqueRequests = filtered.filter(req => {
    const method = req.request.method;
    const url = req.request.url;
    
    // For GET: deduplicate by URL only
    if (method === 'GET') {
      const key = `GET::${url}`;
      if (seenRequests.has(key)) {
        return false;
      }
      seenRequests.add(key);
      return true;
    }
    
    // For POST: deduplicate by URL + body
    const body = req.request.postData?.text || '';
    const key = `POST::${url}::${body}`;
    if (seenRequests.has(key)) {
      return false;
    }
    seenRequests.add(key);
    return true;
  });
  
  // Split into GET and POST
  const getRequests = uniqueRequests.filter(req => req.request.method === 'GET');
  const postRequests = uniqueRequests.filter(req => req.request.method === 'POST');
  
  // Build the output
  const lines: string[] = [];
  
  // GET section
  if (getRequests.length > 0) {
    lines.push('GET');
    getRequests.forEach(req => {
      const url = req.request.url;
      const path = url.replace('https://api-dev.growin.id', '');
      lines.push(path);
    });
    lines.push(''); // Empty line between sections
  }
  
  // POST section
  if (postRequests.length > 0) {
    lines.push('POST');
    postRequests.forEach(req => {
      const url = req.request.url;
      const path = url.replace('https://api-dev.growin.id', '');
      lines.push(path);
    });
  }
  
  return lines.join('\n');
}

// Function 2: Returns POST bodies in the same order
function getPostBodies(requests: any[]): string[] {
  const filtered = requests
    .filter(req => {
      const method = req.request?.method;
      const url = req.request?.url;
      return (method === 'POST' || method === 'GET') && 
             url?.startsWith('https://api-dev.growin.id');
    });
  
  // Track seen requests (both GET and POST)
  const seenRequests = new Set<string>();
  
  const uniqueRequests = filtered.filter(req => {
    const method = req.request.method;
    const url = req.request.url;
    
    if (method === 'GET') {
      const key = `GET::${url}`;
      if (seenRequests.has(key)) {
        return false;
      }
      seenRequests.add(key);
      return true;
    }
    
    const body = req.request.postData?.text || '';
    const key = `POST::${url}::${body}`;
    if (seenRequests.has(key)) {
      return false;
    }
    seenRequests.add(key);
    return true;
  });
  
  const getRequests = uniqueRequests.filter(req => req.request.method === 'GET');
  const postRequests = uniqueRequests.filter(req => req.request.method === 'POST');
  const sorted = [...getRequests, ...postRequests];
  
  return sorted
    .filter(req => req.request.method === 'POST')
    .map(req => req.request.postData?.text || '');
}

// Main function
async function main() {
  try {
    const filePath = process.argv[2] || './home.json';
    const rawData = readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(rawData);
    const requests = parsed.log?.entries || [];
    
    if (!Array.isArray(requests)) {
      console.error('requests is not an array');
      process.exit(1);
    }
    
    console.log(`Total requests in file: ${requests.length}`);
    
    // Function 1: Formatted with GET and POST sections
    const formatted = formatRequests(requests);
    console.log('\n=== Formatted Requests ===');
    console.log(formatted);
    
    console.log('\n--- POST Bodies ---');
    const bodies = getPostBodies(requests);
    bodies.forEach((body, index) => {
      console.log(`POST ${index + 1}:`);
      try {
        const parsedBody = JSON.parse(body);
        console.log(JSON.stringify(parsedBody, null, 2));
      } catch {
        console.log(body);
      }
      console.log('---');
    });
    
    // Show count of unique requests
    const uniqueCount = formatted.split('\n').filter(line => line.startsWith('/')).length;
    console.log(`\nUnique requests: ${uniqueCount}`);
    console.log(`Unique POST requests: ${bodies.length}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();

// dev tools network -> cmd + a -> copy all as HAR (sanitized)
// bun run leetcode/pt-daytrade/script/index.ts leetcode/pt-daytrade/requests/home.json