var antUsu = localStorage.getItem("Usuarios");
    antUsu = JSON.parse(antUsu);

    if (antUsu == null) antUsu = [];
    
        var aLength = antUsu.length;
        
        document.getElementById("listado").innerHTML="";
        
        var tabla="<tr><th>Nombre</th><th>Sexo</th><th>Correo</th><th>Fecha nacimiento</th></tr>";
        for(var i in antUsu){
            var usuario = JSON.parse(antUsu[i]);
            
            tabla += "<tr><td>"+usuario.nombre+"</td>";
            tabla += "<td>"+usuario.sexo+"</td>";
            tabla += "<td>"+usuario.correo+"</td>";
            tabla += "<td>"+usuario.fechaNacimiento+"</td>";
            tabla += "</tr>";
        }
        
        document.getElementById("listado").innerHTML=tabla;
    
    