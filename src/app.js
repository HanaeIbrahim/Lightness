"use strict";
//importer le module color-convert
const convert = require('color-convert');



/*
//mettre la couleur dans l'input
const colorInput = document.querySelector("input[type='text']");


// récupérer la couleur de l'input a chque fois je tape la touche Enter
colorInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        // pour pas que la page elle se recharge
        event.preventDefault();
        console.log(colorInput.value);
    }
}

);

// Fonction de génération de palette PRENDRE UN HEXADéCIMAL ET LE CONVERTIR EN RGB
const generatePalette = (hex) => {
    // on récupère le code hexadécimal
    const hexValue = hex.replace("#", "");
    // on récupère les deux premiers caractères
    const red = parseInt(hexValue.substring(0, 2), 16);
    // on récupère les deux caractères suivants
    const green = parseInt(hexValue.substring(2, 4), 16);
    // on récupère les deux derniers caractères
    const blue = parseInt(hexValue.substring(4, 6), 16);
    // on retourne le résultat sous forme d'objet
    return {
        red: red,
        green: green,
        blue: blue,
    };
};

const hexColor = "#ffffff"; // Remplacez cette valeur par la couleur hexadécimale que vous avez
const hslColor = convert.hex.hsl(hexColor);

console.log(hslColor); // Cela affichera le tableau HSL correspondant à la couleur hexadécimale

*/

// Fonction de génération de palette
function generatePalette(hexColor, interval = 10) {
    const hslColor = convert.hex.hsl(hexColor);
    const [hue, saturation, originalLightness] = hslColor;
    const palette = [];

    for (let lightness = 0; lightness <= 100; lightness += interval) {
        palette.push([hue, saturation, lightness]);
    }

    return palette;
}

// Exemple d'utilisation avec la couleur hex "#99aa23"
const palette = generatePalette("#99aa23");

console.log(palette);
