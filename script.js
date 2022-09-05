function menuToggle1(){///5.3 menu área//
    let menuarea1 = document.getElementById("menuarea1");
    if (menuarea1.classList.contains('menu-opened') == true) {
       menuarea1.classList.remove('menu-opened');
    }  else {
       menuarea1.classList.add('menu-opened');
    }
  }

  function menuToggle2(){///5.3 menu área///
    let menuarea2 = document.getElementById("menuarea2");
    if (menuarea2.classList.contains('menu-opened') == true) {
       menuarea2.classList.remove('menu-opened');
    }  else {
       menuarea2.classList.add('menu-opened');
    }
  } 