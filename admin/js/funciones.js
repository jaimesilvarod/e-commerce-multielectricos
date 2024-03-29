function llenarLista(Url, divID, idItemSelected, addItemAll=false){
    $.ajax({
        url: Url
    }).done(function (data){
        data=JSON.parse(data);
        if(addItemAll) $("#" + divID).append("<option value=-1>Seleccione una opción</option>");
        for(var i=0; i < data.length; i++){
            var opc = "<option ";
            if(idItemSelected == data[i].id) opc = opc + " selected ";
            opc = opc + " value=" + data[i].id + ">" + data[i].descripcion + "</option>";
            $("#" + divID).append(opc)
        }
    })
}