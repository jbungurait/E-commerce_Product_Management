const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try { 
    const products_tag = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(products_tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try { 
    const product_tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(product_tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag)
  } catch (err) {
    res.status(400).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagId = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); if (!tagId[0]) {
      res.status(404).json({ meassage: 'No tag by that Id.'});
      return;
    };
    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagId = await Tag.destroy({ 
      where: { id: req.params.id },
    });
    if (!tagId) {
      res.status(404).json({ meassage: 'No tag by that Id.'});
      return;
    };
    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
