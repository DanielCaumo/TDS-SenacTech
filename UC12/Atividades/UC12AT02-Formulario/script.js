const formulario = document.querySelector('form');

const campoCpf = document.getElementById('cpfField');
const campoCnpj = document.getElementById('cnpjField');
const telefone = formulario.telefone.value;
const celular = formulario.celular.value;






function mostraInputPessoa(){
    if(document.getElementById('cpf').checked){
        campoCpf.style.display = "inline-block";
        campoCnpj.style.display = "none";
        campoCnpj.value = "";
    }else if(document.getElementById('cnpj').checked){
        campoCpf.style.display = "none";
        campoCpf.value = "";
        campoCnpj.style.display = "inline-block";
    }
}

function valida(){
    if(document.getElementById('cpf').checked){
        validaCpf();
    }else if(document.getElementById('cnpj').checked){
        validaCnpj();
    }
    validaNome();
    validaEmail();
    validaTelefone(telefone);
    validaTelefone(celular);
    validaEndereco();
}

function validaCpf(){
    if (cpf == "" || cpf.length != 11) {
        alert("Informe o CPF completo!");
        formulario.cpf.focus();
        return false;
    }
}

function validaCnpj(){
    if (cnpj == "" || cnpj.length != 18) {
        alert("Informe o CNPJ completo!");
        formUser.cnpj.focus();
        return false;
    }
}

function validaNome(){
    var nome = formulario.nome.value;
    if (nome == "" || nome.length <= 5) {
        alert("Informe o nome completo!");
        formulario.nome.focus();
        return false;
    }
}

function validaEmail(){
    var email = formulario.email.value;
    if (email == "" || email.length <= 5 || !email.includes("@")) {
        alert("Informe o email!");
        formulario.email.focus();
        return false;
    }
}

function validaTelefone(){
    if (telefone == "" || telefone.length < 13) {
        alert("Informe o telefone com DDD!");
        formulario.telefone.focus();
        return false;
    }
}

function validaEndereco(){
    var endereco = formulario.endereco.value;
    if (endereco == "" || endereco.length <= 5) {
        alert("Informe o endereço completo!");
        formulario.endereco.focus();
        return false;
    }
}


function mascaraCPF(i) {
    i.setAttribute("maxlength", "14");
    cpf = i.value;
    //remover texto com Regex
    cpf = cpf.replace(/[^\d]/g, "");
    //aplica a mascara somente depois de digitar todos os numeros
    i.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function mascaraCNPJ(cnpj) {
    v = cnpj.value;
    if (isNaN(v[v.length - 1])) {
        cnpj.value = v.substring(0, v.length - 1);
        return;
    }
    cnpj.setAttribute("maxlength", "18");
    if (v.length == 2 || v.length == 6) cnpj.value += ".";
    if (v.length == 10) cnpj.value += "/";
    if (v.length == 15) cnpj.value += "-";
}

function mascaraFone(fone) {
    tel = fone.value;
    //não aceitar texto
    if (isNaN(tel[tel.length - 1])) {
        fone.value = tel.substring(0, tel.length - 1);
        return;
    }
    //mascara
    fone.setAttribute("maxlength", "13");
    if (tel.length == 1) fone.value = "(" + fone.value;
    if (tel.length == 3) fone.value = fone.value + ")";
    if (tel.length == 8) fone.value += "-";
}

