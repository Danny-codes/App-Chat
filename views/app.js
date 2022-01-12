
const url = 'http://localhost:3000/api/user'

let axiosConfig = {
    headers: {
        Authotization: "Bearer " + localStorage.getItem.token
    }
}
 register = async() => {
    const body = {
        email: document.getElementById('emailField').value,
        password: document.getElementById('passwordField').value,
        name: document.getElementById('nameField').value,
        bio: document.getElementById('bioField').value
    }
    
       axios.post(`${url}`, body)
        .then(req => {
            const token = req.data.token
            const name = req.data.name
            localStorage.setItem('token', token);
            localStorage.setItem('User_Name', name);
            axiosConfig.headers.Authotization = "Bearer " + localStorage.getItem("token");
        })
        .catch(err => {
            res.json(err)
        })
      
  
}

login = async() => {
    const body = {
        email: document.getElementById('emailField').value,
        password: document.getElementById('passwordField').value,
     
    }
    try{
       axios.post(`${url}/auth`, body).then(req => {
        const token = req.data.token
        const name = req.data.name
        localStorage.setItem('token', token);
        localStorage.setItem('User_Name', name);
        axiosConfig.headers.Authotization = "Bearer " + localStorage.getItem("token");
       })
      
    }catch(Error){
        console.log('Ocorreu um erro')
    }
  
}

