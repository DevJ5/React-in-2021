import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../database';

const getAllPeople = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connection();
    const people = await db.all('select * from person');
    console.log(people);
    res.json(people);
  } else {
    res.status(500).json({ message: 'That method is not allowed.' });
  }
};

export default getAllPeople;
