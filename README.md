ArcadeCTF - Full-Stack Capture the Flag (CTF) Platform
ArcadeCTF is a personal project built as a high-performance, full-stack Capture the Flag (CTF) platform designed to offer engaging and challenging cybersecurity tasks. This platform incorporates a Gemma 7B-powered chatbot with NLP capabilities, providing real-time problem-specific hints to improve user experience and engagement during CTF challenges.

Features
MERN Stack Architecture:
Built using MongoDB, Express.js, React.js, and Node.js, ensuring high performance and scalability for managing challenges, user interactions, and real-time data.

Real-Time Interaction:
Users interact with the platform in real-time, receiving hints and support while solving CTF challenges, with the backend and chatbot offering immediate responses.

Responsive and User-Friendly UI:
Designed with React.js, the UI is responsive and accessible, making it easy to engage with the platform on any device.

Challenge Management:
Admins (or users with proper access) can easily manage CTF challenges through the platform's backend.

Technologies Used
MERN Stack:

MongoDB: NoSQL database for storing user data, challenges, and results.
Express.js: Web framework to handle API requests and manage backend services.
React.js: Frontend framework for building dynamic user interfaces.
Node.js: Backend runtime environment for handling server-side processes.
Gemma 7B:
A fine-tuned Generative AI model used to power the chatbot’s NLP capabilities and improve user interaction.

RESTful APIs: For seamless communication between the backend and frontend.

HTML, CSS, JavaScript: Used for building the responsive user interface.

Setup & Installation
Clone the repository:

git clone https://github.com/PocketSkye/ArcadeCTF.git
cd ArcadeCTF
Set up the backend:

Install dependencies:
cd backend
npm install
Run the backend server:
npm start
Set up the frontend:

Install dependencies:
cd frontend
npm install
Run the frontend server:
npm start
Access the application:
Open your browser and navigate to http://localhost:3000 for the frontend, and http://localhost:5000 for the backend API.

Usage
CTF Participation:
Users can solve cybersecurity challenges within the platform, with real-time assistance from the Gemma 7B chatbot.

Hint Generation:
The chatbot provides hints for specific problems, improving the user experience and engagement in real-time.

Challenge Management:
Admins can add and manage CTF challenges via the backend interface, providing fresh content for users to solve.

License
This project is personal and is licensed under the MIT License. Feel free to use, modify, and contribute to the project. See the LICENSE file for details.