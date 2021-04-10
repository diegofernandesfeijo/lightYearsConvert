var lightYearsText = prompt ("Quantos anos luz você deseja converter em quilometros para sua viagem ao espaço?")

var lightYearsFloat = parseFloat (lightYearsText) * 9460536068.016

var lightYearsFloatFixed = lightYearsFloat.toFixed(2)

alert ("Você terá que viajar: " + lightYearsFloatFixed + " KM ao espaço")
