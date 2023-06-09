$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (response) {
    
        const getUsuarios = (response) => {
            const newUsuarios = [] ;

            response.forEach(({ id, name, email, address }) => {
                const newObject = {};
        
                newObject.id_usuario = id;
                newObject.nombre_usuario = name;
                newObject.email_usuario = email;
                newObject.direccion_usuario = address.street;
        
                newUsuarios.push(newObject);
            });

            return newUsuarios;
        }

        const usuarios = getUsuarios(response);

        console.log(usuarios);

        var tablaHtml = '';
        $.each(usuarios, function (index, data) { 
            tablaHtml += '<tr>';
            tablaHtml += '<td>' + data.id_usuario + '</td>';
            tablaHtml += '<td>' + data.nombre_usuario + '</td>';
            tablaHtml += '<td>' + data.email_usuario + '</td>';
            tablaHtml += '<td>' + data.direccion_usuario + '</td>';
            tablaHtml += '</tr>';
        });
        $('#tablaDatos').html(tablaHtml);
    }
});