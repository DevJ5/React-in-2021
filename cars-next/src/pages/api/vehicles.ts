import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../database';

const getAllVehicles = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connection();
    const people = await db.all('select * from vehicle');
    res.json(people);
  } else {
    res.status(500).json({ message: 'That method is not allowed.' });
  }
};

export default getAllVehicles;
