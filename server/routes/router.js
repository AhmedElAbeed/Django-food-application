const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add foods
 *  @method GET /add-food
 */
route.get('/add-food', services.add_food)

/**
 *  @description for update food
 *  @method GET /update-food
 */
route.get('/update-food', services.update_food)


// API
route.post('/api/foods', controller.create);
route.get('/api/foods', controller.find);
route.put('/api/foods/:id', controller.update);
route.delete('/api/foods/:id', controller.delete);


module.exports = route