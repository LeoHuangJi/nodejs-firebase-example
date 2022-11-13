
const zoomService = require('../services/zoomService');

exports.list = (req, res, next) => {
    zoomService.list(req)
        .then(data => res.json(data))

};

exports.createZoom = (req, res) => {
    zoomService.createZoom(req, res)
        .then(data => res.json(data))

};

exports.findOne = (req, res) => {
    zoomService.findOne(req, res)
        .then(data => res.json(data))

};

exports.joinAMeeting = (req, res) => {
    zoomService.joinAMeeting(req, res)
        .then(data => res.json(data))

};




