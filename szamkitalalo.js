/* 
    A számítógép gondol egy egész számra 1 és 100 között
    A felhasználó egy input mezőbe írja a tippjeit
    A számítógép minden tippre a következő egyikét válasszolja

    - a keresett szám kisebb
    - a keresett szám nagyobb
    - gratulálok, eltaláltad

    Amint eltaáltad a keresett számot a játék éget ér. A játé végén kiírjuk a tippek számát
    Bármikor lehet új játékot indítani. Ilyenkor a korábbi értékek törlődnek és a számítógép új számot generál.

    A játék során a tippek listája időrendeni sorrendeben megjeleni. Felül található a legutolsó tipped, alul pedig az elsö tipped
 */

    /*

    let result = document.getElementById("eredmeny");
    let number = document.getElementById("tipp");
    let jatekFolyamatban = true;
    let tippekTomb = [];
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let tippekListaja = document.getElementById("lista");
    let tippekSzama = document.getElementById("talalatok");
    tippekSzama.textContent = "0";

    function init() {
         result.textContent = "";
         jatekFolyamatban = true;
         tippekTomb = [];
         randomNumber = Math.floor(Math.random() * 5) + 1;
         number.value = "";
         tippekListaja.textContent = "";
         tippekSzama.textContent = "0";
    }



    function inspectNumber(number, randomNumber) {
        if( number < 1 || number > 100 ) {
            alert("A megadott szám helytelen!");
            return;
        }
        if(jatekFolyamatban) {
                tippekTomb.unshift(number);
            if(number === randomNumber) {
                    result.innerHTML = "Gratulálok, eltaláltad!";
                    jatekFolyamatban = false;
                }
                else if(number > randomNumber) {
                    result.innerHTML = `A keresett szám kisebb min ${number}`;
                } 
                else if (number < randomNumber) {
                    result.innerHTML = `A keresett szám nagyobb mint ${number}`;
                }
        }
    }

    function renderList() {
        let listHTML = "";
        for(let item of tippekTomb) {
            listHTML += `
                <li class="list-item">${item}</li>
            `;
        }
        tippekListaja.innerHTML = listHTML;
        tippekSzama.textContent = `${tippekTomb.length}`
    }


document.querySelector(".btn-kuld").addEventListener("click", function(event) {
    event.preventDefault();
    inspectNumber(parseInt(number.value), randomNumber);
    renderList();
})

document.querySelector(".btn-uj").addEventListener("click", function(event) {
    event.preventDefault();
    init();
})

*/