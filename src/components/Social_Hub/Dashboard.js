import React from "react";
import styles from "./hub.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Header from "../common/Header";

const Dashboard = () => {
    // User data is obtained from being stored in localStorage.
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove from local storage.
        localStorage.removeItem('user');
        navigate('/');
    }

    React.useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user, navigate]);

    // Prevent rendering content if no user.
    if (!user) return null; 

    
    return (
        <div className={styles.dashboard}>
            <Header profilePicURL={user?.profilePictureURL} username={user?.username}/>

            <h1>Welcome to the Dashboard, {user?.username}!</h1>
            <p>Your email is: {user?.email}</p>
            <p>Your id is: {user?.id}</p>
            {/* ... */}

            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}

export default Dashboard;