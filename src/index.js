import express from "express";
import bodyParser from "body-parser";
import route from './routes/index';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api', route);
app.get('/', (req, res) => res.status(200).send({
    message: 'welcome to LOGIN API'
 }));
 
 app.listen(port, () => console.log(`Server is running on PORT ${port}`));