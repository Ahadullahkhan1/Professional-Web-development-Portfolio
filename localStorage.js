let projects = [
    {
        title: "TIme Counter",
        description: "Introducing my Time Counter, a sleek JavaScript application that helps you track time with ease. Enjoy features like start, pause, and reset, all within a user-friendly interface.",
        image: "./images/Project-01.png",
        link: "https://time-counter11.netlify.app/",
        codeLink: "https://github.com/Ahadullahkhan1/Time-counter"
    },
    {
        title: "Electronic Website",
        description: "I have successfully developed an electronic website that showcases a diverse range of 50 products, all seamlessly integrated using a robust API to enhance user experience and functionality.",
        image: "./images/Project-02.png",
        link: "https://e-commerce-electric.netlify.app/",
        codeLink: "https://github.com/Ahadullahkhan1/Electronic-Ecommerce-Website"
    },
    {
        title: "Male Fashion Website",
        description: "The Male Fashion Website is a sleek and modern platform designed to showcase and sell fashionable men's clothing and accessories. Built with simplicity and user-friendliness in mind, this project highlights my skills in web design and development.",
        image: "./images/Project-03.png",
        link: "https://malefashion1.netlify.app/",
        codeLink: "https://github.com/Ahadullahkhan1/Male-Fashion"

    },
    {
        title: "Bitcoin Website",
        description: "Discover Bitcoin.org, your reliable resource for Bitcoin information and secure wallet options. Stay informed with expert insights and up-to-date news.",
        image: "./images/Project-04.png",
        link: "https://664d1f45f8af83462a3246e3--celebrated-bienenstitch-ad8799.netlify.app/",
        codeLink: "#"
    },
    {
        title: "Ecommerce Website",
        description: "Discover the latest fashion trends with our e-commerce site, offering stylish apparel and accessories. Enjoy exclusive deals and fast shipping on your favorite brands.",
        image: "./images/Project-05.png",
        link: "https://66490704d445910b5e95f1b5--willowy-jelly-588e63.netlify.app/",
        codeLink: "#"
    },
    {
        title: "Fitness Website",
        description: "A fitness website offering workout plans, health tips, and motivation. Built with responsive design for a smooth user experience.",
        image: "./images/Project-06.png",
        link: "https://celebrated-pony-bab419.netlify.app/",
        codeLink: "#"
    },
    {
        title: "Perfume Website",
        description: "Akimpression.com is a perfume website showcasing a variety of fragrances. The site is designed for an elegant and user-friendly shopping experience.",
        image: "./images/Project-07.png",
        link: "https://akimpression.com/",
        codeLink: "#"
    },
    {
        title: "Restaurant Website",
        description: "Delight in gourmet dishes and a warm atmosphere. Experience exceptional flavors and friendly service in every visit.",
        image: "./images/Project-08.png",
        link: "https://6648d685abb34af6c7c6e40b--resplendent-kelpie-ab47fb.netlify.app/",
        codeLink: "#"
    },
    {
        title: "Furniture Website",
        description: "The Furniture Website is a modern and elegant platform designed to showcase furniture products with style and functionality. This project demonstrates my ability to design and develop a visually appealing and responsive website, combining creativity with technical skills.",
        image: "./images/Project-09.png",
        link: "https://bespoke-caramel-3fcd24.netlify.app/",
        codeLink: "https://github.com/Ahadullahkhan1/Farniture"
    },
]


let container = document.getElementById("container");
projects.map((project) => {
    container.innerHTML += `
      <div class="project-card">
                <img src="${project.image}" alt="">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank"><button>view project</button></a>
                <a href="${project.codeLink}" target="_blank"><button>view code</button></a>
            </div>
            `
})
