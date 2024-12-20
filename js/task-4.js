const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formEmail = formEl.elements.email.value.trim();

  const formPass = formEl.elements.password.value.trim();

  if (formEmail === "" || formPass === "") {
    return alert("All form fields must be filled in");
  } else {
    const formDate = {
      [formEl.elements.email.name]: formEmail,
      [formEl.elements.password.name]: formPass,
    };
    console.log(formDate);
  }

  formEl.reset();
});

// const formDate = {
//     [formEl.elements.email.name]: formEl.elements.email.value.trim(),
//     [formEl.elements.password.name]: formEl.elements.password.value.trim(),
//   };
