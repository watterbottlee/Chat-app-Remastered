# Real-Time Chat Application

A modern, real-time chat application built with React and Spring Boot, featuring secure room-based communication with WebSocket technology.

## Sample view of its working.


https://github.com/user-attachments/assets/2cf4a245-9755-4e13-8dc3-6409ee89b61e



## Author notes
this repo is just a provided interface for the backedend repo at `https://github.com/watterbottlee/Chat-app-backend-remastered`
this serves the room connection features ,older message loading and real time message broadcasting. i havent added complex user registration and authrization and caching in the backedend just to make it simpler as 
this project is just to showcase that i have worked in sockets and know the functioning of it. Also for the students and newcommers this repo is well suited to explore because it is clean and modern. codes are as
loosely coupled as possible given that it needs the backend to be set up before the `npm run dev` .
so feel free to fork, clone and pull this repo. i would highly appreciate any helpfull contributions and ui enhancements.

## 🚀 Features

- **Room-Based Chat**: Create and join private chat rooms with unique IDs and password protection
- **Real-Time Messaging**: Instant message delivery using WebSocket (STOMP over SockJS)
- **Message History**: Persistent message storage with MongoDB integration
- **User Authentication**: Secure room access with password verification (jwt and all are not added in the backend to focus on websocket and not make it complex)
- **Message Queuing**: Automatic message queuing for unstable connections

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and development server
- **Tailwind CSS 4.1.17** - Styling
- **React Router DOM 7.9.5** - Client-side routing
- **STOMP.js 7.2.1** - WebSocket communication
- **React Toastify 11.0.5** - Notifications

### Backend
- **Spring Boot** - Application framework
- **MongoDB** - Database for rooms and messages
- **WebSocket** - Real-time bidirectional communication
- **STOMP Protocol** - Messaging protocol over WebSocket

## 📋 Prerequisites

Before running this application, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- Spring Boot backend running on `localhost:8080`
- MongoDB instance

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/watterbottlee/Chat-app-Remastered
   cd chatapp-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure backend URL** (if different from localhost:8080)
   
   Update the `BASE_URL` in `src/services/roomService.js`:
   ```javascript
   const BASE_URL = "http://your-backend-url:port/";
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
chatapp-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   └── chatarea.jsx
│   ├── Forms/           # Form components
│   │   ├── nameform.jsx
│   │   └── roomform.jsx
│   ├── Pages/           # Page components
│   │   ├── chatpage.jsx
│   │   └── homepage.jsx
│   ├── services/        # API and WebSocket services
│   │   ├── roomService.js
│   │   ├── socket.js
│   │   └── testsocket.js  #this is just a test and doesnt influencce the app
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
└── vite.config.js
```

## 🎯 Usage

### Creating a Room

1. Navigate to the home page
2. Click on "Create Room"
3. Enter a unique room ID and password
4. Share the room ID and password with participants

### Joining a Room

1. Enter the room ID and password
2. Provide your display name
3. Click "Join Room" to connect
4. Start chatting in real-time!

## 🔌 API Endpoints

### Room Management

- **Create Room**
  ```
  POST /api/v1/rooms/create-room
  Body: { roomId, password }
  ```

- **Join Room**
  ```
  POST /api/v1/rooms/join-room
  Body: { roomId, password }
  ```

- **Fetch Messages**
  ```
  GET /api/v1/rooms/{roomId}/messages
  ```

### WebSocket

- **Connection**: `ws://localhost:8080/chat`
- **Subscribe**: `/topic/room/{roomId}`
- **Send Message**: `/app/sendMessage/{roomId}`

## 🔐 Message Format

```javascript
{
  content: "message content",
  sender: "username",
  roomId: "room-id"
}
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

kanishk ranjan barman- [watterbottlee](https://github.com/watterbottlee)

## 🙏 Acknowledgments

- Spring Boot for the backend framework
- React team for the amazing frontend library
- STOMP.js for WebSocket implementation
- Tailwind CSS for the styling system

## 📞 Support

For support, email kaniskaranjanbarman@gmail.com or open an issue in the repository.

---

⭐️ If you found this project helpful, please consider giving it a star!
