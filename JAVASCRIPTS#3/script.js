function operaciones(){
    var datos = document.getElementById("operacion").value.trim();
    var numero1 = document.getElementById("numero1").value.trim();
    var numero2 = document.getElementById("numero2").value.trim();

    console.log(numero1,numero2,datos);

    if(numero1 === ""){
        document.getElementById("numero1").classList.remove("is-valid");
        document.getElementById("numero1").classList.add("is-invalid");
    }else{
        document.getElementById("numero1").classList.remove("is-invalid");
        document.getElementById("numero1").classList.add("is-valid");
    }

    if(numero2 === ""){
        document.getElementById("numero2").classList.remove("is-valid");
        document.getElementById("numero2").classList.add("is-invalid");
    }else{
        document.getElementById("numero2").classList.remove("is-invalid");
        document.getElementById("numero2").classList.add("is-valid");
    }

    
    if(numero1 != " " && numero2 != " " && datos != ""){
        console.log("Puedes continuar");
    
        if(datos == 'suma'){
            var resultado = parseInt(numero1) + parseInt(numero2);
        }
        else if(datos == 'resta'){
            var resultado = (numero1 - numero2);
        }
        else if (datos == 'multi'){
            var resultado = (numero1 * numero2);
        }
        else if (datos == 'divi'){
            var resultado = (numero1 / numero2);
        }
        solucion.innerHTML = (`El resultado de ${numero1} ${datos} ${numero2} es ${resultado}`);
    }
    else{
        console.log("Te faltan datos por llenar")
    
        if(datos == ' '){
            document.getElementById("operacion").focus();
            document.getElementById("operacion").classList.add('is-invalid');
        }
        else if(numero1 == ' '){
            document.getElementById("numero1").focus();
            document.getElementById("numero1").classList.add('is-invalid');
        }
        else if (numero2 == ' '){
            document.getElementById("numero2").focus();
            document.getElementById("numero2").classList.add('is-invalid');
        }
    }
    
}
