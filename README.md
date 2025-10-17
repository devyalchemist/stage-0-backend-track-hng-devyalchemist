
Node.js Cat Fact Profile API
This is a simple, lightweight backend server built with native Node.js. It provides a single API endpoint that returns a static user profile combined with a random cat fact fetched from an external API. This project is designed to demonstrate core Node.js concepts, including handling HTTP requests, asynchronous operations, error handling, and environment variables without relying on external frameworks like Express.

✨ Features
Native Node.js Server: Built using only the core http module.

External API Integration: Fetches a random cat fact from https://catfact.ninja/fact on each request.

Robust Error Handling: Gracefully handles network errors and timeouts from the external API.

Environment-Ready: Uses dotenv to manage environment variables for configuration.

CORS Enabled: Includes Access-Control-Allow-Origin headers, making it ready for frontend integration.

Basic Logging: Logs incoming requests to the console for debugging.

🛠️ Technologies Used
Runtime: Node.js

Dependencies: dotenv

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need to have Node.js (version 18 or later is recommended) and npm installed on your computer.

Installation & Setup
Clone the repository:

Bash

git clone <your-repository-url>
cd <repository-folder>
Install dependencies:

Bash

npm install
Create an environment file: Create a file named .env in the root of your project and add the port number.

Code snippet

# .env file
PORT=3000
Running the Server
To start the server, run the following command in your terminal:

Bash

npm start
You should see a confirmation message in your console: 🚀 Server is live and listening on http://localhost:3000

API Endpoint
The server exposes one primary endpoint.

GET /me
Returns the user profile object along with a fresh cat fact.
