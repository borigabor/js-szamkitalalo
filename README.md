# Számkitaláló játék

## Link

TODO

## Leírás

    A számítógép gondol egy egész számra 1 és 100 között
    A felhasználó egy input mezőbe írja a tippjeit
    A számítógép minden tippre a következő egyikét válasszolja

    - a keresett szám kisebb
    - a keresett szám nagyobb
    - gratulálok, eltaláltad

    Amint eltaáltad a keresett számot a játék éget ér. A játék végén kiírjuk a tippek számát
    Bármikor lehet új játékot indítani. Ilyenkor a korábbi értékek törlődnek és a számítógép új számot generál.

    A játék során a tippek listája időrendeni sorrendeben megjeleni. Felül található a legutolsó tipped, alul pedig az elsö tipped

    ## Lépések

    1. lépés: Felhasználói felület kialalkítása (HTML, Bootstrap)
    2: lépés: Új játék inditása véletlen szám legenerálása
    3: lépés: Új játék inditása, felhasználói interfész alapálabotabhozása, korábbi tippek törlése, input mező törlése
    4. lépés: Tipp beküldésének eseménykezelése (kattintás utána alertel írd ki hogy click)
    5. lépés: Beküldött tipp kinyeresée az eseménykezleőben az input mezőböl
    6: lépés: hibás tipp formátum esetén hibaüzenet. 
    7: lépés: helyes tipp összehasonlítás a genrált számmal
    8: lépés: A tipp eredményének tiplistába tárolása és kiíírása a képernyőre
    9: lépés A játék befelyezése amenyibben a tipp helyes