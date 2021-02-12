import ICredential from "../Contracts/ICredential";


export default class CredentialsHelper
{

    public static getCredentials() : ICredential
    {
        const credentials: string = process.env.CREDENTIALS || '';
        const cred = credentials.split(":");

        return {
            username: cred[0] ? cred[0] : '',
            password: cred[1] ? cred[1] : ''
        }
    }
}
