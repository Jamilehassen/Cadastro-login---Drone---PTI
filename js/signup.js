class SignUp {
    constructor(){
        this.arrayUsers=JSON.parse(localStorage.getItem("@DRONE:users"))||[];
    }
  

    salvar(){
        let user = this.lerDados();

        if(this.validaCampos(user)){
            this.adicionar(user);
            alert('Cadastrado com sucesso')
        }

        console.log(this.arrayUsers);
    }

    adicionar(user){
        //VALIDAR SE JA EXISTE UM USUÁRIO COM ESSE EMAIL ANTES DE CADASTRAR
        this.arrayUsers.push(user);
        localStorage.setItem("@DRONE:users",JSON.stringify(this.arrayUsers));
    }

    lerDados(){
        let user = {}

        user.id = this.getNextId();
        user.primeiroNome = document.getElementById('firstname').value;
        user.sobrenome = document.getElementById('lastname').value;
        user.email = document.getElementById('email').value;
        user.number = document.getElementById('number').value;
        user.senha = document.getElementById('password').value;
        user.confirmaSenha = document.getElementById('confirmPassword').value;

        return user
    }

    getNextId(){
      return this.arrayUsers.length>0?this.arrayUsers.at(-1).id+1:1;
    }

    validaCampos(user){
        let msg = '';

        if(user.primeiroNome == ''){
            msg += '- Informe seu primeiro nome \n';
        }

        if(user.sobrenome == ''){
            msg += '- Informe seu sobrenome \n';
        }

        if(user.email == ''){
            msg += '- Informe seu E-mail \n';
        }

        if(user.number == ''){
            msg += '- Informe seu número \n';
        }

        if(user.senha == ''){
            msg += '- Informe sua senha \n';
        }

        if(user.confirmaSenha == ''){
            msg += '- Informe sua confirmação de senha \n';
            if(user.confirmaSenha != user.senha){
                msg += '- Confirmação de senha incorreta \n';
            }
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar(){
        alert('cancelado!')
    }
}

var signup = new SignUp();