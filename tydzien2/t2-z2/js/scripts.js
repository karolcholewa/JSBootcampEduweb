(function () {

    var form = document.getElementById("myForm"); //Get the form
    var fields = form.querySelectorAll("[data-error]"); //Get form fields with data-error attr; to validate only those fields which have the data-error attr

    function isNotEmpty(field) {
        return field.value !== "";
    };

    function isEmail(field) {
        return field.value.indexOf("@") !== -1;
    };

    function isNumber(field) {
        return field.value !== "" || NaN;
    };

    function isMessage(field, min) {
        return field.value.length >= min;
    };


    function displayErrors(errors) {

        var ul = document.querySelector("ul.errors"); //if there is no ul - returns null

        if (!ul) {
            ul = document.createElement("ul"); //if there is no ul - create an element in DOM
            ul.classList.add("errors");
        }

        ul.innerHTML = "";

        errors.forEach(function (error) {
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        });

        form.parentNode.insertBefore(ul, form);

    }

    //To validate a form, the submit event must be captured
    form.addEventListener("submit", function (e) {

        e.preventDefault(); //page won't reload, the form will not be sent

        var errors = []; //array to store data-error attr text strings

        //iterate through the validated fields
        for (var i = 0; i < fields.length; i++) {

            var field = fields[i],
                isValid = false;

            //check if there is any text for the text type fields
            if (field.type === "text") {
                isValid = isNotEmpty(field);


            } else if (field.type === "email") {
                isValid = isEmail(field);

            } else if (field.type === "number") {
                isValid = isNumber(field);

            } else if (field.type === "textarea") {
                isValid = isMessage(field, 2);
            }

            if (!isValid) {
                errors.push(field.dataset.error);
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }

        }

        if (errors.length) {

            displayErrors(errors);

        } else {
            form.submit(); //a method for forms to submit it
        }

        console.log(errors);

    }, false);

})();
