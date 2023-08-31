const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const estateRouter = require('./routes/estate');
const investmentRouter = require('./routes/investments');

//Usuario
app.use('/users', usersRouter);
app.use('/usuario', usersRouter);
//Inversion
app.use('/estate', estateRouter)
//Inversiones
app.use('/investments', usersRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
