import ICredential from "../Contracts/ICredential";


export default class CredentialsHelper
{

    public static getCredentials() : ICredential
    {
        const credentialsUser: string = process.env.CREDENTIALS_USER || '';
        const credentialsPass: string = process.env.CREDENTIALS_PASSWORD || '';


        return {
            username: credentialsUser ? credentialsUser : '',
            password: credentialsPass ? credentialsPass : ''
        }
    }
}
