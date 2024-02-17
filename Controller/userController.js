const User = require('../Models/userSchema');

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {

  try {
    const user = await User.find({ _id: { $in: req.query.id } });
    console.log(`${user}`);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {

  try {
    const user = await User.find();
    console.log(`${user}`);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  const userid = req.params.id;
  const updateField = req.body;
  try {
    const user = await User.findByIdAndUpdate(userid, updateField, { new: true });
    console.log(`${user}`);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMultipleUserById = async (req, res) => {
  const userid = req.query.id;
  const updateField = req.body;
  try {
    const user = await User.updateMany({ _id: { $in: userid } }, updateField, { new: true });
    console.log(`${user}`);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

