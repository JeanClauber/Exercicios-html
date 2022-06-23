function mascara_cpf() {
    var cpf = document.getElementById("cCpf")
    if(cCpf.value.length == 3 || cCpf.value.length == 7) {
        cCpf.value +="."
    }  else if (cCpf.value.length == 11){
        cCpf.value +="-"
    }
}

function mascara_nasc() {
    var nasc = document.getElementById("cNasc")
    if(cNasc.value.length == 2 || cNasc.value.length == 5 ){
        cNasc.value += "/"
    }
}