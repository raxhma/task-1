
// Define menu items
const menuItems = [
    {
        name: "Seafood ramen",
        description: "Mouthwatering ramen made with the finest ingredients, topped with fresh vegetables and seafood cooked with our special sauce."
    },
    {
        name: "Italian Pesto Pasta",
        description: "Authentic pasta served with a rich and savory pesto sauce, garnished with parmesan cheese and fresh basil leaves."
    },
    {
        name: "Gimbap Platter",
        description: "An assortment of Gimbap with a side of kimchi of choice, served with pickled ginger and wasabi too."
    },
    {
        name: "Margherita Pizza",
        description: "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves on a thin crust."
    },
    {
        name: "Icecream Sundae",
        description: "Creamy ice cream with a delightful special blend of chocolate, vanilla, and cookies."
    },
    {
        name: "California Roll",
        description: "A special sushi roll with eel, avocado, and cucumber, topped with eel sauce and tobiko."
    },
    {
        name: "Caesar Salad",
        description: "Crunchy romaine lettuce, croutons, and parmesan cheese, tossed in Caesar dressing."
    },
    {
        name: "Strawberry Pancakes",
        description: "Fluffy pancakes filled with fresh starwberries and drizzled with pure honey."
    },
    {
        name: "Chicken Noodle Soup",
        description: "Homemade chicken noodle soup with tender chicken, vegetables, and noodles."
    },
    {
        name: "Dumplings",
        description: "A plate of delicious dumplings with your choice of fillings, served with soy sauce."
    },
    {
        name: "Chicken Curry",
        description: "Spicy and flavorful chicken curry served with rice and naan bread."
    },
    {
        name: "Herbal tea",
        description: "A delightful herbal tea with your choice of flavors to relax you and rejuvenate you."
    },
];

// Function to display menu items
function displayMenu() {
    const menu = document.getElementById('menuItems');
    menu.innerHTML = '';
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('article');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="food${index + 1}.jpg" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;
        menu.appendChild(menuItem);
    });
}

// Initialize the menu
displayMenu();




window.onscroll = function() {changeNavbarStyle()};

function changeNavbarStyle() {
    const navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
}


