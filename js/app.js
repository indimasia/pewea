const title = "Cutie Cat";
const descriptions = "Ini merupakan aplikasi PWA dengan menampilkan galeri gambar kucing";

const container = document.querySelector(".container");
const pageHome = document.querySelector(".page-home");
const pageAbout = document.querySelector(".page-about");

const cats = [
  {
    name: "Vania",
    image: "images/cat1.jpg",
    type: "persia"
  },
  {
    name: "Sarah",
    image: "images/cat2.jpg",
    type: "persia"
  },
  {
    name: "Kibo",
    image: "images/cat3.jpg",
    type: "Angora"
  },
  {
    name: "Nana",
    image: "images/cat4.jpg",
    type: "Angora"
  },
  {
    name: "Ferry",
    image: "images/cat5.jpg",
    type: "Maine Coon"
  },
  {
    name: " Meika",
    image: "images/cat6.jpg",
    type: "Maine Coon"
  },
  {
    name: "Levi",
    image: "images/cat7.jpg",
    type: "Sphynx"
  },
  {
    name: "Bastian",
    image: "images/cat8.jpg",
    type: "Sphynx"
  },
  {
    name: "Cici",
    image: "images/cat9.jpg",
    type: "Munchkin"
  }
];

const initPage = () => {
  document.querySelector("#title").innerHTML = title;
  pageAbout.style.display = "none";

  let output = "";
  cats.forEach(
    ({ name, image, type }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">${type}</a>
              </div>
              `)
  );

  pageHome.innerHTML = output;
  pageAbout.innerHTML = `<p>${descriptions}</p>`;
}

const showHome = () => {
  pageAbout.style.display = "none";
  pageHome.style.display = "";
};

const showAbout = () => {
  pageHome.style.display = "none";
  pageAbout.style.display = "";
}

document.addEventListener("DOMContentLoaded", initPage);


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
