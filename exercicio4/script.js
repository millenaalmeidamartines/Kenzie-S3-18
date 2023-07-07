let valor1 = 4;
let valor2 = 5;
let valor3 = 6;

// valor1 valor2 valor3
// valor2 valor1 valor3
// valor3 valor1 valor2
// valor1 valor3 valor2
// valor2 valor3 valor1
// valor3 valor2 valor1

if (valor1 > valor2 && valor2 > valor3) {
    console.log(valor3 + ` < ` + valor2 + ` < ` + valor1);
} else if (valor2 > valor1 && valor1 > valor3) {
    console.log(valor3 + ` < ` + valora + ` < ` + valor2);
} else if (valor3 > valor1 && valor1 > valor2) {
    console.log(valor2 + ` < ` + valor1 + ` < ` + valor3);
} else if (valor1 > valor3 && valor3 > valor2) {
    console.log(valor2 + ` < ` + valor3 + ` < ` + valor1);
} else if (valor2 > valor3 && valor3 > valor1) {
    console.log(valor1 + ` < ` + valor3 + ` < ` + valor2);
} else if (valor3 > valor2 && valor2 > valor1) {
    console.log(valor1 + ` < ` + valor2 + ` < ` + valor3)
}