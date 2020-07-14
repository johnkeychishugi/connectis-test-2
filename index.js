import express from "express";
import bodyParser from "body-parser";
import db from './config/database';
import routers from './routers/';

const app = express();


//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));


//initialize Routers
app.use('/api/v1/',routers);

app.get('/',(req, res, next) => res.status(200).send({
  status : 200,
  message : 'welcome to the my Api, below link is how to use it',
}));

app.use('**', (req, res) => res.status(405).send({
  status : 405,
  message : `The requested resource was not found on the server`
}));

//test Connexion Db
const testDatabase = async() =>{
  try {
    await db.authenticate();
    console.log('Database Connected')
  } catch (error) {
     console.error('Error',error);
  }
}

testDatabase();

const PORT = process.env.PORT || 5001;

app.listen(PORT,console.log(`Server run on port ${PORT}`));