const connection = require('../db');

exports.getAllestate = (req, res) => {
  const query = 'SELECT * FROM inversion';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener inversion:', err);
      res.status(500).json({ error: 'Error al obtener inversion' });
    } else {
      res.json(results);
    }
  });
};
