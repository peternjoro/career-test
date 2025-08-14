
const Config = {
    SVR_PORT: process.env.SVR_PORT || 5000,
    API_BASE_URL:process.env.API_BASE_URL || 'http://localhost:5000',

    API_KEY: process.env.API_KEY||''
}

export default Config;