import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.post('/user', async (req: Request, res: Response) => {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io'
    }
  })
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
