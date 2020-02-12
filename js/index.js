const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Keys
const navKeys = Object.keys(siteContent["nav"]);
let navLinks = document.querySelectorAll('nav a');
for(let i=0; i<navKeys.length-1; i++) {
    for(let j=i; j<i+1; j++) {
        navLinks[i].classList.add(navKeys[i]);
        //navLinks[i].classList.add('nav-item');
        navLinks[i].append(siteContent["nav"][navKeys[i]]);
    }
}

// add new element to navigation
const nav = document.querySelector('nav');
const link1 = document.createElement('a');
const link2 = document.createElement('a');
link1.innerHTML = "Login";   
nav.appendChild(link1);  
link2.innerHTML = "Logout"; 
nav.appendChild(link2);          

const navLinksStyle = document.querySelectorAll('nav a');

navLinksStyle.forEach((item) => {
    item.style.color = "green";
});

// CTA
const ctaH1 = document.querySelector('.cta h1');
ctaH1.append(siteContent["cta"]["h1"]);

const ctaButton = document.querySelector('.cta button');
ctaButton.append(siteContent["cta"]["button"]);

const ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
const mainImage = document.querySelector('.main-content img');
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contentKeys = Object.keys(siteContent["main-content"]);
const textContent = document.querySelectorAll('.main-content .text-content');

textContent[0].querySelector('h4').append(siteContent['main-content'][contentKeys[0]]);
textContent[0].querySelector('p').append(siteContent['main-content'][contentKeys[1]]);

textContent[1].querySelector('h4').append(siteContent['main-content'][contentKeys[2]]);
textContent[1].querySelector('p').append(siteContent['main-content'][contentKeys[3]]);

textContent[2].querySelector('h4').append(siteContent['main-content'][contentKeys[5]]);
textContent[2].querySelector('p').append(siteContent['main-content'][contentKeys[6]]);

textContent[3].querySelector('h4').append(siteContent['main-content'][contentKeys[7]]);
textContent[3].querySelector('p').append(siteContent['main-content'][contentKeys[8]]);

textContent[4].querySelector('h4').append(siteContent['main-content'][contentKeys[9]]);
textContent[4].querySelector('p').append(siteContent['main-content'][contentKeys[10]]);

// Contact
const contactH4 = document.querySelector('.contact h4'); 
contactH4.append(siteContent["contact"]["contact-h4"]);

const contactKeys = Object.keys(siteContent["contact"]);
const contactP = document.querySelectorAll('.contact p');
for(let i=0; i<contactP.length; i++) {
    for(let j=i+1; j<i+2; j++) {
        contactP[i].append(siteContent["contact"][contactKeys[j]]);
    }
}

// Footer
const footerP = document.querySelector('footer p');
footerP.append(siteContent["footer"]["copyright"]);