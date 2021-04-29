var postsEl = document.querySelector(".posts");
var postEl = document.querySelector("#post");
var posts = [];
var dollEl = document.querySelector(".doll");

postEl.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    adicionarPost();
    salvarPost();
  }
});

function postStatico() {
  postsEl.innerHTML = "";

  posts.sort((a, b) => parseFloat(a.curtidas) - parseFloat(b.curtidas));

  for (const [index, post] of posts.entries()) {
    postsEl.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="post">
        <p id="curtidas">${post.curtidas}</p>
        <div class="txtpost">${post.postagem}</div>
        <img style="padding-left:5px;" onclick="diminuir(${index})" class="icon dislike" src="img/dislike.svg" alt="" />
        <img onclick ="adicionar(${index})" class="icon like" src="img/like.svg" alt="" /> 
        <hr />   
      </div>
        `
    );
  }
}

function adicionarPost() {
  posts.push({
    postagem: postEl.value,
    curtidas: 0,
  });

  postEl.value = "";
  postEl.focus();

  postStatico();
  console.log(posts);
}

function adicionar(index) {
  posts[index].curtidas++;
  salvarPost();
  postStatico();
}

function diminuir(index) {
  if (posts[index].curtidas > 0) {
    posts[index].curtidas--;
    salvarPost();
    postStatico();
  }
}
