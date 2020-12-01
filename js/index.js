const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let menuItems = document.querySelectorAll("nav a");
menuItems[0].textContent = siteContent["nav"]["nav-item-1"];
menuItems[1].textContent = siteContent["nav"]["nav-item-2"];
menuItems[2].textContent = siteContent["nav"]["nav-item-3"];
menuItems[3].textContent = siteContent["nav"]["nav-item-4"];
menuItems[4].textContent = siteContent["nav"]["nav-item-5"];
menuItems[5].textContent = siteContent["nav"]["nav-item-6"];
menuItems.forEach((element) => {
  element.style.color = "green";
});
// menuItems.append("Chocolate");
// menuItems.style.remove(hover);

let heading1 = document.querySelector("h1");
heading1.textContent = siteContent["cta"]["h1"];
heading1.innerHTML = "DOM <br> IS <br> AWESOME!";

let startButton = document.querySelector("button");
startButton.textContent = siteContent["cta"]["button"];

let topImage = document.querySelector("#cta-img");
topImage.src = siteContent["cta"]["img-src"];

let h4Content = document.querySelectorAll("h4");
h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[0].nextSibling.textContent =
  siteContent["main-content"]["features-content"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[1].nextSibling.textContent =
  siteContent["main-content"]["about-content"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[2].nextSibling.textContent =
  siteContent["main-content"]["services-content"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[3].nextSibling.textContent =
  siteContent["main-content"]["product-content"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];
h4Content[4].nextSibling.textContent =
  siteContent["main-content"]["vision-content"];
h4Content[5].textContent = siteContent["contact"]["contact-h4"];

let newFooter = document.querySelector("footer");
newFooter.textContent = "Copyright Great Idea! 2018";

let spacing = document.querySelector(".bottom-content");
spacing.style.paddingRight = "4rem";

let midImg = document.querySelector(".middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// let contactSection = document.querySelector(".contact h4");
// contactSection.textContent = siteContent["contact"]["contact-h4"];

let number = document.querySelectorAll(".contact p");
number[0].textContent = "123 Way 456 Street Somewhere, USA";
number[1].textContent = "1 (888) 888-8888";
number[2].textContent = "sales@greatidea.io";
