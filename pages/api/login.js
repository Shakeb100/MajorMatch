//Call to database connection code we have stored in pages directory
const loginSql = require('../../pages/database');

//Predefined based on same contents used in Register and Profile API routes. 
//Added more HTTP status codes for error handling
//Added query to the database to query for the current user logged in
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      try {
        //query which will be called to our Database, to the User table and looking for the Names
        // where the username is equal to the one provided above as a parameter for the login page.
        const query = 'SELECT * FROM User WHERE Username = ?';
        const values = [username];
        const [rows] = await loginSql.query(query, values);
  
        console.log(rows); // Log the database result
  
        if (rows.length > 0) {
          const user = rows[0];
  
          // Make sure to access the password field correctly, depending on the case used in your database
          // trim function is used to clear any whitespaces that may have been placed in the username/password
          // Aids in preventing errors from occurring such as invalid credentials.
          if (password.trim() === user.Password.trim()) {
            res.status(200).json({ message: 'Login successful' });
          } else {
            res.status(401).json({ error: 'Invalid credentials' });
          }
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      } catch (error) {
        console.error(error); // Log any errors
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).send('Method not allowed');
    }
  };
  