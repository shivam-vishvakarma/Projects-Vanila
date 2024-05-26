const data = {
  "Major Projects": [
    {
      imgSrc: "/portfolio.png",
      title: "My Portfolio",
      description:
        "This is my portfolio website where I showcase my projects and skills",
      skills: "HTML, CSS, Tailwind CSS, JavaScript, React.js, Three.js",
      siteLink: "https://shivamvishwakarma.me",
    },
  ],
  "Simple Full Websites": [
    {
      imgSrc: "/newsui.png",
      title: "News Website UI",
      description:
        "This project is a sample website ui of a news website called newsy",
      skills: "HTML, CSS, JavaScript",
      siteLink: "https://newsui.shivamvishwakarma.me",
    },
    {
      imgSrc: "/music_school.png",
      title: "Music School Website",
      description:
        "This is website for a music school with some basic backend functionality and Animated UI",
      skills: "HTML, CSS, Tailwind CSS, JavaScript, Next.js, MongoDB",
      siteLink: "https://music-school.shivamvishwakarma.me",
    },
    {
      imgSrc: "/ntflix-info.png",
      title: "Netflix Info",
      description:
        "This is a website to get information about movies and tv shows available on netflix with the help of an api",
      skills: "HTML, CSS, Tailwind CSS, JavaScript, Next.js",
      siteLink: "https://netflix-info.shivamvishwakarma.me",
    },
  ],
  "Simple Web Pages": [
    {
      imgSrc: "/currency.png",
      title: "Currency Converter",
      description:
        "This is a simple currency converter website with api integration",
      skills: "HTML, CSS, Tailwind CSS, JavaScript, React.js",
      siteLink: "https://currency.shivamvishwakarma.me",
    },
  ],
};

const main = document.querySelector("main");
const projectContainer = document.querySelector("#main");
const card = document.querySelector("#card");
card.remove();
projectContainer.remove();

Object.keys(data).forEach((element) => {
  let newProjectContainer = projectContainer.cloneNode(true);
  newProjectContainer.querySelector("h1").innerText = element;
  data[element].forEach((element) => {
    let newCard = card.cloneNode(true);
    newCard.querySelector("img").src = element.imgSrc;
    newCard.querySelector("h2").innerText = element.title;
    newCard.querySelector("p").innerText = element.description;
    newCard.querySelector("span").innerText = element.skills;
    newCard.querySelector("a").href = element.siteLink;
    newProjectContainer.querySelector("section").appendChild(newCard);
  });
  main.appendChild(newProjectContainer);
});
