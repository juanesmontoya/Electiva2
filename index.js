//Se importa la libreria express de NODEJS
const express = require('express')
//Se utilizauna constante para su manejo
const app = express()
//Uso de middleware json
app.use(express.json())
//Uso de middleware Router para enrutamientos HTTP
app.use('/api/v1', require('./routes/postsRouter'))
//Se establece un puerto de escucha para la API cuando este corriendo y un mensaje de confirmacion
app.listen(3000, () => {
    console.log('Server Running')
})