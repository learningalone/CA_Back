const controller = {};
const Person = require('../models/Person')

controller.getPeople = async (req, res) => {
    const people = await Person.find();
    res.send(people);
};

controller.logIn = (req, res) => {
    console.log(req.body)
    res.send('People')
};

controller.addPerson = async (req, res) => {
    console.log(req.body)
    const { id_type, id_num, name, age, phone_1, phone_2, address } = req.body;
    const newPerson = new Person({
        id_type,
        id_num,
        name,
        age,
        phone_1,
        phone_2,
        address
    });
    await newPerson.save();
    res.json({msg:'Persona Agregada'})
};

controller.getPerson = async (req, res) => {
    const person = await Person.findById(req.params.id);
    // console.log(person);
    res.json(person);
}

controller.editPerson = async (req, res) => {
    const person = await Person.findById(req.params.id);
    console.log(person);
    res.send('Persona Obtenida');
}

module.exports = controller;