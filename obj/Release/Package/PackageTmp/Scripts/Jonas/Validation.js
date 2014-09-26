$(function () {
    $("form:first").validate({
        messages: {
            nombre: {//se refiere al name del input.
                required: 'Por favor llene este campo.'
            }
        }
    });
})
