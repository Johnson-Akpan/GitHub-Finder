const user = document.querySelector(".box2");
const repo = document.querySelector(".repo");
const followers = document.querySelector(".followers");
const img = document.querySelector(".image")
const header = document.querySelector(".header");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error_message")
const following = document.querySelector(".following")
// const url = "https://api.github.com/users/${username}";

// innerHTML = img

const theValue = () => {
  let me = document.querySelector(".input").value;
  user.textContent = me;
  fetch(`https://api.github.com/users/${me}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      user.innerText = data.login
      followers.innerText = data.followers
      repo.innerText = data.public_repos
      following.innerHTML = data.following
      img.src = data.avatar_url;
    })
  }
  btn.addEventListener("click", theValue);
//   fetch(`https://avatars.githubusercontent.com/u/1?v=4`);
//   .then(res => {
//     return res.json();
//   })
//     .then(data => {
//       img.innerHTML = data.avatar_url
//     })











// if (me == ``) {
//   // error.classList.remove("hidden")
// }
// else {
//   error.classList.add("hidden")
//   let newName = user = me
//   fetch(`url${newName}`)
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//     console.log(data);
//   })
// }


// const getUserName = function (username) {
//   fetch(`https://api.github.com/users/${username}`)
//     .then((data) => { 
//       return data.json()
// })
//     .then(function ([data]) {
//       const html = `
//       <header class="header">
//       <section class="in"> 
//       <h1 class="me">GITHUB CARD</h1>
//       <p>A Web Component to Show a Profile-card for Your Github Account</p>
//       <div class="container">
//       <div class="white-space"></div>
//       <div class="profile">
//       <img class="img" src="${data.avatar_url}" />
//         </div>
//         <div class="content">
//           <h1 class="box1">Johnson</h1>
//           <p class="box2">${data.login}</p>
//           <hr />
//         </div>
//         <div class="repo">
//         <div>
//         <h1 class="repo">${data.public_repos}</h1>
//         <p>REPOS</p>
//         </div>
//         <div>
//         <h1 class="followers">${data.followers}</h1>
//         <p>FOLLOWERS</p>
//         </div>
//         </div>
//         </div>
//         <div class="request">
//         <input  class="input" placeholder="Get a GitHub Username">
//         <button class="btn">show</button>
//         </div> 
//         `;
        
//         header.insertAdjacentHTML("beforeend", html);
//         // console.log(data.language);
//       });
//     };

// getUserName(`${username}`);

// {
//   /* <img class="img" src="" />
//     <p class="box2"></p>
//     <h1 class="repo"></h1>
//     <h1 class="followers"></h1> */
// }

// theValue();
// let getUserName = () => {
// }
// user.textContent = ``
// repo.textContent = ``
// followers.innerHTML = `
// img.textContent = `
