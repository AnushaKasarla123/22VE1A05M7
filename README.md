🔗 URL Shortener Microservice

This is a simple URL shortener built using **Node.js** and **Express.js**. It lets you convert long URLs into short, easy-to-share links. You can also track how many times a short link was visited and when it was created.
---
## What This Project Does
- Lets you shorten a long URL with a custom ID  
- Redirects users to the original URL when they visit the short one  
- Tracks total visits and shows when the short link was created  
---
## 🧪 How to Use
### 1. Clone the Project
``bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Server
bash
Copy
Edit
node server.js
The app will run at http://localhost:3000

📮 API Endpoints
➕ POST /shorturl
Use this to create a short URL.

Request:

json
Copy
Edit
{
  "id": "anusha2025",
  "url": "https://www.example.com"
}
Response:

json
Copy
Edit
{
  "message": "Short URL created",
  "id": "anusha2025",
  "url": "https://www.example.com"
}
GET /r/:id
Redirects to the original URL.
Example: http://localhost:3000/r/anusha2025

GET /shorturl/:id/stats
Returns the total number of visits and creation time for the given ID.

Example Response:
json
Copy
Edit
{
  "originalUrl": "https://www.example.com",
  "createdAt": "2025-07-18T06:08:50.287Z",
  "expiresAt": "2025-07-18T06:13:50.287Z",
  "totalVisits": 3
}

🛠 Tech Stack
Node.js
Express.js
Body-parser (for parsing JSON)

