 Lab 12.2 – Server to Server Communication

## Overview
This lab demonstrates basic server-to-server communication using two Express.js servers. The **main server** sends a request to the **secondary server** and displays the response.

## Structure
lab12.2/
├── main-server/
│   └── server.js
├── secondary-server/
│   └── server.js

## How It Works
- `secondary-server` runs on port 4000 and responds to GET `/data` with a JSON message.
- `main-server` runs on port 3000 and fetches data from the secondary server using Axios.
- Browser output: `Main Server received: Hello from Secondary Server!`



