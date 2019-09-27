<?php include_once 'header.php'; 
$menu_links = array('about', 'assignments');
$arr_length = count($menu_links);
?>
<body>
  <header>
    <nav id="navbar">
      <img src="./images/close-512.png" alt="Close" id="close-menu">
      <?php 

      for($i = 0; $i < $arr_length; $i++) {
        echo '<ul>
                  <li><a id="'; 
        echo $menu_links[$i]; 
        echo '">';
        echo $menu_links[$i]; 
        echo '</a></li>
              </ul> ';
      }

      ?>
    </nav>
  </header>
  <div class="container">
    <span class="hamburger-icon" id="hamburger"><img src="./images/hamburger_menu_9163.png" alt="Menu"></span>
    <main id="app">
    </main>
  </div>
  <?php include_once 'footer.php'; ?>
