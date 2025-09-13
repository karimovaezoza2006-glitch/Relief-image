// 1-masala
function teskariMatn(matn) {
  let result = "";
  for (let i = matn.length - 1; i >= 0; i--) {
    result += matn[i];
  }
  console.log(result);
}
teskariMatn("hello"); // olleh

//2-masala
function vergulBilanAjrat(matn) {
  let sozlar = matn.split(" ").join(",");
  let harflar = "";
  for (let i = 0; i < matn.length; i++) {
    harflar += matn[i];
    if (i !== matn.length - 1) harflar += ",";
  }
  console.log(sozlar);
  console.log(harflar);
}
vergulBilanAjrat("How are you doing today?");

//3-masala
function sozlarSoni(matn) {
  let sozlar = matn.trim().split(" ");
  let soni = 0;
  for (let i = 0; i < sozlar.length; i++) {
    if (sozlar[i] !== "") soni++;
  }
  console.log(soni);
}
sozlarSoni("How are you doing today?"); 

//4-masala
function boshHarfKatta(matn) {
  let sozlar = matn.split(" ");
  let yangiMatn = "";
  for (let i = 0; i < sozlar.length; i++) {
    let s = sozlar[i];
    if (s.length > 0) {
      yangiMatn += s[0].toUpperCase() + s.slice(1) + " ";
    }
  }
  console.log(yangiMatn.trim());
}
boshHarfKatta("salom dunyo"); // ➜ Salom Dunyo
//5-masala
function probel(matn) {
  let natija = "";
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] !== " ") {
      natija += matn[i];
    }
  }
  console.log(natija);
}
probel("e z o z a"); 


//6-masala
function str(matn) {
  let yangi = "";
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] === "a") {
      yangi += "o";
    } else {
      yangi += matn[i];
    }
  }
  console.log(yangi);
}

str("Khasan teacher came back");


//7-masala
function qirqish(matn, to) {
  let natija = "";
  for (let i = 2; i < to; i++) {
    natija += matn[i];
  }
  console.log(natija);
}
qirqish("Khasan teacher came back", 6); // ➜ "asan"


//8-masala
function faqatRaqam(matn) {
  let raqamlar = "";
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] >= "0" && matn[i] <= "9") {
      raqamlar += matn[i];
    }
  }
  console.log(raqamlar);
}
faqatRaqam("abc123d4");


//9-masala
function unliHarflarSoni(matn) {
  let unli = "aeiouAEIOU";
  let soni = 0;
  for (let i = 0; i < matn.length; i++) {
    if (unli.indexOf(matn[i]) !== -1) {
      soni++;
    }
  }
  console.log(soni);
}
unliHarflarSoni("Khasan teacher came back"); // ➜ 8

//10-masala
function sozlarniTeskariQil(matn) {
  var sozlar = matn.split(" ");     
  var teskari = "";              
  for (var i = sozlar.length - 1; i >= 0; i--) {
    teskari += sozlar[i] + " ";    
  }
  console.log(teskari.trim());       
}

sozlarniTeskariQil("Khasan teacher came back"); 

