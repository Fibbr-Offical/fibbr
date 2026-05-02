async function loadProfile() {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;

  document.getElementById("username").innerText =
    "Logged in as: " + user.email;
}

loadProfile();
