declare module 'vite' {
  interface ImportMeta {
    env: {
      [key: string]: string | boolean | undefined;
      REACT_APP_API_BASE_URL: string;
      
    }
  }
}