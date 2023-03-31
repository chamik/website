---
layout: page
title: Python - While
description: Shrnutí základů Pythonu
sitemap: false
---

## Smyčka while

Smyčky nám umožňují *opakování*. V Pythonu jsou dva druhy. Nyní se podíváme na while.

Smyčka while se opakuje do té doby, dokud je podmínka, kterou ji dáme, pravdivá. Chová se vlastně stejně jako [operátor `if`](../podminky), akorát s tím rozdílem, že svůj vnitřní blok několikrát opakuje (`if` jej provede vždy jen jednou).

```
while 3 > 2:
    print("Vskutku, 3 je větší než 2")
```

Tento program by běžel nekonečně dlouho, protože naše podmínka, `3 > 2`, bude vždy pravdivá. To typicky není něco, co chceme, proto se můžeme často setkat s následujícím příkladem:

```
n = 8
while n > 0:
    print(n)
    n = n - 1
```

Tento program vypíše čísla od 8 do 1. `n` je inicializováno na hodnotu 8. Smyčka se opakuje, dokud je `n > 0` a protože v každé *iteraci* (opakování) smyčky `n` o jedna zmenšujeme, musí někdy doběhnout. A ejhle: jakmile `n` dosáhne hodnoty `0`, nerovnost `0 > 0` neplatí, tudíž se smyčka znovu nespustí a program skončí. Podíváme se ještě na jeden příklad.

```
text = ""
while text != "exit":
    print(text)
    text = input("Jsem papoušek. Pokud chceš ukončit program, napiš 'exit'")
```

Všimneme si, že v obou předchozích příkladech  inicializujeme hodnotu v podmínce ještě před samotnou smyčkou; jinak by program nemohl fungovat. Může se také stát, že se smyčka while nespustí vůbec:

```
a = 0
while a > 0:
    print(a)
    a = a - 1
print("Konec!")
```

Tento program vypíše pouze "`Konec!`"