---
layout: page
title: Python - Funkce
description: Shrnutí základů Pythonu
sitemap: false
---

## Funkce

Podobně jako jsou proměnné pojmenované kusy dat, **funkce** jsou pojmenované kusy kódu. Programovací jazyk nám nabízí několik už připravených funkcí, jako například `print()`, `int()`, `str()` a tak dále. Máme však možnost vytvořit si vlastní.

Použijeme klíčové slovo `def`, následované názvem funkce, uzavřenými závorkami a dvojtečkou. Odsazeně "dovnitř" poté napíšeme kód, který chceme, aby byl součástí funkce.

```
def pozdrav():
    print("Ahoj!")
```

Samo o sobě se nic nestane. Aby se kód spustil, musíme funkci **zavolat**. Mimo funkci samotnou napíšeme její název a uzavřené závorky.

```
def pozdrav():
    print("Ahoj!")

pozdrav()
```

Vidíme podobu k proměnným. Každá funkce má taky svůj unikátní název, akorát s tím rozdílem, že do proměnné pouze ukládáme data, zatím co funkce **něco dělá**.

Funkci můžeme vylepšit tím, že jí přidáme **argumenty**. Argument je dodatečná informace, kterou funkci dáme, když ji voláme.

```
def pozdrav(jmeno):
    print("Ahoj " + jmeno + "!")

pozdrav("Kubo")
```

Zde jsme přidali u definice funkce argument `jmeno`. Když funkci voláme, dáme do závorek nějakou hodnotu, se kterou potom bude funkce pracovat. Tento program by vypsal "`Ahoj Kubo!`"

Funkce může v sobě volat jiné námi definované funkce.

```
def pozdrav(jmeno):
    print("Ahoj " + jmeno + "!")

def pozdrav_dva(jmeno_prvniho, jmeno_druheho):
    pozdrav(jmeno_prvniho)
    pozdrav(jmeno_druheho)

pozdrav_dva("Kubo", "Aničko")
```

Tento program vypíše:

> `Ahoj Kubo!`
> 
> `Ahoj Aničko!`

### Return

Další důležitá vlastnost funkcí je takzvaná návratná hodnota. Zamysleme se nad následujícím programem, který vynásobí dvěma číslo, které nám dá uživatel.

```
vstup = input("Jaké číslo chceš vynásobit pěti?")
cislo = int(vstup)
vysledek = cislo * 2

print("Výsledek je: " + str(vysledek))
```

Jaký je rozdíl mezi funkcemi `print()` a `input()`?

Funkce `print()` jednoduše vypíše to, co chceme, aby vypsala. Jinými slovy nevytváří žádnou novou hodnotu.
Kdežto funkce `input()` se zeptá uživatele na vstup a **vrátí** nám nějakou hodnotu. Funkce `print()` nic nevrací.

Proto nedává moc smysl napsat následující.

```
neco = print("Ahoj")
```

V proměnné `neco` nebude žádná smysluplná hodnota, protože funkce `print()` nic nevrací. Kdežto v následujícím případě --

```
vstup = input("Zadej něco: ")
```

už to smysl dává, protože funkce `input()` nám **vrací** nějakou hodnotu. Zkusíme si také napsat funkci, která něco vrací.

```
def obsah_obdelniku(a, b):
    obsah = a * b
    return obsah
```

Všimneme si nového slovíčka `return`, které **vrací** hodnotu `obsah`. Tuto funkci bychom mohli použít třeba takto:

```
def obsah_obdelniku(a, b):
    obsah = a * b
    return obsah

strana_a = 20
strana_b = 5

S = obsah_obdelniku(strana_a, strana_b)

print("Obsah obdélníku je " + str(S))
```

Tento program vypíše "`Obsah obdélníku je 100`". Kdybychom použili funkci z předchozí sekce --

```
def pozdrav(jmeno):
    print("Ahoj " + jmeno + "!")

neco = pozdrav("Kubo")
```

program sice vypíše "`Ahoj Kubo!`", ale v proměnné `neco` není uloženého nic, protože funkce `pozdrav()` nic nevrací.

--- 

## Shrnutí

- každá funkce má svůj unikátní název
- vnitřek funkce píšeme odsazeně
- funkce může, ale nemusí, mít argumenty
- funkce sama o sobě nic neprovede, dokud ji nezavoláme
- funkce nám může, ale nemusí, vracet nějakou hodnotu