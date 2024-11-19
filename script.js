document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");
  const goToRegisterLink = document.getElementById("go-to-register");
  const goToLoginLink = document.getElementById("go-to-login");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Button event listeners to toggle form modes
  registerButton.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  loginButton.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  goToRegisterLink.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  goToLoginLink.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Form submissions with basic validation
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in all login fields.");
    } else {
      // Simulate login success
      alert(`Welcome back, ${username}!`);
      loginForm.reset();
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password-register").value.trim();
    const question1 = document.getElementById("question1").value.trim();
    const question2 = document.getElementById("question2").value.trim();

    if (!fullname || !email || !password) {
      alert("Please fill in all required fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Simulate registration success
      alert(`Account created successfully for ${fullname}!`);
      registerForm.reset();
      container.classList.remove("sign-up-mode"); // Switch to login after registration
    }
  });

  // Email validation helper function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Smooth animation for switching forms
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    form.addEventListener("animationend", (e) => {
      if (e.animationName === "fadeIn") {
        form.classList.add("active");
      }
    });
  });
});
