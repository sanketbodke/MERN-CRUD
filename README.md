# MERN CRUD Application

This is a MERN (MongoDB, Express.js, React, Node.js) CRUD project with separate client and server folders. It allows you to perform CRUD operations (Create, Read, Update, Delete) on a MongoDB database.

## Setup

### Prerequisites

- Node.js and npm installed globally on your machine
- MongoDB installed and running locally

### Installation

Clone the repository:

```bash
git clone https://github.com/sanketbodke/MERN-CRUD.git
```

Navigate into the project directory:
```bash
cd mern-crud-project
```

Server Setup
Navigate to the server directory:
```bash
cd server
```
Install dependencies:
```bash
npm install
```
Create a .env file in the server directory and set the following environment variables:
```text
PORT=3001
MONGODB_URI=your_mongodb_uri
```
Start the server:
```bash
npm run dev
```

The server will run at http://localhost:3001.

Client Setup

* Open a new terminal window/tab.
* Navigate to the client directory:

```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the client:
```bash
npm run dev
```

The client will run at http://localhost:5173.
