const express = require('express');
const router = express.Router();
const { wishlistItems } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    const items = await wishlistItems.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await wishlistItems.findOne();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newItem = await wishlistItems.create({ title, description, price });
    res.status(201).json({
      message: 'New item created successfully',
      data: newItem
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const { id } = req.params;
    const [updatedItem] = await wishlistItems.update({ id, title, description, price }, { where: { id } });

    if (updatedItem === 0) return res.status(404).json({
      message: 'Item not found'
    });

    res.status(201).json({
      message: 'Item updated successfully',
      data: updatedItem
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await wishlistItems.destroy({ where: { id } });

    if (deletedItem) {
      res.status(200).json({
        message: 'Item deleted successfully'
      });
    } else {
      res.status(404).json({
        message: 'Item not found'
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
