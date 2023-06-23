var produtos = [];
var clientes = [];

function cadastrar(){

    var codigo = document.getElementById("codigo").value;
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var categoria = document.getElementById("categoria").value;
    var ativos = document.querySelector('input[name=ativos]:checked').value;

    if(sessionStorage.getItem("vetor_produtos")) {
        produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));
    };

    var item = {};
    item = {
        Codigo: codigo,
        Nome: nome,
        Preço: preco,
        Categoria: categoria,
        Ativo: ativos
    };

    var checkboxTamanho = [];
    checkboxTamanho = document.getElementsByName("tamanho");

    var opcao = {};
    
    for (var i = 0; i < checkboxTamanho.length; i++){
        if(checkboxTamanho[i].checked){
        opcao[i] = checkboxTamanho[i].value;
        }
    };

    item["Tamanhos"] = opcao; 
    
    produtos.push(item);
    sessionStorage.setItem("vetor_produtos", JSON.stringify(produtos));

    console.log(produtos);
    return true;
    
}
         
function listar(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    
    var produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));
    for (var i = 0; i < produtos.length; i++) {

        var novaLinha = document.createElement("tr"); //cria uma nova tag <tr>
        registros.appendChild(novaLinha); // inserir a tag <tr> criada

        novaLinha.innerHTML = dados.innerHTML; //manipula o HTML. Pega do script no HTML (id=colunas) e joga dentro do tbody as informações. 
        
        for (var indice in novaLinha.childNodes) { //Retorna os nós ou tags "filhos" da minha novaLinha

            var celula = novaLinha.childNodes[indice];  //<td>
            if (celula.nodeName == "TD") {  //verificar se a tag é <td>
                switch(celula.dataset.column) {  // verificar o nome da coluna para poder inserir o dado correto

                    case "Código":
                        celula.innerHTML = produtos[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = produtos[i]["Nome"];
                        break;
                    case "Preço de venda":
                        celula.innerHTML = produtos[i]["Preço"];
                        break;
                    case "Categoria":
                        celula.innerHTML = produtos[i]["Categoria"];
                        break;
                    case "Ativo":
                        celula.innerHTML = produtos[i]["Ativo"];
                        break;
                    case "Tamanhos Disponíveis":                        
                        for (var x in produtos[i]["Tamanhos"]) {
                            celula.innerHTML = celula.innerHTML + produtos[i]["Tamanhos"][x];
                            celula.innerHTML = celula.innerHTML + ' / ';
                            console.log(x);
                            console.log(produtos[i]["Tamanhos"][x]);
                        }
                        break;
                };
            };
        };

    };

};

function cadastrarCliente(){
   
    if (validaNome() && validaCpf() && validaTelefone() && validaEmail()) {
        salvarRegistro();
        window.location.replace("lista_cliente.html")
    } else {
        return false
    }
}

function salvarRegistro(){

    var codigo = document.getElementById("codigo").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var datanascimento = document.getElementById("datanascimento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;

    if(sessionStorage.getItem("vetor_clientes")) {
        clientes = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    };

    var itemCliente = {};
    itemCliente = {
        Codigo: codigo,
        Nome: nome,
        CPF: cpf,
        dataNascimento: datanascimento,
        Telefone: telefone,
        Email: email,
    };


    clientes.push(itemCliente);
    sessionStorage.setItem("vetor_clientes", JSON.stringify(clientes));

    console.log(clientes);
    return true;
}

//function validaCodigo(){
//    if(codigo.value.trim() === ""){
//       return alert ("Informe o código!");
//    }else{
//        return true
//    }
//}

function validaNome(){
    if(nome.value.trim() === ""){
        return alert("Preencha o nome!");
    }else{
        return true
    }
}

function validaCpf(){
    if(cpf.value.trim() === ""){
        return alert ("Informe o CPF!");
    }else{
        return true
    }
}

function validaTelefone(){
    if(telefone.value.trim() === ""){
        return alert ("Informe o telefone!");
    }else{
        return true
    }
}

function validaEmail(){
    if(email.value.trim() === ""){
        return alert ("Informe o E-mail!");
    }else{
        return true
    }
}

function listarCliente(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    
    var clientes = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    for (var i = 0; i < clientes.length; i++) {

        var novaLinha = document.createElement("tr"); //cria uma nova tag <tr>
        registros.appendChild(novaLinha); // inserir a tag <tr> criada

        novaLinha.innerHTML = dados.innerHTML; //manipula o HTML. Pega do script no HTML (id=colunas) e joga dentro do tbody as informações. 
        
        for (var indice in novaLinha.childNodes) { //Retorna os nós ou tags "filhos" da minha novaLinha

            var celula = novaLinha.childNodes[indice];  //<td>
            if (celula.nodeName == "TD") {  //verificar se a tag é <td>
                switch(celula.dataset.column) {  // verificar o nome da coluna para poder inserir o dado correto

                    case "Código":
                        celula.innerHTML = clientes[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = clientes[i]["Nome"];
                        break;
                    case "CPF":
                        celula.innerHTML = clientes[i]["CPF"];
                        break;
                    case "Data de Nascimento":
                        celula.innerHTML = clientes[i]["dataNascimento"];
                        break;
                    case "Telefone":
                        celula.innerHTML = clientes[i]["Telefone"];
                        break;
                    case "E-mail":
                        celula.innerHTML = clientes[i]["Email"];
                        break;
                }
            }
        }

    }

}
