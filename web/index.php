<?php include_once 'header.php'; ?>
<!-- <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles/index.css">
    <title>Personal Homepage</title>
  </head> -->
  <body>
    <header>
      <nav id="navbar">
        <img src="./images/close-512.png" alt="Close" id="close-menu">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="">Assignments</a></li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <span class="hamburger-icon" id="hamburger"><img src="./images/hamburger_menu_9163.png" alt="Menu"></span>
      <main>
        <?php include "about.php"; ?>
      </main>
    </div>
    <footer>
      <div class="container">
        <nav>
          <ul>
            <li>About</li>
            <li>Assignments</li>
          </ul>
        </nav>
      </div>
    </footer>
    <script src="./scripts/index.js"></script>
  </body>
  </html>
