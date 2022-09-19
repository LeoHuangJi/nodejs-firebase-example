let { db, admin } = require('../config/db');
const _ = require('lodash');
const log4js = require('./../config/log4js');
const logger = log4js.getLogger("error");
const { message, responseCode } = require("../common/message");
const { status } = require("../common/constant");

const responseData = require("../common/responseData");

const list = async (req, res) => {
    const name = req.query.name;
    try {
        let categoryQuery = await db.collection('category')
      
        .get();
        const data = categoryQuery.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return responseData(responseCode.ok, true, message.ok, data);
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)

    }


}

const create = async (req, res) => {

    try {

        const { name, description, thumb, status } = req.body;

        const params = {
            name, description, thumb, status
        };
        const category = await db.collection('category').add(params);
        if (_.isEmpty(category.id))
            return responseData(responseCode.badRequest, true, message.badRequest, null);
        params.id = category.id;
        return responseData(responseCode.created, true, message.created, params)

    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}

const update = async (req, res) => {

    try {

        const { id, name, description, thumb, status } = req.body;

        const params = {
            name, description, thumb, status
        };

        const category = await db.collection('category').doc(id);
        await category.update(params);
        const updated = await category.get();

        if (!updated.exists) {
            return responseData(responseCode.notFound, false, message.notFound, null)
        }
        return responseData(responseCode.ok, true, message.ok, updated.data())

    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;

        const category = await db.collection('category').doc(id).get();

        if (!category.exists) {
            return responseData(responseCode.notFound, false, message.notFound, null)
        }
        return responseData(responseCode.ok, true, message.ok, category.data())
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}

/*change status = 9*/
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await db.collection('category').doc(id);

        await category.update({
            status: status.remove
        });
        const updated = await category.get();

        if (!updated.exists) {
            return responseData(responseCode.notFound, false, message.notFound, null)
        }
        return responseData(responseCode.ok, true, message.ok, updated.data())
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}


/* delete row in database*/
const _delete = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await db.collection('category').doc(id);
        await category.delete();
        return responseData(responseCode.ok, true, message.ok)
    } catch (error) {
        logger.error(`${req.method} - ${req.originalUrl} - ${error.message}`);
        return responseData(responseCode.error, false, error.message, null)
    }
}


module.exports = {
    list, create, update, findOne, delete: _delete, remove
};