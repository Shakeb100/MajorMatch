"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
    //set variable for username, description and router. 
    //Router is used to route to another page when an event has been compelted like a button submission
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter(); // useRouter hook to control routing

    //usage of useEffect hook which is used to throw error in website console on some action done.
    useEffect(() => {
        fetch('/api/profile') //Make sure the file path matches your API route path
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error: Status ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setUserName(data.Name); //It should be `data.Name` to match the API response
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      }, []);


      const navigateToLogin = () => {
        router.push('/login'); // Redirect to the login page
      };
    
      return (
        //Created div and used skeleton code similar to register to show text, textboxes and other objects on the page.
        //Used next.js tools to align objects per our desired design
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1>{userName || 'Loading...'}</h1>
            <button onClick={navigateToLogin} style={{ padding: '10px', cursor: 'pointer' }}>Logout</button></div>
          <label htmlFor="description" style={{ fontSize: 'large' }}>Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', height: '200px', marginTop: '10px' }}
          />
        </div>
      );
}