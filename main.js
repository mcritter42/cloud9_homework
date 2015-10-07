function validateForm() {
    var x = document.forms["form"]["fname"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
    }
    var y = document.forms["form"]["lname"].value;
    if (y == null || y == "") {
        alert("Last name must be filled out");
        return false;
    }
    var z = document.forms["form"]["email"].value;
    if (z == null || z == "") {
        alert("Email must be filled out");
        return false;
    }
    var x = document.forms["form"]["program"].value;
    if (x == null || x == "") {
        alert("You must pick a class");
        return false;
    }
}

