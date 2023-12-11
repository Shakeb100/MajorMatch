"use client"
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    user_id: '',
    username: '',
    name: '',
    gender: '',
    dob: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  //Event function ro call api route and run query when register button is pressed and a page submission is detected
  async function handleSubmit(event){
    //prevents default form submitting with empty data
    event.preventDefault();

    //Calling onto API route, which will run the query on the database
    const response = await fetch('../api/register', { method: 'POST', headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(formData),});

    if(response.ok){
      const result = await response.json();
      
      //Redirect to profile page on successful submission
      window.location.href = '/login';
    }
    //Throw error if fetch fails
    else{
      const error = await response.json();
      console.error('Failed to register new user', error);
    }
  }


  return(
    //Added register heading with following size parameters and location on webpage

    //Next Creating buttons for the following parameters above, being username, name, email, and password

    //Wrapped the following div code in another div to center all objects being displayed on the page.
    //The div alligns all items defined along the center axis of the page for specifics 
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '100%', maxWidth: '400px', margin: '0' }}>
        <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '10px'}}>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' name='user_id' value={formData.user_id} onChange={handleChange} placeholder='User ID' />
          <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Username' />
          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
          <input type='text' name='gender' value={formData.gender} onChange={handleChange} placeholder='Male, Female, Other' />
          <input type='text' name='dob' value={formData.dob} onChange={handleChange} placeholder='Birth Date: YYYY-MM-DD' />
          <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
          <input type='text' name='password' value={formData.password} onChange={handleChange} placeholder='Password' />

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}
    