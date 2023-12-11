"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter(); // useRouter hook to control routing

}