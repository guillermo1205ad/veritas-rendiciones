#!/bin/bash
set -e

REPO="git@github.com:guillermo1205ad/veritas-rendiciones.git"

echo "Verificando repositorio en GitHub ($REPO)..."
if git ls-remote "$REPO" > /dev/null 2>&1; then
    echo "✓ Repositorio detectado en GitHub."
    git remote remove origin 2>/dev/null || true
    git remote add origin "$REPO"
    git branch -M main
    
    echo "Subiendo código a la rama main..."
    git push -u origin main
    
    echo "Publicando aplicación compilada en la rama gh-pages..."
    npm --prefix client run deploy
    
    echo "=========================================================="
    echo "✓ SITIO PUBLICADO EXITOSAMENTE EN GITHUB PAGES!"
    echo "URL: https://guillermo1205ad.github.io/veritas-rendiciones/"
    echo "=========================================================="
else
    echo "El repositorio aún no está creado en GitHub."
    exit 1
fi
