const express = require('express');
const customers = require('../models/customers.model');
const db = require('../config/db');
const router = express.Router();

//GET ALL CUSTOMERS
router.get('/', async (req, res) => {
	let allCustomers = await customers.findAll();
	try {
		return res.status(200).send(allCustomers);
	} catch (err) {
		return res.status(400).json({
			messages: `Error ${err}`,
		});
	}
});

//CREATE A CUSTOMER
router.post('/create', async (req, res) => {
	let { firstName, lastName, age } = req.body;

	let createdCustomer = await customers.create({
		firstName,
		lastName,
		age,
	});

	try {
		return res.status(201).send(createdCustomer);
	} catch (err) {
		return res.status(400).json({
			message: `Error occured: ${err}`,
		});
	}
});

//GET A CUSTOMER
router.get('/:id', async (req, res) => {
	let { id } = req.params;

	let getCustomer = await customers.findOne({
		where: {
			id,
		},
	});

	if (!getCustomer) {
		return res.status(400).send({
			status: `Error occured: ${new Error()}`,
		});
	}

	try {
		return res.status(200).send(getCustomer);
	} catch (err) {
		return res.status(400).json({
			message: `Error occured: ${err}`,
		});
	}
});

//UPDATE A CUSTOMER
router.post('/update/:id', async (req, res) => {
	let { firstName, lastName, age } = req.body;
	let { id } = req.params;

	let ctmr = await customers.findOne({
		where: {
			id,
		},
	});

	if (!ctmr) {
		return res.status(400).send({
			message: `No customer exist with id ${id}, ${firstName}, ${lastName}`,
		});
	}

	try {
		if (firstName) {
			ctmr.firstName = firstName;
		}
		if (lastName) {
			ctmr.lastName = lastName;
		}
		if (age) {
			ctmr.age = age;
		}
		ctmr.save();
		return res.status(200).send({
			messeage: `Customer with id ${id} has been updated!`,
		});
	} catch (err) {
		return res.status(400).json({
			message: `Error occured: ${err}`,
		});
	}
});

//DELETE A CUSTOMER

router.post('/delete/:id', async (req, res) => {
	let { id } = req.body;

	if (!id) {
		return res.status(400).send({
			message: `Provide the ID please`,
		});
	}

	let ctmr = await customers.findOne({
		where: {
			id,
		},
	});
	if (!ctmr) {
		return res.send({
			message: `No customer exist with id ${id}`,
		});
	}

	try {
		await ctmr.destroy();
		return res.status(200).send({
			message: `Customer with ID ${id} has been succefully deleted`,
		});
	} catch (err) {
		return res.status(400).send({
			message: `Error occured: ${err}`,
		});
	}
});

module.exports = router;
