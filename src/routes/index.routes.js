const { Router } = require('express');
const router = Router();
const { getPeople, logIn, addPerson, editPerson, getPerson } = require('../controllers/index.controller');

router.get('/',getPeople);

router.put('/log', logIn);

router.get('/get/person/:id', getPerson);

router.put('/edit/person/:id', editPerson)

router.post('/add/person', addPerson)

module.exports = router;