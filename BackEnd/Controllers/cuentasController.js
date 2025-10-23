// cuentasController.js
const cuentas = require('../data/cuentas.json');

// GET /cuentas y /cuentas?queryParam=valor
const obtenerCuentas = (req, res) => {
  const query = req.query.queryParam;

  if (query) {
    const resultados = cuentas.filter(c =>
      c._id === query || c.client === query || c.gender === query
    );

    if (resultados.length === 1) {
      return res.json({ finded: true, account: resultados[0] });
    } else if (resultados.length > 1) {
      return res.json({ finded: true, data: resultados });
    } else {
      return res.json({ finded: false });
    }
  }

  res.json({ count: cuentas.length, data: cuentas });
};

// GET /cuenta/:id
const obtenerCuentaPorId = (req, res) => {
  const cuenta = cuentas.find(c => c._id === req.params.id);
  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false });
  }
};

// GET /cuentas/balance
const obtenerBalanceActivo = (req, res) => {
  const activas = cuentas.filter(c => c.isActive == true);
  const total = activas.reduce((sum, c) => {
    const monto = parseFloat(c.balance.replace('$', ''));
    return sum + monto;
  }, 0);

  res.json({
    status: activas.length > 0,
    accountBalance: total
  });
};


module.exports = {
  obtenerCuentas,
  obtenerCuentaPorId,
  obtenerBalanceActivo
};
