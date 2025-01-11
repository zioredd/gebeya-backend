import serverConfig from './server.config';

const origins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://localhost:4200',
  'http://192.168.1.8:3000',
  'https://appleid.apple.com',
  serverConfig().frontendBaseUrl,
];

const originPatterns = [/^http:\/\/192\.168\.\d+\.\d+(:\d+)?$/];

function isOriginAllowed(origin: string): boolean {
  return originPatterns.some((pattern) => pattern.test(origin));
}

const responseHeaders = [
  'Content-Type',
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Headers',
];

const methods = ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'];

const maxAge = 18000;

export const appCorsConfigs = {
  origin(
    origin: string,
    callback: (error: Error | null, allow?: boolean) => void,
  ) {
    if (!origin || origins.includes(origin) || isOriginAllowed(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

export const gcsCorsConfigs = [
  {
    origin: origins,
    responseHeader: responseHeaders,
    method: methods,
    maxAgeSeconds: maxAge,
  },
];
