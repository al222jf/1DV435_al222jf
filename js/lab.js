// JavaScript Document
  function hide_tabell(tabell) {
    var item = document.getElementById(tabell);
    if (item) {
      item.className=(item.className=='hide')?'show':'hide';
    }
  }
