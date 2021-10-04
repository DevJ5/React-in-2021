import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../../../../database';

const getPersonById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connection();
  if (req.method === 'GET') {
    const person = await db.all('select * from person where id = ?', [
      req.query.id,
    ]);
    res.json(person);
  } else if (req.method === 'PUT') {
    console.log(req.body);
    const statement = await db.prepare(
      'UPDATE person SET name = ?, email = ? where id = ?'
    );
    await statement.run(req.body.name, req.body.email, req.query.id);
    statement.finalize();
    const person = await db.all('select * from person where id = ?', [
      req.query.id,
    ]);
    res.json(person);
  } else {
    res.status(500).json({ message: 'That method is not allowed.' });
  }
};

export default getPersonById;
