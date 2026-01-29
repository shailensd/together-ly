# Togetherly

A modern real-time chat and video calling application built with React, Express, and Stream.

## ✨ Features

- **Real-time Messaging** - Instant messaging with typing indicators and read receipts powered by Stream Chat
- **Video & Voice Calls** - High-quality video conferencing using Stream Video SDK
- **Channel Management** - Create public/private channels, invite members, and manage channel settings
- **User Authentication** - Secure authentication and authorization with Clerk
- **Pinned Messages** - Pin important messages for easy access
- **Custom UI Components** - Polished custom channel headers, previews, and modals
- **Responsive Design** - Beautiful Tailwind CSS styling that works on all devices
- **Error Tracking** - Integrated Sentry for monitoring and debugging
- **Background Jobs** - Scheduled tasks with Inngest

## 🏗️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Stream Chat React** - Pre-built chat UI components
- **Stream Video React SDK** - Video calling components
- **Clerk React** - Authentication components
- **TanStack Query** - Powerful async state management
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js & Express 5** - Fast, minimalist web framework
- **MongoDB & Mongoose** - NoSQL database and ODM
- **Stream Chat** - Real-time messaging infrastructure
- **Clerk Express** - Server-side authentication middleware
- **Inngest** - Reliable background job processing
- **Sentry** - Application monitoring and error tracking
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or Atlas)
- Stream account (for chat and video)
- Clerk account (for authentication)
- Sentry account (optional, for error tracking)
- Inngest account (optional, for background jobs)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Togetherly
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB (use one of the following)
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/togetherly
# For MongoDB Atlas, use your connection string from Atlas dashboard:
# MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER>.mongodb.net/togetherly

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Sentry (optional)
SENTRY_DSN=your_sentry_dsn

# Inngest (optional)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
# API
VITE_API_URL=http://localhost:5000

# Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Stream
VITE_STREAM_API_KEY=your_stream_api_key

# Sentry (optional)
VITE_SENTRY_DSN=your_sentry_dsn
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## 📦 Project Structure

```
Togetherly/
├── backend/
│   ├── src/
│   │   ├── server.js              # Express app entry point
│   │   ├── config/                # Configuration files
│   │   │   ├── db.js              # MongoDB connection
│   │   │   ├── env.js             # Environment variables
│   │   │   ├── inngest.js         # Inngest client setup
│   │   │   └── stream.js          # Stream client setup
│   │   ├── controllers/           # Route controllers
│   │   │   └── chat.controller.js # Chat-related endpoints
│   │   ├── middlewares/           # Express middlewares
│   │   │   └── auth.middleware.js # Authentication middleware
│   │   ├── models/                # Mongoose models
│   │   │   └── user.model.js      # User schema
│   │   └── routes/                # API routes
│   │       └── chat.route.js      # Chat routes
│   ├── instrument.mjs             # Sentry instrumentation
│   ├── package.json
│   └── vercel.json                # Vercel deployment config
│
└── frontend/
    ├── src/
    │   ├── main.jsx               # React entry point
    │   ├── App.jsx                # Main app component
    │   ├── components/            # React components
    │   │   ├── CreateChannelModal.jsx
    │   │   ├── CustomChannelHeader.jsx
    │   │   ├── CustomChannelPreview.jsx
    │   │   ├── InviteModal.jsx
    │   │   ├── MembersModal.jsx
    │   │   ├── PageLoader.jsx
    │   │   ├── PinnedMessagesModal.jsx
    │   │   └── UsersList.jsx
    │   ├── hooks/                 # Custom React hooks
    │   │   └── useStreamChat.js   # Stream chat hook
    │   ├── pages/                 # Page components
    │   │   ├── AuthPage.jsx       # Login/signup page
    │   │   ├── CallPage.jsx       # Video call page
    │   │   └── HomePage.jsx       # Main chat page
    │   └── styles/                # CSS files
    │       ├── auth.css
    │       └── stream-chat-theme.css
    ├── lib/                       # Utility libraries
    │   ├── api.js                 # API client
    │   └── axios.js               # Axios configuration
    ├── providers/                 # React context providers
    │   └── AuthProvider.jsx       # Authentication provider
    ├── public/                    # Static assets
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── vercel.json
```

## 🌐 Deployment

### Deploy to Vercel

Both frontend and backend are configured for Vercel deployment.

**Backend:**
```bash
cd backend
vercel
```

**Frontend:**
```bash
cd frontend
vercel
```

Make sure to add all environment variables in the Vercel dashboard for each project.

### Environment Variables for Production

Update your frontend `.env` to point to your production backend:
```env
VITE_API_URL=https://your-backend.vercel.app
```

## 🔑 API Endpoints

### Chat Routes
- `POST /api/chat/token` - Generate Stream chat token
- `POST /api/chat/channel` - Create a new channel
- `GET /api/chat/channels` - Get user's channels
- Additional endpoints in `backend/src/routes/chat.route.js`

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Runs Vite dev server with HMR
```

### Linting
```bash
cd frontend
npm run lint
```

### Build for Production
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


