# Project-Chat

This project is a chat application developed in three phases, each adding more complexity and features.

## Phases of the Project

### 🟢 Phase 1: Local Chat 

**Description:**
A simple chat application that runs entirely in the browser. Messages are stored locally in the browser's memory, making it a great starting point for learning React fundamentals.

**Features:**
- Works offline.
- Messages are stored temporarily.

**Technologies:**
- **Frontend:** React
- **State Management:** `useState`

---

### 🟡 Phase 2: Chat with Backend

**Description:**
This phase introduces a backend to persist messages. It allows for multiple users and communication through a RESTful API.

**Features:**
- User accounts.
- Messages are saved in a database.
- Communication between frontend and backend via HTTP requests.

**Technologies:**
- **Frontend:** React
- **HTTP Client:** `fetch` or `axios`
- **Backend:** Node.js with Express and Cors
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens).

---

### 🔵 Phase 3: WhatsApp-style Real-time Chat

**Description:**
The final phase implements real-time communication, similar to modern messaging apps like WhatsApp. Users can see when others are typing and receive messages instantly.

**Features:**
- Real-time messaging.
- "User is typing" indicator.
- User authentication.
- See which users are online.

**Technologies:**
- **Frontend:** React
- **Backend:** Node.js with Express
- **Real-time Communication:** Socket.io
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens).
