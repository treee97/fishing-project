/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

//WEBSOCKETS ===================================
import ws from 'ws';

// Create a WebSocket server
const wss = new ws.Server({ port: 3001 });

// Handle new connections
wss.on('connection', (ws) => {
  console.log('New connection from', ws.remoteAddress);

  // Handle messages from players
  ws.on('message', (message) => {
    console.log('Message from', ws.remoteAddress, ':', message);
  });
});