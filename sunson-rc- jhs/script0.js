// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic Mock Data for News & Events
const newsData = [
    {
        title: "Annual Inter-school Quiz Competition 2026",
        description: "Our students showcased groundbreaking performance at this year's Annual Inter-school Quiz Competition at Abatey JHS in Yendi.",
        image: "images/class1.jpeg"
    },
    {
        title: "Championship Victory!",
        description: "The school boys football team (The Apex Warriors) ready to bring home the regional trophy after an intense semi-final clash with Bagabaga Demo. jss in Tamale.",
        image: "images/team2.jpg"
    },
    {
        title: "Admissions Now Open",
        description: "Enrollment for the 2026-2027 academic year is officially open. Limited slots available for new applicants.",
        image: "images/assemble.jpg"
    },
    {
        title: "School Infrastructure",
        description: "The problem of teachers commuting long distances to school has now become a thing of the past as the school receives an extra mordern 4-unit bedroom bangalore for teachers.",
        image: "images/bangalore.jpeg"
    },

    {
        title: "Tree Planting Exercise",
        description: "As part of this year's national day of tree planting, the school has planned to plant over 300 trees in and around the school",
        image: "images/tree2.jpg"
    },

     {
        title: "School Sanitation Day",
        description: "The school intends, as part of this month's sanitation day celebration, to extend our services in to the Sunson community such as areas like the market, chief's palace and the clinic",
        image: "images/sanitation.jpeg"
    },
];

// Populate News Section dynamically
const newsContainer = document.getElementById('newsContainer');

newsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('news-card');

    card.innerHTML = `
        <div class="news-img" style="background-image: url('${item.image}')"></div>
        <div class="news-body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    
    newsContainer.appendChild(card);
});

