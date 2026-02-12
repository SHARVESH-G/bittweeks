# 🐦 bittweeks

Welcome to **bittweeks** – a full-stack web application designed to handle social posts, user authentication, events, messaging, and lost & found functionalities. This repository includes both the frontend and backend, built with modern technologies to deliver a complete, scalable, and responsive user experience.

---

## 🚀 Introduction

bittweeks is a full-stack application built to support a modern campus/community platform.
It features:
 - User registration & authentication
 - Social posts & interactions
 - Real-time messaging
 - Event management
 - Lost & found services

The frontend provides a responsive and interactive user interface, while the backend handles APIs, authentication, business logic, and database operations.
The backend is powered by Node.js, Express, and MongoDB, following a RESTful architecture with essential middleware to ensure security, scalability, and maintainability.
Together, they form a complete end-to-end solution rather than just a backend service.
---

## ✨ Features

- **User Authentication:** Secure registration and login using JWT and bcrypt.
- **Social Posting:** Create, retrieve, and manage posts with support for media and authorship.
- **Event Management:** CRUD operations for event creation and retrieval.
- **Messaging System:** Direct messaging between users.
- **Lost & Found:** Post and browse lost and found items.
- **Google OAuth:** Optional authentication via Google accounts.
- **MongoDB Integration:** Robust database connectivity and schema management.
- **CORS Support:** Seamless integration for frontend-backend communication.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bittweeks.git
   cd bittweeks/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and configure the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SALT=your_bcrypt_salt_rounds
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the backend server:**

   - For development with auto-restart:
     ```bash
     npm run dev
     ```

   - For production:
     ```bash
     npm run app
     ```

---

## 🧑‍💻 Usage

After installing and running the server, you can interact with the API endpoints using tools like [Postman](https://www.postman.com/) or connect your frontend application.

- **Authentication:** Register and login endpoints for user access.
- **Posts & Events:** Create, fetch, and manage posts and events.
- **Messaging:** Send and receive messages between users.
- **Lost & Found:** Post items and search for reports.

> **Note:** For API route details and documentation, review the source code in the `src/controller` directory.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

---

## 📄 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

⭐️ If you find this project helpful, please star this repository! ⭐️

</div>


## License
This project is licensed under the **MIT** License.

---
🔗 GitHub Repo: https://github.com/SHARVESH-G/bittweeks
