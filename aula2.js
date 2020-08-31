function resolvePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Resolvida após 3 segundos"));
    }, 3000);
  });
}

function promessaImpar(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero % 2) {
        resolve(console.log("É impar"));
      } else {
        reject(console.log("É par"));
      }
    }, 1000);
  });
}

promessaImpar(2);
