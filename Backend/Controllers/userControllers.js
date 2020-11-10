const { loginValidation, registerValidation } = require("../Validation/Validation")
const User = require("../Models/User")
const Location = require("../Models/Locations")
const Customer = require("../Models/Customer")
const bcrypt = require("bcryptjs");
const axios = require("axios")

const registration = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("Email already exists in the database");
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        await user.save();
        const customerExists = await Customer.findOne({ email: req.body.email, name: req.body.name });
        if (customerExists) {
            return res.send(customerExists);
        }
        const customer = new Customer({
            name: req.body.name,
            email: req.body.email
        })
        let savedCustomer = await customer.save()
        res.send(savedCustomer);
    } catch (err) {
        res.status(400).send(err);
    }
}

const login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).send("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    const customerExists = await Customer.findOne({ email: user.email, name: user.name });

    res.send({ user: customerExists, Message: "Login Successfully!" });
}


const getLocation = async (req, res) => {
    try {
        const city = req.query.location
        const result = { city }
        let locations = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?country=IN&access_token=pk.eyJ1Ijoic291bWl0aGEiLCJhIjoiY2toMjRhd202MWVnaTJzbnYyZm83aGo2NSJ9.yapH0I3gFXBGmO7Qptnx8A`)
        result.locations = locations.data["features"].map(item => item.place_name)

        let temp = await Location.findOne({ city })

        if (temp == null) {
            let locationData = new Location(result)
            locationData.save()
                .then(() => null)
                .catch(() => null)
        }
        res.send(temp || result)
    } catch (err) {
        res.send(err)
    }
}

const addUserDetails = async (req, res) => {
    const userExists = await Customer.findOne({ email: req.body.email, name: req.body.name });
    if (userExists) {
        return res.send(userExists);
    }
    const user = new Customer({
        name: req.body.name,
        email: req.body.email
    })
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

const editUserDetails = async (req, res) => {
    try {
        Customer.findById(req.body._id)
            .then(customer => {
                customer.name = req.body.name,
                    customer.email = req.body.email,
                    customer.number = req.body.number,
                    customer.order = req.body.order,
                    customer.basket = req.body.basket,
                    customer.membership = req.body.membership,
                    customer.wallet = req.body.wallet,
                    customer.address = req.body.address

                customer.save()
                    .then(() => res.send(customer))
                    .catch(err => res.status(400).send(err))
            })
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { registration, login, getLocation, addUserDetails, editUserDetails }