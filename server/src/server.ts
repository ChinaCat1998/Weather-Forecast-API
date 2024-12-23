import dotenv from 'dotenv';
import express, {type Request, type Response }  from 'express';
dotenv.config();
import path from 'node:path';

// Import the routes
import routes from './routes/index.js';
import weatherService from './service/weatherService.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

//app.get('/', (_req: Request, res:Response) => res.send('Navigate to /api/weather'));

//app.get('/')
// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Implement middleware to connect the routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
 //const myWeatherSevice = weatherService.getWeatherForCity('New York');

 