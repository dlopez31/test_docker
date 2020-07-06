exports.query = (req, res, next) => {
  const param = req.params.valor;

  if (palindromo(param)) {
    req.palindromo = true;
  } else {
    req.palindromo = false;
  }
  if (!isNaN(param)) {
    req.busqueda = { id: Number(param) };
  } else {
    req.busqueda = {
      $or: [{ brand: { $regex: param } }, { description: { $regex: param } }],
    };
  }
  next();
};

const palindromo = (valor) => {
  valor = valor.toLowerCase().replace(/\s/g, '');
  reverseValor = valor.split('').reverse().toString();
  for (let i = 0; i < reverseValor.length - 1; i++) {
    reverseValor = reverseValor.replace(',', '');
  }
  return valor === reverseValor ? true : false;
};
