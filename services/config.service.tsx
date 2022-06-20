export default class ConfigService {
    private static dependencies = {
        DEV: {
            API:"http://root-to-rise-api-staging.herokuapp.com"
        },
        PROD: {
            API:"http://root-to-rise-api.herokuapp.com"
        }
    };
    
    public static getVariable(key:string) : string {
        this.verifyKey(key);
        const host:string = window.origin;

        if(!host.includes('staging') && host.includes('roottorisebotanicals')) {
            const prodEnv = this.dependencies.PROD;
            let variable = key as keyof typeof prodEnv;
            return prodEnv[variable] as string;
        }
        
        const devEnv = this.dependencies.DEV;
        let variable = key as keyof typeof devEnv;
        return devEnv[variable] as string;
    }

    private static verifyKey(key:string):void {
        if(!Object.values(ConfigVars).includes(key as unknown as ConfigVars)) 
            throw new Error("Key is not an configuration variable.");
        return;
    }

}

export enum ConfigVars {
    API="API"
}