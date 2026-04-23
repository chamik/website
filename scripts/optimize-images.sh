#!/usr/bin/env bash
set -euo pipefail

find src/assets/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
    -exec mogrify -resize '2000x2000>' -strip -quality 82 {} +
