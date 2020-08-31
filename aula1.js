gfunction lanceiABraba(stringInicial, callback) {
  setTimeout(() => {
    callback(stringInicial);
  }, 5000);
}

lanceiABraba("Coé rapaziada", console.log);
