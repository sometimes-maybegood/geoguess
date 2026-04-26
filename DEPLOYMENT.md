# Deployment Instructions for ispmanager

## Steps to deploy the WorldGuessr application to ispmanager:

1. Upload this entire folder to your ispmanager hosting account
2. Make sure Node.js is selected as the runtime environment
3. Set the startup file to `server.cjs` or use the `start` script from package.json
4. The application will run on the port assigned by ispmanager (using the PORT environment variable)
5. The default port fallback is 3000 if no PORT environment variable is set

## Important Notes:
- The application uses the `start` script which runs `node server.cjs`
- Both server.js and server.cjs are configured to use the PORT environment variable with fallback to port 3000
- The application is built with Next.js and requires Node.js to run
- Dependencies will be installed automatically via package.json

## Required Environment Variables:
- PORT: Port number assigned by ispmanager (recommended to leave empty to use ispmanager's default)
- MONGODB: MongoDB connection string for your database
- NEXT_PUBLIC_GOOGLE_CLIENT_ID: Google OAuth client ID (for login functionality)
- GOOGLE_CLIENT_SECRET: Google OAuth client secret
- NEXT_PUBLIC_API_URL: Public URL of your API (optional, defaults to current host)
- NEXT_PUBLIC_WS_HOST: Host for WebSocket connections (optional, defaults to current host)

## Additional Setup:
1. Configure your domain (geo-guess.ru) to point to the application
2. Make sure SSL certificate is properly configured if using HTTPS
3. Set up MongoDB database and configure connection string
4. Configure Google OAuth credentials for login functionality