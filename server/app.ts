import express from 'express';
import router from './src/routes/data';

const port = 8000;

const app = express();

app.use(express.json());

app.use(router);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});