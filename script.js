let formDetails = {
  firstName: "",
  lastName: "",
  gender: "",
  occupation: "",
  country: "",
  phoneNumber: "",
  email: "",
};

const submitButton = document.getElementById("submit-button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gender = document.querySelectorAll('input[name="gender"]');
const occupation = document.getElementById("occupation");
const country = document.getElementById("country");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const myForm = document.getElementById("myForm");

submitButton.disabled = true;

function handleChange(e) {
  if (e.target.name === "gender") {
    const selectedGender = document.querySelector(
      'input[name="gender"]:checked'
    );
    formDetails[e.target.name] = selectedGender ? selectedGender.id : "";
  } else {
    formDetails[e.target.name] = e.target.value;
  }

  const condition =
    formDetails.firstName.length > 0 &&
    formDetails.lastName.length > 0 &&
    formDetails.gender.length > 0 &&
    formDetails.occupation.length > 0 &&
    formDetails.country.length > 0 &&
    formDetails.phoneNumber.length > 0 &&
    formDetails.email.length > 0;

  if (condition) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  console.log("Form details:", formDetails);
}

myForm.addEventListener("submit", handleSubmit);

firstName.addEventListener("input", handleChange);
lastName.addEventListener("input", handleChange);
occupation.addEventListener("change", handleChange);

gender.forEach((radio) => {
  radio.addEventListener("change", handleChange);
});

country.addEventListener("input", handleChange);
phoneNumber.addEventListener("input", handleChange);
email.addEventListener("input", handleChange);
