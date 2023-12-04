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
    <div style={{width: '100%', maxWidth: '400', margin: '0' }}>
      <h1 style={{ fontSize: '24', textAlign: 'center', marginBottom: '10'}}>Register</h1>
      <form>
      <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Username' />
      <input type='text' name='name' value={formData.username} onChange={handleChange} placeholder='Username' />
      <input type='text' name='email' value={formData.username} onChange={handleChange} placeholder='Username' />
      <input type='text' name='password' value={formData.username} onChange={handleChange} placeholder='Username' />







      </form>
    </div>

  )

}
    