const connection = require('../db');

exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM usuarios';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(results);
    }
  });
};

exports.getUserByCode = (req, res) => {
  const codigoUsuario = req.params.codigo_usuario;
  const query = 'SELECT * FROM usuarios WHERE codigo_usuario = ?';

  connection.query(query, [codigoUsuario], (err, results) => {
    if (err) {
      console.error('Error al obtener usuario:', err);
      res.status(500).json({ error: 'Error al obtener usuario' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }
  });
};


exports.getUserInvestmentAndProperties = (req, res) => {
  const codigoUsuario = req.params.codigo_usuario;

  const query = 'SELECT u.*, i.*, iv.* FROM usuarios u LEFT JOIN inmuebles i ON u.codigo_usuario = i.codigo_usuario LEFT JOIN inversion iv ON i.id = iv.inmuebles_id WHERE u.codigo_usuario = ? ';

  connection.query(query, [codigoUsuario], (err, results) => {
    if (err) {
      console.error('Error al obtener usuario:', err);
      res.status(500).json({ error: 'Error al obtener usuario' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }
  });
};

