$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (response) {

        const usuarios = [];

        response.forEach(usuario => {
            const newObject = {
                id_usuario : usuario.id,
                nombre_usuario : usuario.name,
                email_usuario : usuario.email,
                direccion_usuario : usuario.address.street
            };

            usuarios.push(newObject);

        });

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