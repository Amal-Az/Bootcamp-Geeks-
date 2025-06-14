const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const newUser = await userModel.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.getUserByUsername(username);
        if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Mot de passe incorrect" });

        res.status(200).json({ message: "Connexion réussie" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await userModel.updateUser(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
