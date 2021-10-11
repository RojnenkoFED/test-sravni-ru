const { Router } = require('express');
const router = Router();

const data = require('../backend/data');
const offers = data.map((offer, index) => ({...offer, id: offer.alias + index}));

router.get('/', async (req, res) => {
  try {
    setTimeout(() => {
      res.json(offers);
    }, 500);

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/about/:id', async (req, res) => {
  try {
    const currentOffer = offers.find(item => item.id === req.params.id);
    res.json(currentOffer);

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
