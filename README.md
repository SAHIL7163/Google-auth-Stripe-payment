Blog Website Platform README
Welcome to our Blog Website Platform! Below you'll find all the necessary information to get started with our platform, including features, setup instructions, and usage guidelines.

//* Features *//

Persistent Login: Users can log in and stay logged in across sessions.
Logout: Users can securely log out of their accounts.
Axios: Axios is used for making HTTP requests to the server.
Axios Interceptors: Interceptors are set up to handle JWT token authentication.
Hooks: Custom React hooks are utilized for various functionalities.
Multer: Multer is integrated for handling file uploads.
Role-Based Access Control (RBAC): Users are authorized based on their roles.
Google Authentication: Users can sign in using their Google accounts.
Stripe Payment Integration: Users can subscribe to plans and make payments using Stripe.
Session Management with useContext: React context is used for managing user sessions.

//* Setup Instructions *//
1.. Clone the Repository:
git clone https://github.com/your-repo/blog-website.git

2..Install Dependencies:
cd blog-website 
npm install

3..Configure Environment Variables:
Create a .env file in the root directory.
  REACT_APP_API_BASE_URL=<your_api_base_url>
  REACT_APP_GOOGLE_CLIENT_ID=<your_google_client_id>
  REACT_APP_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
4..Run the Application:
npm start
5..Access the Application:
Open your web browser and navigate to http://localhost:3000.


//*Usage Guidelines*//
User Registration and Login: Users need to register and log in to access full blog content. Registration/login is based on JWT tokens.
Google Sign-In: Users can also sign in using their Google accounts.
Subscription Plan: Users can subscribe to premium plans to access additional features. Payment is handled securely through Stripe.
Admin Features: Upon subscription, users gain access to admin features such as publishing, editing, and deleting their own blogs.
Role-Based Access Control (RBAC): Different user roles have different access levels. Ensure proper role assignments for appropriate access.
Session Management: User sessions are managed using React context, providing a seamless experience.
Contributing
We welcome contributions from the community! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on our GitHub repository.

   License
This project is licensed under the MIT License - see the LICENSE file for details.
