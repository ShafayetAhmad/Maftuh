Here is the updated README with the changes reflecting the use of Next.js with the App Router:

---

# Maftuh

This project is going to be a big one. I am going to implement the technologies that I learn along the way in this project. This is going to be my Full Stack Playground. As I am still learning, I might often make mistakes and implement things in the wrong way. But I will learn from my mistakes and improve my skills. Any suggestions, corrections, feedback, and contributions, especially from experienced developers, are highly appreciated.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Functionalities Checklist](#functionalities-checklist)
6. [Contributing](#contributing)
7. [License](#license)

---

## Introduction

Maftuh is a full-stack web application that aims to replicate the functionalities of a modern social media platform. As I learn new technologies and frameworks, I will integrate them into this project. This project serves as a learning playground to experiment, make mistakes, and grow as a developer.

## Technologies Intended to Use

- **Frontend:**

  - React
  - Next.js (with App Router)
  - Tailwind CSS
  - TypeScript
  - Redux
  - Axios for API requests
  - TanStack Query for data fetching

- **Backend:**

  - Node.js
  - Express
  - TypeScript
  - MongoDB
  - Mongoose
  - Zod for validation
  - JWT for authentication

- **Others:**
  - AWS
  - Docker
  - Google Maps API
  - Stripe API
  - ESLint and Prettier for code quality

## Getting Started

### Prerequisites

- Node.js and npm installed
- Docker installed (optional, for containerization)
- MongoDB instance running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shafayetahmad/maftuh.git
   cd maftuh
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   npm run start:dev
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
maftuh/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── authController.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── userModel.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── authRoutes.ts
│   │   │   │   ├── middlewares/
│   │   │   │   │   └── authMiddleware.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── authService.ts
│   │   │   │   └── validators/
│   │   │   │       └── authValidator.ts
│   │   │   ├── posts/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── postController.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── postModel.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── postRoutes.ts
│   │   │   │   ├── middlewares/
│   │   │   │   │   └── postMiddleware.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── postService.ts
│   │   │   │   └── validators/
│   │   │   │       └── postValidator.ts
│   ├── app.ts
│   └── server.ts
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/             # Auth module (route)
│   │   │   │   ├── page.tsx      # Auth page component
│   │   │   │   ├── login.tsx     # Login page component
│   │   │   │   └── signup.tsx    # Signup page component
│   │   │   ├── posts/            # Posts module (route)
│   │   │   │   ├── page.tsx      # Posts listing page
│   │   │   │   ├── [id]/         # Dynamic route for individual posts
│   │   │   │   │   └── page.tsx  # Post details page
│   │   │   ├── profile/          # Profile module (route)
│   │   │   │   ├── [id]/         # Dynamic route for user profile
│   │   │   │   │   └── page.tsx  # Profile details page
│   │   │   ├── settings/         # Settings module (route)
│   │   │   │   ├── page.tsx      # Settings page component
│   │   ├── components/           # Shared components (e.g., navbar, footer)
│   │   │   ├── Navbar.tsx        # Example shared component
│   │   ├── styles/               # Global styles (CSS, SCSS)
│   │   └── utils/                # Utility functions
│   │       └── api.ts            # API utility functions
│   ├── public/                   # Static assets (images, fonts, etc.)
│   ├── package.json
│   └── tsconfig.json
├── docs/
├── .env
├── .gitignore
├── README.md
└── LICENSE
```

## Functionalities Checklist

### Authentication

- [ ] User registration
- [ ] User login
- [ ] User logout
- [ ] Password reset
- [ ] Account verification (email/SMS)

### User Profile

- [ ] View own profile
- [ ] View other users' profiles
- [ ] Edit profile (name, bio, profile picture)
- [ ] Upload profile picture
- [ ] Cover photo

### Posts

- [ ] Create a post (text, images, videos)
- [ ] Edit post
- [ ] Delete post
- [ ] Like/Unlike post
- [ ] Comment on post
- [ ] Reply to comments
- [ ] Share post
- [ ] View post details

### Friends

- [ ] Send friend request
- [ ] Accept friend request
- [ ] Reject friend request
- [ ] Unfriend

### Messaging

- [ ] Send direct messages
- [ ] Group messaging
- [ ] View message history
- [ ] Mark messages as read/unread
- [ ] Delete messages

### Notifications

- [ ] Receive notifications (likes, comments, friend requests, messages)
- [ ] View notifications
- [ ] Mark notifications as read
- [ ] Delete notifications

### Search

- [ ] Search for users
- [ ] Search for posts
- [ ] Search filters (e.g., by date, by location)

### Privacy and Security

- [ ] Set post privacy (public, friends only, custom)
- [ ] Block users
- [ ] Report content (posts, comments, messages)
- [ ] GDPR compliance (data export, data deletion)

### Settings

- [ ] Account settings (email, password)
- [ ] Privacy settings
- [ ] Notification settings
- [ ] Theme preferences
- [ ] Language preferences

### Admin Panel

- [ ] View user analytics
- [ ] Manage reported content
- [ ] Manage users (block, delete, suspend)

### Additional Features

- [ ] Events
- [ ] Marketplace
- [ ] Groups
- [ ] Pages
- [ ] Polls
- [ ] Live streaming

### Testing

- [ ] Unit tests
- [ ] Integration tests
- [ ] End-to-end tests

### Documentation

- [ ] API documentation
- [ ] User guide
- [ ] Developer guide

## Contributing

I welcome contributions from developers of all levels. Any suggestions, corrections, feedback, and contributions, especially from experienced developers, are highly appreciated. Kindly create an issue before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
