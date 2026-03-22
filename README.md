# NoteHub & User Management API
## A full-featured backend API built with Express.js for managing user accounts and personal notes. The system supports secure authentication, session management, password reset flows, and file uploads for user avatars.

## 🎨 [Live Project](https://nodejs-hw-jx7n.onrender.com/)
## ⚙️ [Frontend Repository](https://github.com/id753/note_hub_app)

##  Backend Tech Stack
### Node.js, Express.js, MongoDB, Mongoose; REST API; Validation (Joi, Celebrate); Logging (Pino); Environment & Middleware (dotenv, CORS, http-errors); API Testing (Postman); Deployment (Render)

## Features
### Backend Experience
📝 Notes Management
- 🛠 **Full CRUD Lifecycle**: Create, Read, Update, and Delete notes with ease.
- 🏷 **Smart Tagging**: Organize entries using categories (e.g., Todo, Work, Personal).
- 🔍 **Advanced Search**: Integrated full-text search across titles and content for quick retrieval.
  
🔑 User Authentication & Authorization
- 📝 **User Registration & Login:** Secure onboarding using email and hashed passwords.
- 🎟 **Dual-Token System**: Session-based authentication using Access and Refresh Tokens.
- 🛡 **Secure Cookie Handling**: Protection against attacks using __httpOnly__, sameSite, and secure flags.
- 🔄 **Session Rotation**: Automated token expiration and refresh mechanisms to keep users securely logged in.

🛡 Password Management
- 📧 **Reset Requests**: Ability to request a password reset link via automated emails.
- 🔐 **Secure Recovery Flow**: Identity verification using short-lived JWT tokens.
- 🧹 **Session Cleanup**: Automatic invalidation of all active sessions after a password change for maximum security.

👤 User Profile
- ℹ️ **Profile Retrieval**: Dedicated endpoints to fetch the current user's data.
- ✍️ **Data Updates**: Seamlessly update personal information and preferences.
- 🖼 **Avatar Management**: Upload and host profile pictures with Cloudinary cloud integration.

🛠 API Utilities & Middleware
- 📜 **Centralized Logging**: Real-time request monitoring and debugging with Pino.
- 🚧 **Global Error Handling**: Robust middleware for standardized and clean error responses.
- ✅ **Input Validation**: Strict data integrity checks using Joi and Celebrate.
- 🌐 **CORS Configuration**: Securely managed cross-origin requests for frontend integration.

✉️ Email Notifications
- 🚀 **SMTP Integration**: Reliable delivery of system emails for password resets using Nodemailer and Handlebars templates.

## Getting Started (Backend)
1️⃣ Clone the repository
   
    git clone <your-repository-link>
2️⃣ Install dependencies

    npm install
3️⃣ Create an environment file (.env)
Copy .env.example to .env and edit if necessary:

    PORT=
    MONGO_URI=
    etc. ...
4️⃣ Run the server locally

    npm run dev
The server will be available at: http://localhost:3000

5️⃣ Test the API
Use [Postman](https://www.postman.com/)  or any API testing tool.

    Example request: GET http://localhost:3000/todos

## ⚠️ Note:
The server is hosted on Render's free plan and may “sleep” when idle — the first load after waking up can take 30–50 seconds.
