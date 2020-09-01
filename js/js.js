function navegation(paginaNumber){
            
    var pagina = document.getElementById("page-"+paginaNumber);

    for(var i = 1; i <=6; i++){
        document.getElementById("page-"+i).style.display = 'none';
    }

    pagina.style.display = 'block';

}