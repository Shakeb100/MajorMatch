// Connection 1, testing const versus import as I had previous errors usuing one
// another.
const profileSql = require('../../pages/database');
//import profileSql from '../../pages/database'; // 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = 'SELECT Name FROM User ORDER BY User_ID ASC LIMIT 1';
      const [rows] = await profileSql.query(query);
      if (rows.length > 0) {
        res.status(200).json({ Name: rows[0].Name });
      } else {
        res.status(404).json({ error: 'No users found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

