function calcularAreaCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    return area;
  }
  
  const raio = 5;
  const area = calcularAreaCirculo(raio);
  console.log("A área do círculo é:", area);
  