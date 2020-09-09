const express = require('express');
const app = express();
const port = process.env.PORT || 8877;
app.use(express.json());

app.get('/', (req, res)=> res.json({message: 'API FUNCIONANDO'}))

app.listen(port, () => console.log(`Server is running on port ${port}`));