# How to secure a nodeJS application with Keycloak (OpenID Connect protocol)

I'll walk you through the steps of integrating the Keycloak IDP into a Node.js application. 
We'll start with setting up Keycloak by importing a pre-existing realm, and then we'll start the Node.js server.

The sample is an [Express.js](https://expressjs.com/) app that uses
[Passport.js](http://www.passportjs.org/) and the [Passport-OpenIdConnect](https://github.com/jaredhanson/passport-openidconnect) module for managing user authentication.

NodeJS version : v19.9.0

Keycloak version : 21.0.2

**Step 1: Keycloak Configuration**

1. Make sure you have Keycloak installed and running on your machine. You can download it from the official Keycloak website [here](https://www.keycloak.org/downloads.html) and follow the appropriate installation instructions.

Deploy Keycloak as a container using podman :

```
podman run --name keyclock -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -d -p 8080:8080 quay.io/keycloak/keycloak:21.0.2 start-dev
``` 
> **Warning**
> Leaving the podman VM running will cause a time drift pretty quickly, so be carefull. Restarting podman machine resolve the issue.

2. Access the Keycloak administration interface by opening your browser and navigating to the following URL: `http://localhost:8080/admin/master/console/`. You may need to adjust the url based on your configuration.

3. Log in to the administration interface using your administrator credentials.

4. Create a realm by clicking on "Add Realm".

5. Import a pre-existing realm by clicking on "Browse" and select the JSON file nodejs-keycloak-realm.json.

**Step 2: Starting Node.js with Keycloak**

1. Make sure you have Node.js installed on your machine. You can download it from the official Node.js website [here](https://nodejs.org) and follow the appropriate installation instructions.

2. Open a command line or terminal and navigate to the directory of your Node.js application.

3. Rename the .env.sample file in the root directory to .env. This file will store your environment variables. You may need to adjust those environments based on your configuration.

    ```
    mv .env.sample .env
    ```

4. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

   This will install the dependencies specified in `package.json` file.

5. Run the following command to start the Node.js server:

   ```
   npm start
   ```

   This will launch your Node.js application and make it accessible via a web browser.

6. Open a web browser and navigate to the Node.js application's URL. (localhost:3000)

7. Click on the "Login" button or link to access the login page.

8. Use the pre-configured user credentials to log in. For example:

    Username: user

    Password: password

Congratulations! You have now started your Node.js application with Keycloak. Make sure Keycloak is up and running and properly configured for authentication to work as intended. You can further customize your Node.js application based on the specific needs of your project.


**NB :** This repository is a customization of [OneLogin repository](https://github.com/onelogin/onelogin-oidc-node).