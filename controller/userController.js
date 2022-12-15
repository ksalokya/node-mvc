import User from "../model/userModel.js";

export const createUser = async (req,res,next) => {
    const { username, email, password } = req.body;
    try{
      const user = await User.create({
        username, email, password
      });
      res.send(`New User created successfully : ${user}`)
    } catch (error){
      next(error);
    }
};

export const readUser = async (req,res,next) => {
    const { username } = req.body;
    try {
        const user = await User.findOne({username : username});
        if(user) res.send(`User found : ${user}`);
    } catch (error) {
        next(error);
    }
};

export const readUsers = async (req,res,next) => {
    const { username } = req.body;
    try {
        const users = await User.find({});
        if(users) res.send(`User found : ${users}`);
    } catch (error) {
        next(error);
    }
};

export const replaceUser = async (req,res,next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOneAndReplace({username: username}, {username: username, email: email, password: password});
        const temp = User.f
        if(user) res.send(`User updated`);
        else res.status(404).send('User not found');
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req,res,next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOneAndUpdate({username: username}, {email: email});
        if(user) res.send(`User updated`);
        else res.status(404).send('User not found');
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req,res,next) => {
    const { username } = req.body;
    try {
        const user = await User.findOneAndDelete({username: username})
        if(user) res.send(`User deleted`);
        else res.status(404).send('User not found');
    } catch (error) {
        next(error);
    }
};
