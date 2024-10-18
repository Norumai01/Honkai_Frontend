import React from "react";
import styles from "./hub.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Card from "../PostCards/Card";
import Footer from "../common/Footer";

const Dashboard = () => {
    // User data is obtained from being stored in localStorage.
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user, navigate]);

    // Prevent rendering content if no user.
    if (!user) return null; 
    
    return (
        <div className={styles.dashboard}>
            <Header className={styles.header} />

            {/* Posts */}
            <main className={styles.main}>
                <div className={styles.postsContainer}>
                    {user.posts.map(post => (
                        <Card post={post} user={user} />
                    ))}
                </div>
            </main>

            <h2>No more posts to load...</h2>

            <Footer className={styles.footer} />
        </div>
    );
}

export default Dashboard;