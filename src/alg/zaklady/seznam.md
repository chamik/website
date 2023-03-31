---
layout: page
title: Python - Seznamy
description: Shrnutí základů Pythonu
sitemap: false
---

## Seznam

Seznam je speciální datová struktura, která nám umožňuje ukládat několik hodnot v jedné proměnné. Vytvoříme si prázdný seznam `E` a seznam s několika čísly `U`.

```
E = []
U = [1, 4, 2, 100, 1]
```

Kolik je v seznamu věcí můžeme zjistit pomocí funkce `len()`.

```
print(len(E))
print(len(U))
```

Tento program by vypsal:

> 0\\
> 5

protože v seznamu `E` je nula hodnot a v seznamu `U` je jich 5. Díky **indexování** se mohu koukat na různé místa v seznamu. Protože jsme programátoři, počítáme věci od nuly, ne od jedničky. Stejně tak to platí i u seznamů; prvku na začátku seznamu říkáme *nultý*. Můžu zjistit jeho hodnotu pomocí následujícího zápisu:

```
print(U[0])
```

Tento program by vypsal číslo `1`, protože je na začátku seznamu. Pokud bych zkusil `U[3]`, vypíše program `100`. Pozor na to, že se nemohu dotazovat na prvky, které v seznamu nejsou.

```
print(U[5])
```

Tento program by skončil s chybou, protože na šestém místě (nezapomínejte, počítáme od nuly) nic není. Stejně tak by například skončil s `E[0]`.

Do seznamů můžu hodnoty přidávat pomocí příkazu `append()`.

```
E.append(10)
E.append(20)

print(E[1])
```
V tomto bodě už není seznam `E` prázdný a program by vypsal `20`. V pythonu není problém míchat v seznamu text i čísla. Například následující kus kódu je úplně v pořádku.

```
smichany_seznam = ["ahoj", 20, 555, ":)", "text text text"]
```

Pokud chci vytvořit jednoduchý seznam, který obsahuje posloupnost čísel, můžu použít funkci `range()`

```
posloupnost = list(range(20))
```

V seznamu `posloupnost` budou uložená čísla od 0 do 19 (tedy 20 čísel). Všimneme si funkce `list()`; funkce `range()` totiž nevrací přímo seznam (ale něco, čemu se říká generátor, to však není důležité), takže je potřeba ho na seznam převést. Funkce list je obdobná funkcím `str()` a `int()`.

Seznamy jdou skvěle využít se smyčkami.

```
cisla = [10, 20, 30, 40, 50, 0]

i = 0
while i < len(cisla):
    print(cisla[i])
    i = i + 1
```

Tento program vypíše za sebou všechny čísla v seznamu `cisla`. Jde to však ještě lépe; k tomu nám poslouží smyčka `for`.