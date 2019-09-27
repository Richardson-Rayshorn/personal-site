<?php include_once 'header.php'; ?>
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
    <main id="app">
      <?php include "about.php"; ?>
    </main>
  </div>
  <?php include_once 'footer.php'; ?>
