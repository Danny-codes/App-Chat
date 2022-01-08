
const url = 'http://localhost:3000/api/user'

 register = async(req,res) => {
    const body = {
        email: document.getElementById('emailField').value,
        password: document.getElementById('passwordField').value,
        name: document.getElementById('nameField').value,
        bio: document.getElementById('bioField').value
    }
    try{
       const response = await axios.post(`${url}`, body)
       if(response.status == 200){
          window.location.replace('./home.html')
       }
       else{
           console.log('aqui')
       }
    }catch(Error){
        console.log('Ocorreu um erro')
    }
  
}

