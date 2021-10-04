import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../../database';

const getVehicleById = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connection();
    const vehicle = await db.all('select * from vehicle where id = ?', [
      req.query.id,
    ]);
    res.json(vehicle);
  } else {
    res.status(500).json({ message: 'That method is not allowed.' });
  }
};

export default getVehicleById;
