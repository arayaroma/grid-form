function resetForm() {
  const formInputs = document.querySelectorAll("form input, form textarea");

  formInputs.forEach((input) => {
    input.value = "";
  });
}

window.onload = resetForm;

function sendEmail() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var affair = document.getElementById("affair").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:darayaroma@gmail.com" +
    "?subject=" +
    encodeURIComponent(affair) +
    "&body=" +
    encodeURIComponent(
      "Full Name: " +
        fullname +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Phone Number: " +
        phone +
        "\n\n" +
        message
    );
  window.location.href = mailtoLink;
}
