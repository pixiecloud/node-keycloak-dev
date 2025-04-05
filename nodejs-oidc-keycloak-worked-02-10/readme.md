## create a docker network
```sh
docker network create keycloak-network
```

## start the postgres container
```sh
docker run -d \
  --name keycloak-db \
  -e POSTGRES_DB=keycloak \
  -e POSTGRES_USER=keycloak \
  -e POSTGRES_PASSWORD=keycloak \
  -v keycloak-db-data:/var/lib/postgresql/data \
  --network keycloak-network \
  postgres:15
```

## start the keycloak container now
```sh
docker run -d \
  --name keycloak \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  -e KC_DB=postgres \
  -e KC_DB_URL=jdbc:postgresql://keycloak-db/keycloak \
  -e KC_DB_USERNAME=keycloak \
  -e KC_DB_PASSWORD=keycloak \
  --network keycloak-network \
  quay.io/keycloak/keycloak:latest \
  start-dev
```

## Next:

1. Upload the nodejs-example-realm.json into your realm

2. ## Rename the .env.sample file in the root directory to .env. 

```sh
mv .env.sample .env
```

3. ## Run the following command to install the necessary dependencies:

```sh
npm install
```

   This will install the dependencies specified in `package.json` file.

4. ## Run the following command to start the Node.js server:

```sh
npm start
```

