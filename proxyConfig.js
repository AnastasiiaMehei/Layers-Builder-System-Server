import { createProxyMiddleware } from 'http-proxy-middleware';

export function setupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.NODE_ENV === 'production' ? 'https://layers-builder-system-server.onrender.com' : 'http://localhost:3000',
      changeOrigin: true,
    })
  );
}
