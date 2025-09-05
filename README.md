
# 🔗 URL Shortener

A full-stack URL Shortener built using the MERN stack with CLI support. Users can create, manage, and access shortened URLs.


## Tech Stack
- Frontend: React.js  
- Backend: Node.js + Express.js  
- Database: MongoDB Atlas  
- Language: JavaScript  
- Architecture: Modular (routes, controllers, models, services)  
- CLI Tool: Node.js 



## Features
- Shorten long URLs  
- Redirect to original URLs  
- User authentication (JWT-based)  
- Dashboard to view/manage URLs  
- CLI tool to shorten URLs directly from terminal  
- Modular backend for clean code separation  



## Installation


###  1. Clone the repo
```bash
git clone https://github.com/sumitchandora/urlShortener.git
cd URLShortener
```
### 2. Setup Backend
```bash
cd Backend
npm install
```
#### Create .env file in backend/:
```bash
PORT=3000
MONGO_URI=mongodb+srv://your-mongo-uri
JWT_SECRET=your-secret-key
```
### 3. Run Backend
```bash
npm run dev
```
### 4. Run Frontend
```bash
cd Frontend
npm install
npm run dev
```
### 5. Setup CLI Tool
```bash
cd URLShortener/Backend
node shortener.js "Provide Long Url"
Output - Short URL: http://localhost:3000/.....
```



