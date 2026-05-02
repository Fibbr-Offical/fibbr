async function createPost() {
  const content = document.getElementById("postContent").value;

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;

  const { error } = await supabase.from("posts").insert([
    {
      content,
      user_id: user.id
    }
  ]);

  if (error) return alert(error.message);

  loadPosts();
}

async function loadPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  data.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerText = post.content;
    feed.appendChild(div);
  });
}

loadPosts();
