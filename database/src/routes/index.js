const { Router } = require('express');
const store  = require('../database');
const { validateModel } = require('../middlewares');

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list()
    res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const data = req.body;
    const response = await store[model].insert(data);
    res.status(201).json(response);
})

router.delete("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].delete(id);
    res.status(204).send(response);

})

router.put("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const newData = req.body
    const response = await store[model].update(id, newData);
    res.status(200).send(response);
})

module.exports = router;