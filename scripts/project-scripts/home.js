document.addEventListener("DOMContentLoaded", function() {
    /* Background Images */
    const images = [
        'background1.webp', 'background2.webp', 'background3.webp', 
        'background4.webp', 'background5.webp', 'background6.webp'
    ];
    let currentIndex = 0;

    function updateBackgroundImage(index) {
        const section = document.querySelector('.background-images');
        section.style.backgroundImage = `url('../images/project-images/${images[index]}')`;
    }

    updateBackgroundImage(currentIndex);

    document.querySelector('.left-button').addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        updateBackgroundImage(currentIndex);
    });

    document.querySelector('.right-button').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackgroundImage(currentIndex);
    });


    /* Services */
    const services = [
        { title: "Discounts", text: "We offer many discounts depending on the specific needs of the market.", image: "icon-1.png" },
        { title: "Warranty", text: "Our products come with a warranty of even 1 or 2 years.", image: "icon-2.png" },
        { title: "Home Delivery", text: "We offer deliveries throughout the country with shipping from 24 to 48 hours.", image: "icon-3.png" },
        { title: "Repair", text: "We sell products but also have repair equipment if needed for your own glasses.", image: "icon-4.png" },
        { title: "Eye Exam", text: "We have equipment to perform eye exams, this to help you choose what you need.", image: "icon-5.png" },
        { title: "Quality Products", text: "Each product has been supervised before being placed on the website, in order to provide a quality product.", image: "icon-6.png" },
        { title: "24/7 Service", text: "We offer 24/7 customer service.", image: "icon-7.png" },
        { title: "Qualified Staff", text: "All our staff are highly qualified to assist with any inquiry.", image: "icon-8.png" },
        { title: "Innovation", text: "We constantly seek the latest innovations in the optical market.", image: "icon-9.png" }
    ];

    const grid = document.querySelector('.services-grid');

    services.forEach(feature => {
        const box = document.createElement('div');
        box.className = 'feature-box';
        box.innerHTML = `
            <img src="../images/project-images/${feature.image}" alt="${feature.title}">
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
        `;
        grid.appendChild(box);
    });
});