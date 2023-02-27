class Login {
  constructor(){
      this.arrayUsers=JSON.parse(localStorage.getItem("@DRONE:users"))||[];
  }

  lerDadosUser(){
      let usuario = {}

      usuario.emailUser = document.getElementById('emailUser').value;
      usuario.senhaUser = document.getElementById('passwordUser').value;

      return usuario
  }

  login(){
    let credentials = this.lerDadosUser();
    if(this.userExists(credentials)){
      console.log('logged')
      window.location.href = "https://plot.ardupilot.org/#/"
    }else{
      console.log('credenciais inválidas')
      alert('Não cadastrado')
    }
  }

  userExists(credentials){
    for(const user of this.arrayUsers){
      if(user.email==credentials.emailUser&&user.senha==credentials.senhaUser){
        return true
      }
    }
    return false
  }

  validaUser(usuario){
      let msg = '';

      if(usuario.email == ''){
          msg += '- Informe seu E-mail \n';
      }

      if(usuario.senha == ''){
          msg += '- Informe sua senha \n';
      }
  }

  cancelar(){
      alert('cancelado!')
  }

}

var login = new Login();