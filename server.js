const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/corpflow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fluxoSchema = new mongoose.Schema({
  nome: String,
  blocos: Array,
  criadoEm: { type: Date, default: Date.now },
});

const Fluxo = mongoose.model('Fluxo', fluxoSchema);

app.post('/api/fluxos', async (req, res) => {
  try {
    const fluxo = new Fluxo(req.body);
    await fluxo.save();
    res.status(201).send(fluxo);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/fluxos', async (req, res) => {
  try {
    const fluxos = await Fluxo.find();
    res.send(fluxos);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
