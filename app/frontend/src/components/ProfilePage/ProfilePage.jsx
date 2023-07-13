
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/users/6');
            const responseData = await response.json();
            setUser(responseData);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="profile-page">
            <Link to="/">
                <button> Home</button>
            </Link>
            <div>
            {user ? (
                <pre>{JSON.stringify(user, null, 2)}</pre>
            ) : (
                <p>Loading son's data...</p>
            )}
            </div>
            {/* Add more profile information and components as needed */}


        </div>
    );
};

export default ProfilePage;
