$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function (response) {
        var tablaHtml = '';
        $.each(response, function (index, data) { 
            let usuarios = {
                
            }
            tablaHtml += '<tr>';
            tablaHtml += '<td>' + data.id + '</td>';
            tablaHtml += '<td>' + data.name + '</td>';
            tablaHtml += '<td>' + data.email + '</td>';
            tablaHtml += '<td>' + data.address.street + '</td>';
            tablaHtml += '</tr>';
        });
        $('#tablaDatos').html(tablaHtml);
    }
});