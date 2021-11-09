const express = require('express');
const customers = require('../models/customers.model');
const db = require('../config/db');
const router = express.Router();

//GET REQUEST
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

//CREATE USER
router.post('/createCustomer', async (req, res) => {
	let { firstname, lastname, age } = req.body;
	let ifExist = await customers.findOne({
		where: {
			firstname,
			lastname,
		},
	});
	if (ifExist) {
		return res.status(400).json({
			message: `This customer is already exist ${firstname} and ${lastname}`,
		});
	}
	try {
		let newCustomer = await customers.create({
			firstname,
			lastname,
			age,
		});
		return res.send(newCustomer);
	} catch (err) {
		return res.status(500).send({
			message: `Error: ${err.message}`,
		});
	}
});

//POST REQUEST

//GET REQUEST
router.get('/:id', async (req, res) => {
	let id = req.params.id;

	let customer = await customers.findOne({
		where: {
			id: id,
		},
	});

	if (!customer) {
		return res.status(400).send({
			message: 'ты что дурак?!',
		});
	}
	return res.send(customer);
});

router.patch('/', async (req, res) => {
	let { firstname, lastname, age } = req.body;

	let alreadyExist = await customers.findOne({
		where: {
			firstname,
			lastname,
			age,
		},
	});

	if (alreadyExist) {
		return res.status(200).json({
			message: `This ${firstname} already exist`,
		});
	}

	try {
		let customerUpdate = await customers.update(
			{
				firstname,
				lastname,
				age,
			},
			{
				where: {
					firstname: null,
				},
			}
		);
		return res.send(customerUpdate);
	} catch (err) {
		return res.status(400).json({
			messages: `Error: ${err}`,
		});
	}
});

module.exports = router;
