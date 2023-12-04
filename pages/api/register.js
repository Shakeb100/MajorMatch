//Page to create api route to generate an SQL query to send to the MySQL database
const registersql = require('../../app/database');

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const {user_id, username, name, email, password} = req.body;
    try{
        const query = 'INSERT INTO User (User_ID, Username, Name, Email, Password) VALUES (?, ?, ?, ?, ?)';
        const values = [user_id, username, name, email, password];
        await mysql.query(query, values);
        res.status(200).json({message: 'User connected successfully'});
    }






    }

}
