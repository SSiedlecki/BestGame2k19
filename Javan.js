window.onload = function() {
  var player = document.getElementById("player");
  var cookie = document.getElementById("cookie");
  var przesuniecie = 10;
  var wielkosc = 65;
  player.style.top = 63;
  player.style.left = 14;
  var arena = document.getElementById("arena");
  var liczbaPunktow = 0;
  generujNoweKoordynaty(cookie, arena);

  document.onkeydown = document.onkeydown = function (e) {
    if(e.key === 'ArrowUp') {
      przesunDoGory(player, przesuniecie);
    }
    if(e.key === 'ArrowDown'){
      przesunNaDol(player, przesuniecie);
    }
    if(e.key === 'ArrowLeft' && !czyDotykaLewejSciany (arena, player)){
      przesunNaLewo (player, przesuniecie);
    }
    if(e.key === 'ArrowRight'){
      przesunNaPrawo (player, przesuniecie);
    }

    if (czyPlayerDotykaCiastka(player, cookie)) {
      generujNoweKoordynaty(cookie, arena);
      zwiekszLiczbePunktow();
    }

  }

    document.onwheel = function (e) {
      if (e.deltaY < 0) {
        player.style.height = player.getBoundingClientRect().height + wielkosc;
        player.style.width = player.getBoundingClientRect().width + wielkosc;
      }

      else {
        player.style.height = player.getBoundingClientRect().height - wielkosc;
        player.style.width = player.getBoundingClientRect().width - wielkosc;
      }
    }

    function przesunDoGory(spoconakielba, przesuniecie) {
      spoconakielba.style.top = spoconakielba.getBoundingClientRect().top - przesuniecie;
    }

    function przesunNaDol(player, przesuniecie) {
      player.style.top = player.getBoundingClientRect().top + przesuniecie;
    }

    function przesunNaLewo (player, przesuniecie) {
      player.style.left = player.getBoundingClientRect().left - przesuniecie;
    }

    function przesunNaPrawo (player, przesuniecie) {
      player.style.left = player.getBoundingClientRect().left + przesuniecie;
    }

    function czyPlayerDotykaCiastka (player, cookie) {
      var rect1 = player.getBoundingClientRect();
      var rect2 = cookie.getBoundingClientRect();

      return rect1.x < rect2.x + rect2.width &&
       rect1.x + rect1.width > rect2.x &&
       rect1.y < rect2.y + rect2.height &&
       rect1.y + rect1.height > rect2.y;
    }

    function generujNoweKoordynaty(cookie, arena) {
        cookie.style.top = Math.floor(Math.random() * (arena.getBoundingClientRect().top + arena.getBoundingClientRect().height-63 - 35) + 63);
        cookie.style.left = Math.floor(Math.random() * (arena.getBoundingClientRect().left + arena.getBoundingClientRect().width-14 - 35) + 14);
    }

    function zwiekszLiczbePunktow(){
      liczbaPunktow = liczbaPunktow + 1;
      document.getElementById("liczbaPunktow").innerText = liczbaPunktow;
    }

    function czyDotykaLewejSciany (arena, player) {
      var arenaRect = arena.getBoundingClientRect();
      var playerRect = player.getBoundingClientRect();
      return playerRect.x < arenaRect.x + 8;
    }
    function czyDotykaPrawejSciany (arena, player) {
      var arenaRect = arena.getBoundingClientRect();
      var playerRect = player.getBoundingClientRect();
      return playerRect.x < arenaRect.x + 8;


};
