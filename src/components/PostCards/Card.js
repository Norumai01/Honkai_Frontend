import React from 'react';
import { Box, Flex, Text, Image, Avatar } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { User } from 'lucide-react';
import styles from './PostCard.module.css';

const Card = ({ post, user }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        
        <Flex className={styles.userInfo}>
          <Box className={styles.avatar}>
            {user.profilePictureURL ? (
              <Avatar 
                src={user.profilePictureURL}
                name={user.username}
                width="60px"
                height="60px"
              />
            ) : (
              <User size={24} color="#FFFFFF" />
            )}
          </Box>

          <Box>
            <Text className={styles.username}>{user.username}</Text>
            <Text className={styles.timestamp}>
              {formatDistanceToNow(new Date(post.postAt), { addSuffix: true })}
            </Text>
          </Box>
        </Flex>

        {post.imageURL && (
          <Image
            src={post.imageURL}
            alt={post.title}
            className={styles.image}
          />
        )}

        <Text className={styles.title}>{post.title}</Text>
        <Text className={styles.description}>{post.description}</Text>
      </Box>
    </Box>
  );
};

export default Card;