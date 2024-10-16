import React from "react";
import { SquarePen, Bell, User } from 'lucide-react';
import styles from './Common.module.css'
import Input from "./Input";
import communityLogo from "../../assets/images/gaming-community-logo.png";

const Header = ({ profilePicURL, username }) => {
    return (
        <header className={styles.header}>
            {/* Logo */}
            <div className={styles.logo}>
                <img src={communityLogo} alt="Logo" className={styles.logoImage} />
            </div>

            {/* Search bar */}
            <div className={styles.searchContainer}>
                <Input type="text" placeholder="Search..." className={styles.searchInput} />
            </div>

            {/* Icons */}
            <div className={styles.iconsContainer}>
                <SquarePen size={25} className={styles.pen} />
                <Bell size={25} className={styles.bell} />
                <div className={styles.userInfo}>
                    <div className={styles.userIcon}>
                        {profilePicURL ? (
                            <img src={profilePicURL} alt={`${username}'s profile`} className={styles.profilePic} />
                        ) : (
                            <User size={25} />
                        )}
                    </div>
                    <p style={{ fontWeight: 500 }}>{ username }</p>
                </div>                
            </div>
        </header>
    );
}

export default Header;