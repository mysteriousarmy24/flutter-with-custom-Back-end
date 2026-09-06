# Node.js Server Instructions

## Prerequisites

- Install [Node.js](https://nodejs.org/) (the current LTS version is recommended).
- Have a MongoDB connection string available.

## Setup

1. Open a terminal in the `node_server` directory.
2. Check that Node.js is installed:

   ```bash
   node -v
   ```

   This prints the installed Node.js version.

3. For a new Node.js project, create a default `package.json` file:

   ```bash
   npm init -y
   ```

   The `-y` flag accepts the default project settings without interactive prompts. This project already has a `package.json`, so this command is only needed when creating a new project.

4. Install the server dependencies:

   ```bash
   npm i express mongoose cors nodemon
   ```

   This adds:

   - `express` for the HTTP server and API routes.
   - `mongoose` for connecting to and working with MongoDB.
   - `cors` for permitting cross-origin requests, such as requests from a Flutter web app.
   - `nodemon` for automatically restarting the server after code changes.

   To install all dependencies already declared in `package.json`, use:

   ```bash
   npm install
   ```

5. Create or update the `.env` file in the project root with the required values:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

   `PORT` is optional; the server uses port `5000` when it is not set.

## Run the server

Start the development server with Nodemon:

```bash
npm start
```

Nodemon watches the project and restarts the server after file changes. When the connection succeeds, the terminal reports the MongoDB connection and that the server is running.

## Useful commands

| Command | Purpose |
| --- | --- |
| `node -v` | Display the installed Node.js version. |
| `npm init -y` | Create a default `package.json` for a new project. |
| `npm i express mongoose cors nodemon` | Install Express, Mongoose, CORS, and Nodemon. |
| `npm install` | Install dependencies listed in `package.json`. |
| `npm start` | Run `server.js` with Nodemon. |
| `node server.js` | Run the server directly without automatic restarts. |
| `npm test` | Run the configured test script (no tests are currently configured). |

## Troubleshooting

- **MongoDB connection error:** verify that `MONGODB_URI` is present in `.env` and that the database is reachable.
- **Port already in use:** change `PORT` in `.env` to an available port, then restart the server.
