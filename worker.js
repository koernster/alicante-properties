addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const resp = await fetch('https://raw.githubusercontent.com/koernster/alicante-properties/main/index.html', {
      cf: { cacheEverything: false }
    });
    const html = await resp.text();
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
  return new Response('Not found', { status: 404 });
}
