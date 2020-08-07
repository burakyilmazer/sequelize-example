import express from "express";
import bodyParser from "body-parser";
import user from "./services/user";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});

app.use('/api/user', user);

app.get('/api', (req,res) => {
 return res.json({
   type: true
 })
})

app.listen(3000);