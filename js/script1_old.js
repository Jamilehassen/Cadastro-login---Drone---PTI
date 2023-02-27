class User {
    constructor(){
        this.id = 1;
        this.arrayUsers = [];
        this.arrayUsuario = [];
    }
    

    salvar(){
        alert('teste required')
        let user = this.lerDados();

        if(this.validaCampos(user)){
            this.adicionar(user);
        }

        console.log(this.arrayUsers);
    }

    usuario(user, usuario){
        alert('teste user')
        let usuario = this.lerDadosUser();
        let msg = '';
        
        if(this.validaUser(usuario)){
            for(let i = 0; i < this.id; i++){
                if(user.email != usuario.email){
                    msg += '- E-mail não cadastrado'
                }
            }
        }
    }

    adicionarUser(usuario){
        this.arrayUsuario.push(usuario);
    }

    adicionar(user){
        this.arrayUsers.push(user);
        this.id++;
    }

    lerDadosUser(){
        let usuario = {}

        usuario.emailUser = document.getElementById('emailUser').value;
        usuario.senhaUser = document.getElementById('passwordUser').value;

        return usuario
    }

    lerDados(){
        let user = {}

        user.id = this.id;
        user.primeiroNome = document.getElementById('firstname').value;
        user.sobrenome = document.getElementById('lastname').value;
        user.email = document.getElementById('email').value;
        user.number = document.getElementById('number').value;
        user.senha = document.getElementById('password').value;
        user.confirmaSenha = document.getElementById('confirmPassword').value;

        return user
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

var user = new User();