const express = require('express');
const customers = require('../models/customers.model');
const db = require('../config/db');
const router = express.Router();

router.get('/', (req, res) => {
	customers
		.findAll()
		.then((customers) => {
			res.status(200).json(customers);
			console.log(customers);
		})
		.catch((err) => console.log('Error name', err));
});

// router.get('/add', async (req, res) => {
// 	const data = await customers
// 		.create({
// 			firstName: 'Gurban',
// 			lastName: 'Gurbanow',
// 			age: 56,
// 		})
// 		.then((data) => res.json(data))
// 		.catch((err) => console.log(err));
// });

router.get('/:id', async (req, res) => {
	let { id } = req.body;
	let customer = await customers.findOne({
		where: {
			id: id,
		},
	});

	if (!cusomter) {
		return res.status(400).send({
			message: 'Not found that kind of id',
		});
	}
	return res.send(customer);
});

router;

module.exports = router;
