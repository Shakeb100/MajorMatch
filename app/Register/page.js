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
    <div style={{width: '100%', maxWidth: '400', margin: '0' }}>
      <h1 style={{ fontSize: '24', textAlign: 'center', marginBottom: '10'}}>Register</h1>
    </div>
  )

}
    