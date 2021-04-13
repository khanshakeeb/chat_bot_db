import configurations from './configurations';

class Config  {
    constructor(configurations, appEnv) {
        this.config = configurations[appEnv];
    }
    get(key) {
        return this.config[key || 'database'];
    }
}

export default new Config(configurations, process.env.NODE_ENV || 'development');