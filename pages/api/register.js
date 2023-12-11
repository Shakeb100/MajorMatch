//Page to create api route to generate an SQL query to send to the MySQL database
const registersql = require('../database');

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const {user_id, username, name, gender, dob, email, password} = req.body;
    try{
        const query = 'INSERT INTO User (User_ID, Username, Name, Gender, DOB, Email, Password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user_id, username, name, gender, dob, email, password];
        await registersql.query(query, values);
        res.status(200).json({message: 'User connected successfully'});
    }
    //Error catching, we caee these errors appear in the page's console, 
    //will show if database fails to establish connection or query properly
    catch(error){
        res.status(500).json({error: error.message});
    }
    }
    else{
        res.status(405).send('Not allowed');
    }
}
