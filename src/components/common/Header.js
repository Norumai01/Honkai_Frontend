import React from "react";
import { SquarePen, Bell, User, Settings, LogOut} from 'lucide-react';
import styles from './Common.module.css'
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import communityLogo from "../../assets/images/gaming-community-logo.png";
import { Menu, MenuButton, MenuList, MenuItem, Button, Box, Flex, Text } from "@chakra-ui/react";

const Header = ({ profilePicURL, username }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }
    
    return (
        <header className={styles.header}>
            {/* Logo */}
            <Link to="/dashboard" className={styles.logo}>
                <img src={communityLogo} alt="Logo" className={styles.logoImage} />
            </Link>

            {/* Search bar */}
            <div className={styles.searchContainer}>
                <Input type="text" placeholder="Search..." className={styles.searchInput} />
            </div>

            {/* Icons */}
            <div className={styles.iconsContainer}>
                <SquarePen size={25} className={styles.pen} />
                <Bell size={25} className={styles.bell} />
                <Menu>
                    <MenuButton as={Button} className={styles.menuButton}>
                        <Flex align="center" gap="10px">
                            <Box className={styles.userIcon}>
                                {profilePicURL ? (
                                    <img src={profilePicURL} alt={`${username}'s profile`} className={styles.profilePic} />
                                ) : (
                                    <User size={25} />
                                )}
                            </Box>
                            <Text className={styles.username}>{username}</Text>
                        </Flex>
                    </MenuButton>
                    <MenuList className={styles.menuList}>
                        <MenuItem className={styles.menuItem}>
                            <Flex align="center">
                                <User size={20} />
                                <Text className={styles.menuItemText}>Profile</Text>
                            </Flex>
                        </MenuItem>
                        <MenuItem className={styles.menuItem}>
                            <Flex align="center">
                                <Settings size={20} />
                                <Text className={styles.menuItemText}>Settings</Text>
                            </Flex>
                        </MenuItem>
                        <MenuItem className={styles.menuItem} onClick={handleLogout}>
                            <Flex align="center">
                                <LogOut size={20} />
                                <Text className={styles.menuItemText}>Logout</Text>
                            </Flex>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </header>
    );
}

export default Header;