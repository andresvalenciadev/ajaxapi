$(document).ready(function () {
    tablaUsuarios();
});

const tablaUsuarios = () => {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json"
      })
      .done(function(response) {
        // Operaciones exitosas con la respuesta
        console.log("Datos obtenidos correctamente:", response);
        const usuarios = refactorizarUsuarios(response);
        generarTablaUsuarios(usuarios);
        $('#tablaUsuarios').DataTable();
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        // Manejo de errores
        console.error("Error en la solicitud:", errorThrown);
        let alertaErrorHtml = '';
        alertaErrorHtml += '<br><div class="alert alert-danger" role="alert">';
        alertaErrorHtml += 'Error en la solicitud';
        alertaErrorHtml += '</div>';
        $('#alertError').html(alertaErrorHtml);
      });
}

// Función para refactorizar los datos de usuarios
const refactorizarUsuarios = (usuarios) => {
    const refactUsuarios = [];
    usuarios.forEach(({id, name, email, address}) => {
        const newObject = {
            id_usuario : id,
            nombre_usuario : name,
            email_usuario : email,
            direccion_usuario : address.street
        };

        refactUsuarios.push(newObject);

    });

    return refactUsuarios;
};

const generarTablaUsuarios = (usuarios) => {
    let tablaHtml = '';

    usuarios.forEach(({id_usuario, nombre_usuario, email_usuario, direccion_usuario}) => {
        tablaHtml += '<tr>';
        tablaHtml += `<td>${id_usuario}</td>`;
        tablaHtml += `<td>${nombre_usuario}</td>`;
        tablaHtml += `<td>${email_usuario}</td>`;
        tablaHtml += `<td>${direccion_usuario}</td>`;
        tablaHtml += '</tr>';
    });

    $('#tablaUsuariosDatos').html(tablaHtml);
}