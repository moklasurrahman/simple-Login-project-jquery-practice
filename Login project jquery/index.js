$("#loginbtn").click(function () {
    var password1 = $("#pass1").val()

    var password2 = $("#pass2").val()

    if (password1 != "" && password2 != "") {

        if (password1 == password2) {
            alert("Successfully log in")
        }
        else {
            alert("Password not same Enter again")
        }

    } else {
        alert("Plese enter password")
    }

})