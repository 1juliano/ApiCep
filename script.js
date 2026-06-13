function buscarCEP() {
    let cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {

            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }

            document.getElementById("estado").value = data.uf;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("endereco").value = data.logradouro;
            document.getElementById("complemento").value = data.complemento;

        })
        .catch(() => {
            alert("Erro ao buscar CEP.");
        });
}
