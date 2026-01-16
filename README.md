# Project-Chat

This project is a mobile chat application for iOS and Android developed in three phases, each adding more complexity and features.
The objective of this work is to provide training in the concepts of using Sockets with React Native and Expo.
Status (Phase 3)

Back-end of this project
https://github.com/BrunoAkT/ProjetoCHAT.BackEnd


## Technologies Used in the Project

- **Frontend:** React Native with Expo
- **Language:** TypeScript
- **Navigation:** Expo Router
- **Real-time Communication:** Socket.io
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Phases of the Project

### 🟢 Phase 1: Local Chat 

**Description:**
A simple chat application that runs entirely on the device. Messages are stored locally in the application's memory, making it a great starting point for learning React Native fundamentals.

**Features:**
- Works offline.
- Messages are stored temporarily.

**Technologies:**
- **Frontend:** React Native with Expo
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
- **Frontend:** React Native with Expo
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
- **Frontend:** React Native with Expo
- **Backend:** Node.js with Express
- **Real-time Communication:** Socket.io
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens).
