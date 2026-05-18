# social-media-api
 
A Node.js/Express server connected to MongoDB Atlas.
 
## Setup
 
1. Clone the repo and run `npm install`
2. Create a `.env` file and add your Atlas connection string
3. Run `node server.js`

## Test
 
Visit `http://localhost:3001/` — you should see:
 
```json
{ "message": "Successfully connected to the database!" }
```
 
## Stack
 
- Node.js + Express
- MongoDB Atlas
- dotenv