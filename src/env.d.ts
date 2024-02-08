// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | string | undefined;
        PORT: string | undefined;
        MONGO_URI: string | undefined;
        JWT_SECRET: string | undefined;
        JWT_EXPIRE: string | undefined;
    }
}