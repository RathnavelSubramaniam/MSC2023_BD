import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';





const app = express();


app.get('/', (req, res) => {
    res.send("Hello World")
})


const PORT = process.env.PORT || 2000
app.listen(2000, () => {
    console.log(`server is running in port ${PORT}`);
})
