function validateForm() {
    var name  = document.getElementById("myName").value;
    var email = document.getElementById("myEmail").value;
    var date  = document.getElementById("startDate").value;
    var exp   = document.getElementById("myExperience").value;
    var errors = [];

    if (!/^[a-zA-Z ]+$/.test(name)) {
        errors.push("Name must contain only alphabet characters and spaces.");
    }

    if (!/^[\w.-]+@(\w+\.){1,3}\w{2,3}$/.test(email)) {
        errors.push("E-mail must be username@domain.ext (last extension 2-3 characters).");
    }

    if (date === "") {
        errors.push("Start date cannot be empty.");
    } else {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (new Date(date) <= today) {
            errors.push("Start date cannot be today or in the past.");
        }
    }

    if (exp.trim() === "") {
        errors.push("Experience cannot be empty.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }

    return true;
}