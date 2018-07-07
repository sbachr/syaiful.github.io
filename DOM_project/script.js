function getRandomInt(max) {
  result = Math.floor(Math.random() * Math.floor(max));
  return result == 0 ? 8 : result;
}
function getPilihanComputer() {
  const comp = getRandomInt(8);
  if (comp == 1) return "satu";
  if (comp == 2) return "dua";
  if (comp == 3) return "tiga";
  if (comp == 4) return "empat";
  if (comp == 5) return "lima";
  if (comp == 6) return "enam";
  if (comp == 7) return "tujuh";
  if (comp == 8) return "delapan";
}

function getHasil(comp, player) {
  console.log(player);
  if (player == "satu") player = 1;
  if (player == "dua") player = 2;
  if (player == "tiga") player = 3;
  if (player == "empat") player = 4;
  if (player == "lima") player = 5;
  if (player == "enam") player = 6;
  if (player == "tujuh") player = 7;
  if (player == "delapan") player = 8;

  if (comp == "satu") comp = 1;
  if (comp == "dua") comp = 2;
  if (comp == "tiga") comp = 3;
  if (comp == "tiga") comp = 3;
  if (comp == "empat") comp = 4;
  if (comp == "lima") comp = 5;
  if (comp == "enam") comp = 6;
  if (comp == "tujuh") comp = 7;
  if (comp == "delapan") comp = 8;
  if (player == comp) return "SERI !!!";
  else return player > comp ? `MENANG !!` : "KALAH !!";
}
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gamb = [
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan"
  ];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gamb[i++] + ".png");
    if (i == gamb.length) i = 0;
  }, 100);
}
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(gambar) {
  gambar.addEventListener("click", function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = gambar.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(function() {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pSatu = document.querySelector('.satu')
// pSatu.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     console.log('comp : ' + pilihanComputer);
//     console.log('player : ' + pilihanPlayer);
//     console.log('hasil : ' + hasil);
// })

// const pEmpat = document.querySelector('.empat')
// pEmpat.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pEmpat.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     console.log('comp : ' + pilihanComputer);
//     console.log('player : ' + pilihanPlayer);
//     console.log('hasil : ' + hasil);
// })
