---
layout: page
title: Python - Proměnné
description: Shrnutí základů Pythonu
sitemap: false
---

## Proměnné

Proměnné jsou základním kamenem programování. Umožňují nám ukládat si informace.

Každá proměnná má své unikátní jméno a nějakou hodnotu, která je v ní uložená.

```
cena_produktu = 20
```

Zde si do proměnné `cena_produktu` ukládáme číselnou hodnotu `20`. Všimneme si, že v názvu nejsou žádné mezery (místo mezery používáme podtržítko) a taky žádné háčky a čárky.

Můžu si vytvořit další proměnnou, do které si uložím název produktu.

```
cena_produktu = 20
nazev_produktu = "Banán"
```

Hodnota `"Banán"` je v uvozovkách, protože se jedná o text, v angličtině nazýván `string`. Zkusíme si pomocí [funkce](/alg/zaklady/funkce) `print()` tyto hodnoty vypsat.

```
cena_produktu = 20
nazev_produktu = "Banán"

print(nazev_produktu + " stojí " + cena_produktu)
```

Tento kód mi však nebude fungovat. Když spojujeme kusy textu, používáme k tomu operátor `+`; `cena_produktu` je však číslo, takže ho nejdřív potřebujeme převést na text. To uděláme pomocí [funkce](/alg/zaklady/funkce) `str()`.

```
cena_produktu = 20
nazev_produktu = "Banán"

print(nazev_produktu + " stojí " + str(cena_produktu))
```

Tento program už správně vypíše "`Banán stojí 20`".

---

### Shrnutí

- každá proměnná má svůj unikátní název (nemůžu mít dvě proměnné pojmenované stejně)
- Každá proměnná má svůj typ (číslo, text, atd...)
- do proměnné ukládáme data zápisem `nazev_promenne = data`