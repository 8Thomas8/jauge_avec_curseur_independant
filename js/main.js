// Pourcentages
let jaugeVal = 42;
let cursorVal = 20;

// Calcul degré par rapport à une jauge de 180°
let jaugeValDeg = jaugeVal / 100 * 180;
let cursorValDeg = cursorVal / 100 * 180;

// Modification de la rotation des éléments
document.getElementById("gauge-c").style.transform = "rotate(" + jaugeValDeg + "deg)";
document.getElementById("cursor-container").style.transform = "rotate(" + cursorValDeg + "deg)";