function salvarPost() {
  if (posts.length > 0) {
    localStorage.setItem("minireddit:posts", JSON.stringify(posts));
  }
}
function pegarPosts() {
  posts = JSON.parse(localStorage.getItem("minireddit:posts")) || [];
  if (posts.length > 0) {
    postStatico();
  } else {
    dollEl.style.display = "block";
  }
}

pegarPosts();
