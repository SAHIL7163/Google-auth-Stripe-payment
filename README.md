Blog Website Platform

A full-featured blog platform built with React (frontend) and Node.js/Express (backend), supporting user authentication, Google OAuth, Stripe subscriptions, role-based access control, and more.

✨ Features

- **Persistent Login** – Stay logged in across sessions using JWT tokens
- **Secure Logout** – Properly invalidate sessions
- **Google Authentication** – Sign in with Google OAuth
- **Stripe Payment Integration** – Subscribe to premium plans securely
- **Role-Based Access Control (RBAC)** – Different permissions for regular users, premium users, and admins
- **Admin Dashboard** – Premium users can create, edit, and delete their own blog posts
- **File Uploads** – Image/upload handling with Multer
- **Axios + Interceptors** – Automatic JWT token attachment and refresh handling
- **Custom React Hooks** – Reusable logic for authentication, user data, etc.
- **Session Management with useContext** – Global user state management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (or your preferred database)
- Google OAuth credentials
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in the root (and in client/server if separated)
   ```env
   # Frontend
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
   REACT_APP_STRIPE_PUBLIC_KEY=XXXXXXXXXXXXXXXXXXXXXXXX

   # Backend
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_very_strong_secret_key
   GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   STRIPE_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXX
   STRIPE_WEBHOOK_SECRET=XXXXXXXXXXXXXXXXXXXXXXXX
   ```

4. **Run the application**
   ```bash
   npm run dev    # or separately: npm start in client & server folders
   ```

5. **Open the app**  
   http://localhost:3000

## 👥 Usage

- Register or login (email/password or Google)
- Subscribe via Stripe to unlock premium features
- Create, edit, and delete your own blog posts (premium only)
- Roles are upgraded automatically after successful payment

## 🛠 Tech Stack

**Frontend**  
React • Axios • React Context • React Router • Stripe.js

**Backend**  
Node.js • Express • MongoDB • Mongoose • JWT • Multer • Passport.js (Google) • Stripe

## 🤝 Contributing

Contributions are welcome! Fork → create a branch → submit a PR.  
Please open an issue first for major changes.

## 📄 License

MIT License – see the [LICENSE](LICENSE) file for details.
