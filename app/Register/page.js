"use client"
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return(
    //Added register heading with following size parameters and location on webpage

    //Next Creating buttons for the following parameters above, being username, name, email, and password

    //Wrapped the following div code in another div to center all objects being displayed on the page.
    //The div alligns all items defined along the center axis of the page for specifics 
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '100%', maxWidth: '100px', margin: '0' }}>
        <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '10px'}}>Register</h1>
        <form>
          <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Username' />
          <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
          <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
          <input type='text' name='password' value={formData.password} onChange={handleChange} placeholder='Password' />

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}
    