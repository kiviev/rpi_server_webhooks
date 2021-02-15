import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import basicAuth from 'express-basic-auth';

import IndexRoutes from './routes/Index'
import GpioRoutes from './routes/Gpio'
import ICredential from './Contracts/ICredential';
import CredentialsHelper from './Helper/CredentialsHelper';


// Initializations
dotenv.config();
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

const credentials: ICredential = CredentialsHelper.getCredentials();

// middlewares
app.use(basicAuth({
        authorizer: (username:string, password:string) => {
            const userMatches = basicAuth.safeCompare(username, credentials.username)
            const passwordMatches = basicAuth.safeCompare(password, credentials.password)
            return userMatches && passwordMatches;
        }
    })
)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/',IndexRoutes)
app.use('/gpio',GpioRoutes)


// Handle 404
app.use((req: Request, res: Response) =>{
    const result = {
        code: 404,
        status: 'KO',
        message: 'Page not Found' 
    }
  res.status(404).send(result);
});

// Handle 500
app.use((err:any, req: Request, res: Response, next:CallableFunction) => {
  
  res.status(500).send({ 
      code: 500,
      status: 'KO',
      message: err.toString()
    });
});

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});