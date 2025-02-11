const Keycloak = require('keycloak-connect');
const hogan = require('hogan-express');
const express = require('express');
const session = require('express-session');

const app = express();

// ✅ Start the Express server
const server = app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});

// ✅ Configure Express Views
app.set('view engine', 'html');
app.set('views', require('path').join(__dirname, '/view'));
app.engine('html', hogan);

// ✅ Create a session store for Keycloak
const memoryStore = new session.MemoryStore();

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

// ✅ Initialize Keycloak
const keycloak = new Keycloak({ store: memoryStore });

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/',
  protected: '/protected/resource'
}));

// ✅ Require login before accessing the main page
app.get('/', keycloak.protect(), function (req, res) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4),
    event: '1. Authentication Successful\n2. Redirecting to Apps...'
  });
});

// ✅ Login route - Redirects to Keycloak login
app.get('/login', function (req, res) {
  res.redirect(keycloak.loginUrl());
});

// ✅ Protected route (Example)
app.get('/protected/resource', keycloak.protect(), function (req, res) {
  res.render('index', {
    result: JSON.stringify(JSON.parse(req.session['keycloak-token']), null, 4),
    event: '1. Access Granted to Secure Resource'
  });
});

