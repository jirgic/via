const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const PORT = 3000;
const publicDir = path.join(__dirname, 'public');
let tasks = [
  { id: 1, title: 'Learn JavaScript fetch()', completed: false },
  { id: 2, title: 'Build task manager UI', completed: false },
  { id: 3, title: 'Test API endpoints', completed: true }
];
let nextId = 4;
const json = (res, status, data) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(data)); };
async function body(req) {
  let raw = '';
  for await (const chunk of req) { raw += chunk; if (raw.length > 10000) throw new Error('Body too large'); }
  try { return JSON.parse(raw); } catch { throw new Error('Invalid JSON'); }
}
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname.startsWith('/api/')) {
    if (url.pathname === '/api/tasks' && req.method === 'GET') return json(res, 200, tasks);
    if (url.pathname === '/api/tasks' && req.method === 'POST') {
      try {
        const data = await body(req);
        if (typeof data.title !== 'string' || !data.title.trim()) return json(res, 400, { error: 'Title is required' });
        const task = { id: nextId++, title: data.title.trim(), completed: false };
        tasks.push(task); return json(res, 201, task);
      } catch (e) { return json(res, 400, { error: e.message }); }
    }
    const match = url.pathname.match(/^\/api\/tasks\/(\d+)$/);
    if (match) {
      const index = tasks.findIndex(t => t.id === Number(match[1]));
      if (index < 0) return json(res, 404, { error: 'Task not found' });
      if (req.method === 'PATCH') {
        try {
          const data = await body(req);
          if (typeof data.completed !== 'boolean') return json(res, 400, { error: 'completed must be boolean' });
          tasks[index].completed = data.completed;
          return json(res, 200, tasks[index]);
        } catch (e) { return json(res, 400, { error: e.message }); }
      }
      if (req.method === 'DELETE') { tasks.splice(index, 1); res.writeHead(204); return res.end(); }
    }
    return json(res, 404, { error: 'Endpoint not found' });
  }
  const file = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  if (!['index.html','style.css','script.js'].includes(file)) return json(res, 404, { error: 'Not found' });
  fs.readFile(path.join(publicDir, file), (err, content) => {
    if (err) return json(res, 404, { error: 'File not found' });
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] }); res.end(content);
  });
});
server.listen(PORT, () => console.log(`Open http://localhost:${PORT}`));
