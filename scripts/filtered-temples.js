document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const title = document.getElementById("title");
  const x = document.getElementById("x-symbol");
  const hamburger = document.getElementById("hamburger-symbol");
  const icon = document.getElementById("icon");


  icon.addEventListener("click", function (event) {
    event.preventDefault();
    if (nav.style.display == "none") {
      nav.style.display = "flex";
      title.style.display = "none";
      x.style.display = "block";
      hamburger.style.display = "none";
    } else {
      nav.style.display = "none";
      title.style.display = "block";
      x.style.display = "none";
      hamburger.style.display = "block";
    }
  });

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Add more temple objects here...
    {
      templeName: "San José Costa Rica",
      location: "La Ribera Belén, Heredia",
      dedicated: "1999, April, 24",
      area: 10700,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/087-San-Jos%C3%A9-Costa-Rica-Temple.jpg",
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas 1062-A, Dependencias Federales",
      dedicated: "1999, January, 10",
      area: 15332,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg",
    },
    {
      templeName: "Nauvoo Illinois",
      location: "50 N Wells St Nauvoo, Illinois",
      dedicated: "1999, October, 24",
      area: 54000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-31724-main.jpg",
    },
  ];
  showTemples(temples);

  //Menú
  const oldTemples = document.getElementById("old");
  const newTemples = document.getElementById("new");
  const largeTemples = document.getElementById("large");
  const smallTemples = document.getElementById("small");
  const homeTemples = document.getElementById("home");

  
  oldTemples.addEventListener("click", () => {
    document.querySelector('main h2').textContent =  "Old Temples";
    showTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900));
  });

  newTemples.addEventListener("click", () => {
    document.querySelector('main h2').textContent =  "New Temples";
    showTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000));
  });

  largeTemples.addEventListener("click", () => {
    document.querySelector('main h2').textContent =  "Large Temples";
    showTemples(temples.filter(temple => temple.area > 90000));
  });

  smallTemples.addEventListener("click", () => {
    document.querySelector('main h2').textContent =  "Small Temples";
    showTemples(temples.filter(temple => temple.area < 10000));
  });

  homeTemples.addEventListener("click", () => {
    document.querySelector('main h2').textContent =  "Home";
    showTemples(temples);
  });
});

// W04 Assignment: Picture Album Enhancement


const showTemples = (selectedTemples) => {
  const figuresDiv = document.querySelector(".figures");

  figuresDiv.innerHTML = "";

  selectedTemples.forEach((temple) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    img.loading = "lazy";
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = temple.templeName;
    const location = document.createElement("p");
    location.innerHTML = "<strong>Location: </strong>" + temple.location;
    const dedication = document.createElement("p");
    dedication.innerHTML = "<strong>Dedicated: </strong>" + temple.dedicated;
    const area = document.createElement("p");
    area.innerHTML = "<strong>Size: </strong>" + temple.area + " sq ft";



    figure.appendChild(figcaption);
    figure.appendChild(location);
    figure.appendChild(dedication);
    figure.appendChild(area);
    figure.appendChild(img);
    
    figuresDiv.appendChild(figure);
  });
};


