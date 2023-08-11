---
layout: page
title: PGP
permalink: /contact/pgp/
description: GPG is magic
---

## PGP

If you want to share something secret, you can encrypt it using my PGP key. It's ID is <span style="display: inline-block;">**`D4ED56EA AB50ED5D`**</span>.

You can download it from most major PGP servers (eg. [keyserver.ubuntu.com](https://keyserver.ubuntu.com/pks/lookup?search=kubik%40chamik.eu&fingerprint=on&op=index) or [pgp.mit.edu](https://pgp.mit.edu/pks/lookup?search=kubik%40chamik.eu&op=vindex&fingerprint=on))

The fingerprint is: <span style="display: inline-block;">**`2694 FE30 8179 CBEA 69C2  BA79 D4ED 56EA AB50 ED5D`**</span>

I'll be happy to sign your key(s) if I know you.

## I don't know what you're talking about

Just use this *Magic box™* and send me the block of weird symbols it generates.

<!-- I have *borrowed* this from https://vsq.cz/encrypt/ <3 -->
<textarea id="message" class="w-full p-2 text-black" placeholder="my dearest jacob, i am reaching out to you regarding the bees in a box you gave me..."></textarea>
<div class="flex flex-col">
    <button id="encrypt" class="border-2 mx-auto border-slate-200 h-11 mt-2"><span class="my-auto p-3">~ Encrypt ~</span></button>
    <pre id="result" class="font-mono text-sm !mt-4">Encrypted message will appear here</pre>
</div>
<script src="/assets/js/openpgp.min.js"></script>
<script src="/assets/js/encrypt.js"></script>

### Fun fact

As per the [official documentation](https://www.gnupg.org/gph/en/manual.html#AEN84){:target="_blank"} the fingerprint should be verified in person or over the **phone**, so feel free to call me on matrix :D