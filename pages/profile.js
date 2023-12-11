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
        fetch('/api/profile') //Make sure the endpoint matches your API route
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
}