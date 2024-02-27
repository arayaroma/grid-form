function resetForm() {
  // Select all input and textarea elements within the form
  const formInputs = document.querySelectorAll("form input, form textarea");

  // Loop through each input and textarea element
  formInputs.forEach((input) => {
    // Reset the value of each input and textarea to an empty string
    input.value = "";
  });
}

// Call resetForm function when the page loads
window.onload = resetForm;
