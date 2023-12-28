declare module NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    JWT_SECRET: string;
    JWT_REFRESH_SECRET: string;
  }
}