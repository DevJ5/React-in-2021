import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../../../database';

const getAllVehiclesByPersonId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    const db = await connection();
    const person = await db.all('select * from vehicle where ownerId = ?', [
      req.query.id,
    ]);
    res.json(person);
  } else {
    res.status(500).json({ message: 'That method is not allowed.' });
  }
};

export default getAllVehiclesByPersonId;
