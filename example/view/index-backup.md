<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PixieCloud Keycloak Apps</title>
    <style>
        /* 🌟 Global Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
            text-align: center;
        }

        /* 🌟 Navbar */
        .navbar {
            background-color: #2c3e50;
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .navbar h1 {
            color: white;
            font-size: 22px;
            margin: 0;
        }

        .navbar ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
        }

        .navbar ul li {
            margin-left: 20px;
        }

        .navbar ul li a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            padding: 10px 15px;
            border-radius: 5px;
            transition: 0.3s;
        }

        .navbar ul li a:hover {
            background-color: #1abc9c;
            color: white;
        }

        /* 🌟 App Grid */
        .app-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 40px auto;
            max-width: 800px;
        }

        .app {
            width: 120px;
            height: 120px;
            margin: 15px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #2c3e50;
            font-size: 14px;
            transition: 0.3s;
        }

        .app:hover {
            transform: scale(1.1);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        }

        .app img {
            width: 50px;
            height: 50px;
            margin-bottom: 8px;
        }

        /* 🌟 Responsive Design */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                text-align: center;
            }
            .navbar ul {
                margin-top: 10px;
                flex-direction: column;
            }
            .navbar ul li {
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>

    <!-- 🌟 Navigation Bar -->
    <div class="navbar">
        <h1>PixieCloud NodeJS Keycloak</h1>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/logout">Logout</a></li>
        </ul>
    </div>

    <!-- 🌟 App Grid -->
    <div class="app-container">
        <a href="https://argocd.kapistiogroup.com" class="app">
            <img src="https://cdn-icons-png.flaticon.com/128/2972/2972535.png" alt="ArgoCD">
            <span>ArgoCD</span>
        </a>
        <a href="https://rabbitmqq.kapistiogroup.com" class="app">
            <img src="https://cdn-icons-png.flaticon.com/128/2942/2942914.png" alt="RabbitMQ">
            <span>RabbitMQ</span>
        </a>
        <a href="https://longhorn.kapistiogroup.com" class="app">
            <img src="https://cdn-icons-png.flaticon.com/128/4312/4312216.png" alt="Longhorn">
            <span>Longhorn</span>
        </a>
        <a href="https://keycloak.kapistiogroup.com" class="app">
            <img src="https://cdn-icons-png.flaticon.com/128/1698/1698535.png" alt="Jenkins">
            <span>Jenkins</span>
        </a>
    </div>

</body>
</html>
