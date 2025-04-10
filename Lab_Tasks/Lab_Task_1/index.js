

    const shoes = [
        { name: "Jorge II Tumbled Nubuck Slingback Mules", price: "$109.99", img: "images/31737439.80.jpg" },
        { name: "Women's Dunnet Flower Buttersoft Sandals", price: "$150.00", img: "images/31817243.80.jpg" },
        { name: "Women's Voss II Athena Strap Platform Sandals", price: "$83.99", img: "images/31880201.80.jpg" },
        { name: "Zebzag Casual Slingback Platform Mules", price: "$130.00", img: "images/31937300.80.jpg" },
        { name: "Women's Bethan Polished Platform Shoes", price: "$99.99", img: "images/31937500.80.jpg" },
        { name: "Dunnet Flower Buttersoft leather sandals", price: "$109.99", img: "images/31937650.80.jpg" },
        { name: "Zebzag Suede Casual Slingback Platform Mules", price: "$150.00", img: "images/40529200.80.jpg" },
        { name: "Jorge II Tumbled Nubuck Slingback Mules", price: "$109.99", img: "images/31737439.80.jpg" },
        { name: "Women's Dunnet Flower Buttersoft Sandals", price: "$150.00", img: "images/31817243.80.jpg" },
        { name: "Women's Voss II Athena Strap Platform Sandals", price: "$83.99", img: "images/31880201.80.jpg" },
        { name: "Zebzag Casual Slingback Platform Mules", price: "$130.00", img: "images/31937300.80.jpg" },
        { name: "Women's Bethan Polished Platform Shoes", price: "$99.99", img: "images/31937500.80.jpg" },
        { name: "Dunnet Flower Buttersoft leather sandals", price: "$109.99", img: "images/31937650.80.jpg" },
        { name: "Zebzag Suede Casual Slingback Platform Mules", price: "$150.00", img: "images/40529200.80.jpg" }
    ];

    let currentIndex = 0;
    const itemsPerPage = 3; // Adjust based on your layout

    function renderSlides() {
        const carousel = document.getElementById("carousel");
        carousel.innerHTML = "";

        shoes.forEach(shoe => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            slide.innerHTML = `
                <img src="${shoe.img}" alt="${shoe.name}">
                <p><strong>${shoe.name}</strong></p>
                <p>${shoe.price}</p>
                <button class="add-to-cart" onclick="addToCart('${shoe.name}', '${shoe.price}', '${shoe.img}')">Order Now</button>
            `;
            carousel.appendChild(slide);
        });

        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        const slideWidth = document.querySelector(".slide").offsetWidth + 10; // Adding margin
        document.getElementById("carousel").style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        if (currentIndex < shoes.length - itemsPerPage) {
            currentIndex++;
            updateCarouselPosition();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    }

    function addToCart(name, price, img) {
        // Store item details in localStorage to access in customer_detail.html
        localStorage.setItem("selectedShoe", JSON.stringify({ name, price, img }));
        window.location.href = "details.html";
    }

    renderSlides();
