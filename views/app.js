
const url = 'http://localhost:3000/api/user'

 login = async(req,res) => {
   // const body = {
   //     email: document.getElementById('emailField').value,
   //     password: document.getElementById('passwordField').value
    //}
    try{
       const response = await axios.get(`${url}`)
       console.log(response)
    }catch(Error){
        console.log(response)
    }
  
}

login()
