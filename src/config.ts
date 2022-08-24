interface Config {
    DATABASE_URL: string;
    TOKEN_SECRET: string;
}

const config: Config = {
    DATABASE_URL: process.env.DATABASE_URL as string,
    TOKEN_SECRET: process.env.TOKEN_SECRET as string
}

export default config