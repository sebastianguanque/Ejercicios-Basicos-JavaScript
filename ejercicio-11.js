// En una empresa trabajan 5 empleados cuyos sueldos son entre 100 y 500 dólares. El programa debe informar cuantos empleados cobran entre 100 y 300 y cuales más de 300. Calcular cuánto gasta la empresa en sueldos. 

let a = 0;
let b = 0;
let sueldos = 0;
for (let i = 0; i < 5; i++) {
  let sueldo = Number(prompt("Ingrese el sueldo: "));

  if (sueldo > 99 && sueldo <= 300) {
    a++
  }

  else if (sueldo > 300 && sueldo <= 500) {
    b++
  }

  else {
    document.write("Hubo al menos un sueldo fuera de los parametros.");
  }

  sueldos = sueldos + sueldo;
}

document.write("La cantidad de empleados que cobran entre $100 y $300 son: " + a + "<br>");
document.write("La cantidad de empleados que cobran más de $300 son: " + b + "<br>");
document.write("La empresa gasta $" + sueldos + " en total en sueldos");