export default class ConfigService {
    private static dependencies = {
        DEV: {
            API:"http://root-to-rise-api-staging.herokuapp.com",
            OAUTH2:"http://identity-staging.roottorisebotanicals.com"
        },
        PROD: {
            API:"http://root-to-rise-api.herokuapp.com",
            OAUTH2:"http://identity.roottorisebotanicals.com"
        }
    };
    
    public static getVariable(key:string) : string {
        this.verifyKey(key);
        let host = 'staging';
        if(typeof window !== 'undefined') {
            host = window.origin;
        }
        if(!host.includes('staging') && host.includes('roottorisebotanicals'))
            return this.retrieveKey(key, this.dependencies.PROD);

        return this.retrieveKey(key, this.dependencies.DEV);
    }

    private static verifyKey(key:string):void {
        if(!Object.values(ConfigVars).includes(key as unknown as ConfigVars)) 
            throw new Error("Key is not an configuration variable.");
        return;
    }

    private static retrieveKey(key:string, env:object) : string {
        let variable = key as keyof typeof env;
        return env[variable] as string;
    }
}

export enum ConfigVars {
    API="API",
    OAUTH2="OAUTH2"
}