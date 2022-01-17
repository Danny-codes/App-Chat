
const register = async (req,res) => {
        res.render('register')
}
const login = async (req,res) => {
    res.render('login')
}

const chat = async (req,res) => {
    res.render('chat')
}

const home = async (req,res) => {
    res.render('home')
}

module.exports =  {login, chat, register, home}