import dotenv from "dotenv";

dotenv.config();

const Config = {
    SVR_PORT: process.env.SVR_PORT || 2000,
    API_BASE_URL:process.env.API_BASE_URL || 'http://localhost:2000',
}

export default Config;