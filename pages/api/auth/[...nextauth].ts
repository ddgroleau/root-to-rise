/* eslint-disable max-len */
import { url } from 'inspector';
import NextAuth from 'next-auth';

const clientId = process.env.IDENTITY_CLIENT_ID;
const clientSecret = process.env.IDENTITY_CLIENT_SECRET;
const identityApiBaseUri = process.env.IDENTITY_BASE_API_URI;
const oauthBaseRedirectUri = process.env.OAUTH_REDIRECT_BASE_URI;

export default NextAuth({
    providers: [
        {
            id: "root-to-rise-identity",
            name: "Root to Rise",
            type: "oauth",
            version: "2.0",
            idToken: true,
            wellKnown: `${identityApiBaseUri}/.well-known/openid-configuration`,
            authorization: `${identityApiBaseUri}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${oauthBaseRedirectUri}/login/oauth2/code/id-assert-client-oidc`,
            token: `${identityApiBaseUri}/oauth2/token`,
            userinfo:`${identityApiBaseUri}/userinfo`,
            clientId: clientId,
            clientSecret: clientSecret,
        },
    ]
});