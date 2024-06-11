interface ImportMetaEnv {
  [key: string]: string;
}

// config all eviroment variable

const config: ImportMetaEnv = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSENGER_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  serverUrl: import.meta.env.VITE_API_URL,
};

export default config;
