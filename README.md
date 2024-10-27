<div align="center">
  <img src="src/assets/images/gaming-community-logo.png" alt="Gaming Community Logo" width="150"/>
  
  # Honkai Website Frontend
</div>

A React-based frontend application for a social media platform focused on Honkai content. This web application provides user authentication, post management, and social interaction features with a modern, responsive design.

## Features

### Authentication System
- User login and registration
- Protected routes for authenticated users
- Basic authentication with username/password
- Session management using localStorage

### User Interface
- Dark theme design
- Responsive layout
- Custom navigation header
- Profile management
- Image upload capabilities

### Post Management
- Create, edit, and delete posts
- Image upload for posts
- Post feed display
- Interactive post cards
- Post metadata display (timestamps, user info)

### Social Features
- User profiles
- Follow/Unfollow system
- Post interaction capabilities
- User statistics display

## Tech Stack & Dependencies

### Core Technologies
- React 18.3.1
- React Router Dom 6.27.0
- Chakra UI 2.10.2
- Axios 1.7.7
- Framer Motion 11.11.9
- Lucide React 0.453.0

### Full Dependencies
```json
{
  "dependencies": {
    "@chakra-ui/react": "^2.10.2",
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "date-fns": "^4.1.0",
    "framer-motion": "^11.11.9",
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

## Project Structure
```
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── game_logo.png
│   │       └── gaming-community-logo.png
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthPage.js
│   │   │   ├── AuthPage.module.css
│   │   │   ├── LoginForm.js
│   │   │   └── RegisterForm.js
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── Common.module.css
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Input.js
│   │   │   └── Logo.js
│   │   ├── PostCards/
│   │   │   ├── Card.js
│   │   │   ├── CreatePost.js
│   │   │   ├── Post.module.css
│   │   │   └── PostCard.module.css
│   │   └── Social_Hub/
│   │       ├── Dashboard.js
│   │       ├── hub.module.css
│   │       └── UserProfile.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Steps
1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:8080
```

4. Start the development server
```bash
npm start
```

The application will start on `http://localhost:3000` by default.

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Component Overview

### Authentication Components
- `AuthPage`: Main authentication page container
- `LoginForm`: Handles user login
- `RegisterForm`: Handles new user registration

### Post Components
- `Card`: Displays individual post with interactions
- `CreatePost`: Form for creating new posts

### Social Components
- `Dashboard`: Main feed and post display
- `UserProfile`: User profile page with stats

### Common Components
- `Header`: Navigation and user controls
- `Footer`: Standard footer component
- `Button`: Reusable button component
- `Input`: Reusable input component

## Features To-Do List

### Authentication Enhancements
- [x] Basic authentication
- [x] Protected routes
- [x] User session management
- [ ] JWT/OAuth integration
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Remember me functionality

### UI/UX Improvements
- [ ] Responsive design
- [x] Dark theme
- [x] Custom component styling
- [ ] Loading states
- [ ] Error handling UI
- [ ] Infinite scroll

### Feature Additions
- [x] Post creation
- [x] Image upload
- [x] User profiles
- [ ] Post search
- [ ] User search
- [ ] Post categories
- [ ] Direct messaging
- [ ] Notifications

### Performance Optimizations
- [x] Image optimization
- [ ] Lazy loading
- [ ] Performance monitoring

### Testing
- [ ] Unit tests
- [ ] Component testing
- [ ] Performance testing

## Project Status

This is an unofficial, non-commercial project. All rights reserved. This code is provided for viewing and educational purposes only. No part of this codebase may be reproduced, distributed, or modified without explicit written permission from the author.

### Rights and Usage
- This is a personal project and is not officially licensed or affiliated with any company
- The code is shared publicly for portfolio and educational purposes
- Unauthorized use, modification, or distribution of this code is prohibited
- For inquiries about using this code, please contact the author directly

© 2024 Johnny Nguyen. All rights reserved.