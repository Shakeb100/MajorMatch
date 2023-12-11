"use client"
import { useState } from 'react';
import {useRouter} from 'next/router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Predefined router, used to navigate to another page when an event occurs
  const router = useRouter();

  //function created to redirect to the redirect to the register page when called.
  const navigateToRegister = () => {
    router.push('/register'); 
  };

  //handle submit function created to establish call to API route which queries database and checks inputs 
  // entered here, if passed, submission will be read as 'ok' or sucessful and do the following acitions below.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your server's login endpoint
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if(response.ok) {
      // If login is successful, redirect to the profile page
      router.push('/profile');
    } else {
      // If there is an error or the username/password are wrong, handle it here
      const result = await response.json();
      alert(result.error || 'An error occurred during login.');
    }
  };

  return (
    //Added extra button to logon page which directs a user to the register page. This is if a user does not already have an account
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={navigateToRegister} style={{ padding: '10px', cursor: 'pointer', alignItems: 'right' }}>Register</button>
    </div>
  );
}
  export default Login;