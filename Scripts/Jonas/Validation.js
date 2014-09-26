$(function () {//OnducumentReady.
    $("form:first").validate({//hacer wrapper a la primera forma que encuentre.
        messages: {
            nombre: {//se refiere al name del input.
                required: 'Por favor llene este campo.'
            }
        }
    });
})
