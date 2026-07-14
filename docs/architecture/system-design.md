# System Design

## Overview

Kizuna is a full-stack, production-ready real-time communication platform built using the MERN stack. It enables users to communicate through direct messages, group chats, and channels while providing secure authentication, real-time messaging, file sharing, and notifications.

The application follows a **layered architecture**, separating responsibilities across the frontend, backend, database, and external services to improve maintainability, scalability, and testability.

---

# Architecture Style

Kizuna follows a layered client-server architecture.

```text
┌──────────────────────┐
│      React Client    │
└──────────┬───────────┘
           │
     REST API / Socket.IO
           │
┌──────────▼───────────┐
│    Express Backend   │
└──────────┬───────────┘
           │
 ┌─────────┴──────────┐
 │                    │
 ▼                    ▼
MongoDB Atlas    Cloudinary
```

---

# High-Level Components

## Frontend

Responsible for:

- Authentication UI
- Chat Interface
- State Management
- API Communication
- Socket Communication
- Notifications

---

## Backend

Responsible for:

- Authentication
- Business Logic
- Validation
- Authorization
- Socket.IO
- File Upload
- Search

---

## Database

Responsible for storing:

- Users
- Chats
- Messages
- Channels
- Notifications
- Sessions
- Files

---

## External Services

Cloudinary

- Profile Pictures
- Images
- Videos
- Documents

---

# Client-Server Communication

## REST API

Used for:

- Login
- Registration
- Profile
- Search
- Settings
- File Upload
- Notifications

REST is preferred for operations that require persistence, validation, or standard CRUD interactions.

---

## Socket.IO

Used for:

- Live Messaging
- Typing Indicator
- Online Status
- Read Receipts
- Delivered Status
- Notifications
- Presence Updates

Socket.IO provides low-latency, bidirectional communication suitable for real-time features.

---

# Request Lifecycle

Example: User Login

1. User submits credentials.
2. React sends an HTTP request to the Express API.
3. Express validates the request.
4. User credentials are verified.
5. JWT tokens are generated.
6. Tokens are returned to the client.
7. Redux updates the authentication state.
8. User is redirected to the dashboard.

---

# Real-Time Messaging Flow

1. User opens a chat.
2. Client joins the corresponding Socket.IO room.
3. User sends a message.
4. Backend validates and stores the message.
5. Backend emits the message to room participants.
6. Recipient receives the message instantly.
7. Delivery and seen events are synchronized.

---

# Security Architecture

Authentication

- JWT Access Token
- Refresh Token

Authorization

- Protected Routes
- Role-Based Access Control (RBAC)

Security Measures

- Password Hashing (bcrypt)
- Input Validation
- Rate Limiting
- Helmet
- CORS
- XSS Protection

---

# Deployment Architecture

Frontend

- Vercel

Backend

- Render (or Railway)

Database

- MongoDB Atlas

Media Storage

- Cloudinary

---

# Design Principles

The system is designed using the following principles:

- Separation of Concerns
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- Modular Design
- Scalability
- Maintainability
- Security by Default

---

# Scalability Strategy

To support future growth:

- Modular backend architecture
- Efficient MongoDB indexing
- Pagination for message history
- Lazy loading on the frontend
- Socket.IO rooms for targeted communication
- Stateless authentication using JWT
- External media storage via Cloudinary

---

# Future Architecture Improvements

Potential enhancements include:

- Redis for Socket.IO scaling
- Message queue (Kafka/RabbitMQ)
- Docker containerization
- Kubernetes orchestration
- CDN for media delivery
- Microservices architecture
- End-to-end message encryption
- Push notifications
- WebRTC for voice/video calls