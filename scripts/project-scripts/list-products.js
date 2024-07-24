document.addEventListener('DOMContentLoaded', function() {
    printCards();
});

function printCards() {
    const glasses = [
        { name: "Classic Round", price: "$50", image: "glass1.webp" },
        { name: "Modern Square", price: "$65", image: "glass2.webp" },
        { name: "Aviator", price: "$75", image: "glass3.webp" },
        { name: "Retro", price: "$55", image: "glass4.webp" },
        { name: "Minimalist", price: "$45", image: "glass5.webp" },
        { name: "Bold Frame", price: "$80", image: "glass6.webp" },
        { name: "Sport", price: "$70", image: "glass7.webp" },
        { name: "Kids", price: "$40", image: "glass8.webp" },
        { name: "Kids", price: "$80", image: "glass9.webp" }
    ];

    const grid = document.getElementById('cards');

    glasses.forEach(glass => {
        const box = document.createElement('div');
        box.className = 'card';
        box.innerHTML = `
            <h3>${glass.name}</h3>
            <img src="../images/project-images/glasses/${glass.image}" alt="${glass.name} loading='lazy'">
            <h4>${glass.price}</h4>
            <button class='card-button'>Add to Cart</button>
        `;
        grid.appendChild(box);
    });
}

