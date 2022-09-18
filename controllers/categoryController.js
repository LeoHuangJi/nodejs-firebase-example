
const categoryService = require('../services/categoryService');

exports.findAll = (req, res, next) => {
    const title = req.query.title;
    categoryService.getAll()
        .then(data => res.json(data))

};

exports.create = (req, res) => {
    categoryService.create(req, res)
        .then(data => res.json(data))

};
exports.findOne = (req, res, next) => {
    categoryService.findOne(req)
        .then(data => res.json(data))

};

exports.delete = (req, res) => {
    categoryService.delete(req)
        .then(data => res.json(data))

};

exports.remove = (req, res) => {
    categoryService.remove(req)
        .then(data => res.json(data))

};





