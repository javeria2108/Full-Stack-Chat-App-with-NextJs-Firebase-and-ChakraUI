# Chat App

This is a real-time chat application built using Next.js, Firebase, and Chakra UI. The app supports user authentication via Google Sign-In, real-time messaging, and displays a list of active chats.

## Features

- **User Authentication**: Sign in with Google.
- **Real-Time Messaging**: Send and receive messages in real-time.
- **Chat List**: Display a list of active chats.
- **Responsive UI**: Built with Chakra UI for a clean and responsive design.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/javeria2108/Full-Stack-Chat-App-with-NextJs-Firebase-and-ChakraUI
   cd chat-app
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication with Google Sign-In.
   - Update `firebaseconfig.js` with your Firebase project configuration.

4. **Run the development server**:
   ```bash
   yarn dev
   ```

## Configuration

Ensure you have the correct Firebase configuration in `src/firebaseconfig.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
```

## Deployment

To deploy the app, you can use platforms like Vercel, Netlify, or any other static site hosting service that supports Next.js.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README file as needed for your project!
