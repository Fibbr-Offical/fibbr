document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signupBtn").addEventListener("click", signup);
});

async function signup() {
  alert("Button works"); // test first

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Signup success!");
}
