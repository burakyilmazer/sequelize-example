import express from "express";
import db from "../models";

const app = express.Router();

app.post('/', async (req, res) => {
  db.User.create(req.body).then(result => {
    return res.json({
      type: true,
      data: 'Kullanıcı oluşturuldu'
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString(),
    })
  })
});

app.get('/', async (req, res) => {
  db.User.findAll({}).then(result => {
    return res.json({
      type: true,
      data: result,
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
});

app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  db.User.destroy({where: {id}, truncate: false, cascade: false }).then(result => {
    return res.json({
      type: true,
      data: "Kullanıcı silindi"
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString(),
    });
  });
});

app.put('/:id', async (req, res) => {
  const id = req.params.id;
  db.User.update(req.body, {where: {id: id}}).then(result =>{
    return res.json({
      type: true,
      data: "kullanıcı güncellendi"
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
})

module.exports = app;