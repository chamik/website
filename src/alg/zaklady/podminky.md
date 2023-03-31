---
layout: page
title: Python - Podmínky
description: Shrnutí základů Pythonu
sitemap: false
---

## Podmínky

Pomocí podmínek se může program rozhodovat podle dat, které má k dispozici. K napsání podmínky používáme klíčkové slovo `if`. Za `if` napíšeme nějakou **podmínku**, kterou si program zkontroluje. Pokud je pravdivá, vykoná blok kódu uvnitř. Pokud ne, přeskočí jej.

```
cislo = 20

if cislo == 20:
    print("Číslo se rovná dvaceti!")
```

Podobně jako u funkce, vnitřek podmínkového bloku píšeme **odsazeně** a s **dvojtečkou** za podmínkou. U porovnávání čísel používáme dvojité rovná se (`==`), protože jednoduché rovná se používáme k přiřazování hodnot do proměnných.

Pokud máme blok `if`, můžeme ho doplnit blokem `else`.

```
cislo = 20

if cislo == 20:
    print("Číslo se rovná dvaceti!")
else:
    print("Číslo se nerovná dvaceti :(")
```

Blok `else` se spustí, pokud je podmínka v `if` nesplněná (jinými slovy v tomto případě, pokud `cislo` není dvacet).

Pro porovnávání **čísel** máme tyto operátory:

- `==` - rovná se
- `!=` - nerovná se
- `<` - menší než
- `>` - větší než
- `<=` - menší rovno
- `>=` - větší rovno

Můžeme porovnávat i text:

```
heslo = input("Zadej heslo")

if heslo == "Sezame otevři se":
    print("Heslo je správně!")
else:
    print("Heslo je špatně, padej!")
```

U textu však smíme používat pouze operátory `==` a `!=`. U ostatních by to nedávalo moc smysl. Pokud chceme porovnávat délku textu, můžeme použít funkci `len()`

```
vstup = input("Zadej tak akorát dlouhý text:")
delka = len(vstup)

if delka > 7 and delka < 10:
    print("Správná délka")
else:
    print("To není dobře :(")
```

Všimneme si nového slovíčka `and`. Můžeme pomocí něj **spojovat podmínky** tak, že se blok `if` spustí jen v tom případě, kdy jsou **obě podmínky pravdivé** (tudíž že je délka vstupu větší než 7 **a zároveň** menší než 10). 

Máme i logický operátor `or`. Pokud jím spojíme dvě podmínky, spustil by se blok `if` v tom případě, že je **alespoň jedna** z podmínek pravdivá (respektive by stačilo, že je vstup větší než 7, **nebo** menší než deset, což když se nad tím zamyslíme, jsou všechna čísla).

Bloky `if` a `else` můžeme skládat do sebe, musíme si však dávat pozor na správné odsazení.

```
cislo = 20
text = "ahoj"

if cislo == 20:
    if text == "čauky":
        print("Číslo je 20 a text je čauky")
    else:
        print("Číslo je 20, ale text není čauky")
else:
    print("Číslo není 20 a text může být cokoliv")

```

V tomto případě by program vypsal "`Číslo je 20, ale text není čauky`".