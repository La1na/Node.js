import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello! This is a GET request..');
});

app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully!',
    receivedData: data
  });
});

app.listen(PORT, () => {
  console.log(`Servver is running on http://localhost:${PORT}`);
});
