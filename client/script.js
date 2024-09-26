document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (data.success) {
      alert("Login successful");
      // Redirect to respective dashboard or page
  } else {
      alert("Login failed: " + data.message);
  }
});
