const pessoa = {
    saudaçao: 'Bom dia ',
    falar(){
       console.log(this.saudaçao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()