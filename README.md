# next mart


## Installation & Setup

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/mdrakibmia99/blog-portfolio.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   DATABASE_URL=YOUR_MONGODB_CONNECTION_STRING
   NODE_ENV=development
   ```
5. Start the backend server:
   ```sh
   npm run start:dev
   ```

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:

   ```env
   GITHUB_ID=github_client_id
   GITHUB_SECRET=github_client_secret
   GOOGLE_ID=google_client_id
   GOOGLE_SECRET=google_client_id
   NEXTAUTH_SECRET=GOOGLE_SECRET
   NEXT_PUBLIC_BASE_URL=Base_url
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

