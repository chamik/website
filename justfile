
build:
    npm run build

publish:
    rsync -r --progress ./build/* gaia:/www/chamik.eu/

optimize-images:
    ./scripts/optimize-images.sh
