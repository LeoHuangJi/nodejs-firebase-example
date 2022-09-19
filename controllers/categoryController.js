
const categoryService = require('../services/categoryService');

exports.list = (req, res, next) => {
    categoryService.list(req)
        .then(data => res.json(data))

};

exports.create = (req, res) => {
    categoryService.create(req, res)
        .then(data => res.json(data))

};
exports.update = (req, res) => {
    categoryService.update(req, res)
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





