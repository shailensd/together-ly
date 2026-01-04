import express from 'express';
import cors from 'cors';
import { ENV } from './config/env.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend server! Also it updates live!');
});

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
});