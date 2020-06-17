Simple React App with Auth0 authentication.

HOW TO USE:
  1- Login to Auth0, create a new React SPA, write down your domain and clientID (find them in Settings)
  
  2- Make sure these are your settings for your SPA:
       Application Login URI:  https://127.0.0.1:3000
       Allowed Callback URLs:  http://localhost:3000
       Allowed Logout URLs:  http://localhost:3000
       Allowed Web Origins:  http://localhost:3000
     
  3- Inside 'src' folder create a new file called 'auth_config.json'
  
  4- Copy the contents of auth_config.json.example into auth_config.json
  
  5- Put your Auth0 'domain' and 'clientID' in auth_config.json. 
     That file should look like this but with your own credentials:
     
       {
        "domain": "dev-ypdu7csx.auth0.com",
        "clientId": "6hyV6qdGSk1uUiSo9TXqe2Lg6g8UmncI"
       }
  
  6- $ npm install
  
  7- $ npm run start
  
  8- Open your browser to localhost:3000 (You will get a blank page)
  
  9- Go to localhost:3000/dashboard (The Auth0 screen appears to Login and Register)
  
  This app is based on YouTube tutorial by Arslan: https://www.youtube.com/watch?v=vKNuL4Uz8O4&list=PLxt4i7QVE68_HNVH7LBa8Hl5Eu6BGnMoi&index=1
  
