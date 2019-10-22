declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }

  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE: string | undefined;
      CONTENTFUL_TOKEN: string | undefined;
      GA: string | undefined;
      NODE_ENV: 'development' | 'production';
    }
  }
}
