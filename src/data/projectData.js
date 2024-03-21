import pnoyGenius_thumb from "../assets/img/pnoyGenius/pnoyGenius_thumb.png";
import pnoyGenius_img1 from "../assets/img/pnoyGenius/pnoyGenius_mockup_1.png";
import pnoyGenius_img2 from "../assets/img/pnoyGenius/pnoyGenius_mockup_2.jpeg";
import pnoyGenius_img3 from "../assets/img/pnoyGenius/pnoyGenius_mockup_3.png";

import designSpot_thumb from "../assets/img/designSpot/designSpot_thumb.png";
import designSpot_img1 from "../assets/img/designSpot/designSpot_img1.jpeg";
import designSpot_img2 from "../assets/img/designSpot/designSpot_img2.png";
import designSpot_img3 from "../assets/img/designSpot/designSpot_img3.png";
import designSpot_img4 from "../assets/img/designSpot/designSpot_img4.png";

import harmony_thumb from "../assets/img/harmony/harmony_thumb.png";
import harmony_img1 from "../assets/img/harmony/harmony_img1.png";
import harmony_img2 from "../assets/img/harmony/harmony_img2.png";
import harmony_img3 from "../assets/img/harmony/harmony_img3.png";
import harmony_img4 from "../assets/img/harmony/harmony_img4.png";
import harmony_img5 from "../assets/img/harmony/harmony_img5.png";
import harmony_img6 from "../assets/img/harmony/harmony_img6.png";
import harmony_img7 from "../assets/img/harmony/harmony_img7.png";
import harmony_img8 from "../assets/img/harmony/harmony_img8.png";
import harmony_img9 from "../assets/img/harmony/harmony_img9.png";
import harmony_img10 from "../assets/img/harmony/harmony_img10.png";
import harmony_img11 from "../assets/img/harmony/harmony_img11.png";
import harmony_img12 from "../assets/img/harmony/harmony_img12.png";
import harmony_img13 from "../assets/img/harmony/harmony_img13.png";
import harmony_img14 from "../assets/img/harmony/harmony_img14.png";
import harmony_img15 from "../assets/img/harmony/harmony_img15.png";
import harmony_img16 from "../assets/img/harmony/harmony_img16.png";
import harmony_img17 from "../assets/img/harmony/harmony_img17.png";
import harmony_img18 from "../assets/img/harmony/harmony_img18.png";

import sp_thumb from "../assets/img/skillpulse/sp_thumb.png";
import sp1 from "../assets/img/skillpulse/sp1.png";
import sp2 from "../assets/img/skillpulse/sp2.png";
import sp3 from "../assets/img/skillpulse/sp3.png";
import sp4 from "../assets/img/skillpulse/sp4.png";
import sp5 from "../assets/img/skillpulse/sp5.png";
import sp6 from "../assets/img/skillpulse/sp6.png";
import sp7 from "../assets/img/skillpulse/sp7.png";
import sp8 from "../assets/img/skillpulse/sp8.png";
import sp9 from "../assets/img/skillpulse/sp9.png";
import sp10 from "../assets/img/skillpulse/sp10.png";
import sp11 from "../assets/img/skillpulse/sp11.png";
import sp12 from "../assets/img/skillpulse/sp12.png";
import sp13 from "../assets/img/skillpulse/sp13.png";
import sp14 from "../assets/img/skillpulse/sp14.png";
import sp15 from "../assets/img/skillpulse/sp15.png";

import ff_thumb from "../assets/img/filmflux/ff_thumb.png";
import ff1 from "../assets/img/filmflux/ff1.png";
import ff2 from "../assets/img/filmflux/ff2.png";
import ff3 from "../assets/img/filmflux/ff3.png";
import ff4 from "../assets/img/filmflux/ff4.png";
import ff5 from "../assets/img/filmflux/ff5.png";

const defaultTechs = [
  {
    id: 0,
    name: "ReactJs",
    desc: "ReactJS is a popular JavaScript library used for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when data changes.",
  },
  {
    id: 1,
    name: "React-Router-Dom",
    desc: "React Router DOM is a package that allows developers to handle client-side routing in a React application. It provides a way to navigate between different components and pages without requiring a full page reload.",
  },
  {
    id: 2,
    name: "React-Toastify",
    desc: "React-Toastify is a notification library for React applications that allows developers to easily display notifications and alerts to users. It provides customizable options for different types of notifications and supports both web and mobile applications.",
  },
];

const projects = [
  {
    id: 0,
    name: "PnoyGenius",
    thumbnail: pnoyGenius_thumb,
    pictures: [
      pnoyGenius_thumb,
      pnoyGenius_img1,
      pnoyGenius_img2,
      pnoyGenius_img3,
    ],
    technologies: [...defaultTechs],
    shortDesc:
      "PnoyGenius is a two-player React-based word guessing game where one player creates a secret word and the other tries to guess it by providing letters. It provides a fun and challenging way for two players to compete against each other in a word game.",
    description:
      "PnoyGenius is a two-player guessing game where one player gives a word or phrase to the other player to guess, and they set a timer. The player who is guessing has to correctly guess the word or phrase before the timer runs out. The game keeps track of the score, and the players take turns being the one who gives the word or phrase to guess.",
    features: [
      "Two-player guessing game",
      "Ability to give a word or phrase to guess",
      "Ability to set a timer for each turn",
    ],
    links: [
      {
        id: 0,
        name: "GitHub Repository",
        link: "https://github.com/NighTzy-Godz/PnoyGenius-V2",
      },
      {
        id: 1,
        name: "Demo Website",
        link: "https://pnoygenius-v2.vercel.app",
      },
    ],
    duration: "5 Days",
  },

  {
    id: 1,
    name: "DesignSpot",
    thumbnail: designSpot_thumb,
    pictures: [
      designSpot_thumb,
      designSpot_img1,
      designSpot_img2,
      designSpot_img3,
      designSpot_img4,
    ],
    technologies: [
      ...defaultTechs,
      {
        id: 3,
        name: "Lodash",
        desc: "Lodash is a popular JavaScript utility library that provides a collection of helper functions for tasks such as iterating arrays, manipulating objects, and handling strings. It is widely used in web development and can help simplify code and improve performance. I Personally used it on creating dynamic Tables and Pagination",
      },
    ],
    shortDesc:
      "DesignSpot is a React-based static web application that offers a range of home furnitures for sale. With a sleek and modern design, the app provides an easy-to-use interface for users to browse and purchase items from a selection of curated furniture collections.",
    description:
      "DesignSpot is a user-friendly and efficient ecommerce store that offers a wide variety of furniture items for homes. Its search, filter, and browse features make it easy for users to find the products they need, while its cart and checkout functionality streamline the purchase process. Built with React and a variety of other tools and technologies, DesignSpot is a robust and scalable platform that can grow and evolve over time.",
    features: [
      "Product filter: users can filter products by category, price range, and other criteria to narrow down their search results.",
      "Search functionality: users can search for specific products using a search bar.",
      "Product card: a product card displays the details of each product, including its name, price, image, and description.",
      "See more page: a dedicated page for each product that provides more details about the item, such as its dimensions, materials, and shipping information.",
      "Add to cart: users can add products to their cart directly from the product card or the see more page.",
      "Cart: users can view and manage their cart, adjust quantities, remove items, and proceed to checkout.",
      "Checkout: users can enter their billing and shipping information, review their order, and complete their purchase.",
    ],
    links: [
      {
        id: 0,
        name: "GitHub Repository",
        link: "https://github.com/NighTzy-Godz/DesignSpot",
      },
      {
        id: 1,
        name: "Demo Website",
        link: "https://designspot-aser.vercel.app",
        disabled: true,
      },
    ],
    duration: "11 Days",
  },
  {
    id: 3,
    name: "SkillPulse",
    thumbnail: sp_thumb,
    pictures: [
      sp_thumb,
      sp1,
      sp2,
      sp3,
      sp4,
      sp5,
      sp6,
      sp7,
      sp8,
      sp9,
      sp10,
      sp11,
      sp12,
      sp13,
      sp14,
      sp15,
    ],
    technologies: [
      ...defaultTechs,
      {
        id: 3,
        name: "Lodash",
        desc: "Lodash is a popular JavaScript utility library that provides a collection of helper functions for tasks such as iterating arrays, manipulating objects, and handling strings. It is widely used in web development and can help simplify code and improve performance. I Personally used it on creating dynamic Tables and Pagination",
      },
      {
        id: 4,
        name: "Axios",
        desc: "Axios is a popular JavaScript library used for making HTTP requests from web browsers and Node.js applications. It provides a simple and easy-to-use API for sending and receiving data with support for promises and interceptors.",
      },
      {
        id: 5,
        name: "Jwt-Decode",
        desc: "Jwt-Decode is a JavaScript library used for decoding JSON Web Tokens (JWTs) in web applications. It allows developers to extract the payload data from JWTs without requiring the secret key used for encryption.",
      },
      {
        id: 6,
        name: "DotEnv",
        desc: "dotenv is a Node.js module that loads environment variables from a .env file into the process.env object, making them available to use in the application. It provides a simple and convenient way to manage environment-specific configuration data without hardcoding values in the code.",
      },
      {
        id: 7,
        name: "NodeJs",
        desc: "Node.js is a popular open-source JavaScript runtime built on the Chrome V8 engine that allows developers to run JavaScript code outside of a web browser. It provides a platform for building scalable, server-side applications and is commonly used for building web servers, APIs, and command-line tools.",
      },
      {
        id: 8,
        name: "ExpressJs",
        desc: "Express.js is a popular web application framework for Node.js that provides a set of robust features for building web applications and APIs. It simplifies the process of creating HTTP servers and handling routing, middleware, and request/response handling.",
      },
      {
        id: 9,
        name: "Bcrypt",
        desc: "Bcrypt is a password-hashing function used for securely storing passwords in a database. It provides a strong defense against password cracking and supports multiple rounds of hashing to slow down brute-force attacks.",
      },
      {
        id: 10,
        name: "Mongoose",
        desc: "Mongoose is a popular Object Data Modeling (ODM) library for Node.js and MongoDB that provides a simple and intuitive way to interact with MongoDB databases. It provides a schema-based solution to model application data and supports features such as validation, query building, and middleware.",
      },
      {
        id: 11,
        name: "MongoDB",
        desc: "MongoDB is a popular NoSQL document-oriented database used for storing and retrieving large volumes of unstructured data. It provides a flexible schema that allows for easy data modeling and supports features such as automatic sharding, high availability, and horizontal scaling.",
      },
      {
        id: 12,
        name: "JOI",
        desc: "Joi is a JavaScript library used for validating data in JavaScript objects. It provides a simple and declarative API for defining validation rules and supports a wide range of data types and formats.",
      },
      {
        id: 13,
        name: "JsonWebToken",
        desc: "JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications and APIs and provides a standardized way to encode and transmit data securely between parties.",
      },
      {
        id: 14,
        name: "Cloudinary",
        desc: "Cloudinary is a cloud-based media management platform that provides a wide range of tools for managing, optimizing, and delivering images and videos for web and mobile applications. It offers features such as image and video manipulation and automated image optimization. ",
      },
      {
        id: 15,
        name: "Redux",
        desc: "Redux is a JavaScript state management library for React applications. It centralizes state management, ensuring predictable behavior and simplifying data flow through reducers.",
      },
      {
        id: 16,
        name: "Typescript",
        desc: "TypeScript is a superset of JavaScript that adds static typing and other advanced features for enhanced code quality and maintainability.",
      },
      {
        id: 17,
        name: "TailwindCSS",
        desc: "Tailwind CSS is a utility-first CSS framework that simplifies web development with pre-built utility classes for rapid styling.",
      },
    ],
    shortDesc:
      "Skillpulse is a Full Stack (MERN) comprehensive job searching platform, similar to LinkedIn, designed to streamline the job search process for both job seekers and employers. Users can browse job listings, apply for positions, and manage their applications easily. Additionally, Skillpulse offers a strong authentication features to ensure secure access for users.",

    description:
      "Skillpulse emerges as a pinnacle of efficiency and effectiveness in the realm of job searching platforms. With its robust Full Stack (MERN) architecture reminiscent of industry giants like LinkedIn, it caters to the needs of job seekers and employers alike, offering intuitive tools for seamless job exploration, application management, and talent acquisition. By prioritizing user experience, security, and innovation, Skillpulse stands as a beacon of hope and opportunity in the ever-evolving landscape of career advancement.",
    features: [
      "Users can search for jobs by title, company, or keyword.",
      "Users can apply for jobs directly through the platform.",
      "Users can save jobs for later viewing",
      "Employers can post job listings with detailed descriptions",
      "Employers can manage job listings, including editing and deleting them.",
      "Users can track the status of their job applications.",

      "Users can receive notifications for new job opportunities matching their preferences.",
      "Employers can review and manage applications received for their job listings.",
      "Users can update their profile information and resume.",
      "Users can communicate with employers through messaging features.",
      "Employers can search for candidates based on specific criteria.",

      "Employers can schedule interviews with candidates directly through the platform.",
    ],
    links: [
      {
        id: 0,
        name: "GitHub Repository - Client Side",
        link: "https://github.com/NighTzy-Godz/SkillPulse/tree/master/client",
      },
      {
        id: 1,
        name: "GitHub Repository - Server Side",
        link: "https://github.com/NighTzy-Godz/SkillPulse/tree/master/server",
      },
      {
        id: 2,
        name: "Demo Website",
        link: "https://skillpulse.vercel.app",
      },
    ],
    duration: "8 1/2 Weeks",
  },
  {
    id: 2,
    name: "Harmony",
    thumbnail: harmony_thumb,
    pictures: [
      harmony_thumb,
      harmony_img1,
      harmony_img2,
      harmony_img3,
      harmony_img4,
      harmony_img5,
      harmony_img6,
      harmony_img7,
      harmony_img8,
      harmony_img9,
      harmony_img10,
      harmony_img11,
      harmony_img12,
      harmony_img13,
      harmony_img14,
      harmony_img15,
      harmony_img16,
      harmony_img17,
      harmony_img18,
    ],
    technologies: [
      ...defaultTechs,
      {
        id: 3,
        name: "Lodash",
        desc: "Lodash is a popular JavaScript utility library that provides a collection of helper functions for tasks such as iterating arrays, manipulating objects, and handling strings. It is widely used in web development and can help simplify code and improve performance. I Personally used it on creating dynamic Tables and Pagination",
      },
      {
        id: 4,
        name: "Axios",
        desc: "Axios is a popular JavaScript library used for making HTTP requests from web browsers and Node.js applications. It provides a simple and easy-to-use API for sending and receiving data with support for promises and interceptors.",
      },
      {
        id: 5,
        name: "Jwt-Decode",
        desc: "Jwt-Decode is a JavaScript library used for decoding JSON Web Tokens (JWTs) in web applications. It allows developers to extract the payload data from JWTs without requiring the secret key used for encryption.",
      },
      {
        id: 6,
        name: "DotEnv",
        desc: "dotenv is a Node.js module that loads environment variables from a .env file into the process.env object, making them available to use in the application. It provides a simple and convenient way to manage environment-specific configuration data without hardcoding values in the code.",
      },
      {
        id: 7,
        name: "NodeJs",
        desc: "Node.js is a popular open-source JavaScript runtime built on the Chrome V8 engine that allows developers to run JavaScript code outside of a web browser. It provides a platform for building scalable, server-side applications and is commonly used for building web servers, APIs, and command-line tools.",
      },
      {
        id: 8,
        name: "ExpressJs",
        desc: "Express.js is a popular web application framework for Node.js that provides a set of robust features for building web applications and APIs. It simplifies the process of creating HTTP servers and handling routing, middleware, and request/response handling.",
      },
      {
        id: 9,
        name: "Bcrypt",
        desc: "Bcrypt is a password-hashing function used for securely storing passwords in a database. It provides a strong defense against password cracking and supports multiple rounds of hashing to slow down brute-force attacks.",
      },
      {
        id: 10,
        name: "Mongoose",
        desc: "Mongoose is a popular Object Data Modeling (ODM) library for Node.js and MongoDB that provides a simple and intuitive way to interact with MongoDB databases. It provides a schema-based solution to model application data and supports features such as validation, query building, and middleware.",
      },
      {
        id: 11,
        name: "MongoDB",
        desc: "MongoDB is a popular NoSQL document-oriented database used for storing and retrieving large volumes of unstructured data. It provides a flexible schema that allows for easy data modeling and supports features such as automatic sharding, high availability, and horizontal scaling.",
      },
      {
        id: 12,
        name: "JOI",
        desc: "Joi is a JavaScript library used for validating data in JavaScript objects. It provides a simple and declarative API for defining validation rules and supports a wide range of data types and formats.",
      },
      {
        id: 13,
        name: "JsonWebToken",
        desc: "JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications and APIs and provides a standardized way to encode and transmit data securely between parties.",
      },
      {
        id: 14,
        name: "Cloudinary",
        desc: "Cloudinary is a cloud-based media management platform that provides a wide range of tools for managing, optimizing, and delivering images and videos for web and mobile applications. It offers features such as image and video manipulation and automated image optimization. ",
      },
    ],
    shortDesc:
      "Harmony is a MERN stack hospital management system built using React that helps medical facilities manage patient data, appointments, and medical records. The app provides a user-friendly interface for staff to efficiently manage tasks and streamline workflows, while ensuring patient confidentiality and data security.",
    description:
      "Harmony is a hospital management system built using modern web technologies such as React as its Front-End and NodeJs and Express with MongoDB as its backend. The app has three different roles: patient, doctor, and admin, and provides each role with specific access and functionality. The patient portal allows patients to manage their appointments and medical records, while the doctor portal enables doctors to view patient medical history and manage their schedules. The admin portal provides powerful tools to manage hospital operations. The Harmony hospital management system is a comprehensive solution for managing hospital operations and improving patient satisfaction.",
    features: [
      "Patient can search for doctors by name or specialty.",
      "Patient can create an Appointment.",
      "Patient can cancel an Appointment.",
      "Patient can Mark as Done on their Prescription.",
      "Patient can delete a Prescription.",
      "Patient can view and update personal information",

      "Doctor can decide whether to accept or decline an appointment.",
      "Doctor can create a prescription (If a Doctor accepted an appointment).",
      "Doctor can delete the recent Prescription.",
      "Doctor cannot Access the Dashboard if they are not accepted.",
      "Doctor can view and update personal information",

      "Admin can see all the Appointments, Patients and Doctors.",
      "Admin can accept a Doctor for Requests.",
      "Admin can manage all the users or ban them.",
      "Admin can view and update personal information",
    ],
    links: [
      {
        id: 0,
        name: "GitHub Repository - Client Side",
        link: "https://github.com/NighTzy-Godz/harmony-frontend",
      },
      {
        id: 1,
        name: "GitHub Repository - Server Side",
        link: "https://github.com/NighTzy-Godz/harmony-backend",
      },
      {
        id: 2,
        name: "Demo Website",
        link: "https://harmony-frontend-aser.vercel.app (Not Available)",
        disabled: true,
      },
    ],
    duration: "4 1/2 Weeks or 32 Days",
  },

  {
    id: 5,
    name: "FilmFlux",
    thumbnail: ff_thumb,
    pictures: [ff_thumb, ff1, ff2, ff3, ff4, ff5],
    technologies: [
      ...defaultTechs,
      {
        id: 15,
        name: "Redux",
        desc: "Redux is a JavaScript state management library for React applications. It centralizes state management, ensuring predictable behavior and simplifying data flow through reducers.",
      },
    ],

    shortDesc:
      "Filmflux is a React Redux project that integrates with the TMDB API, providing users with a seamless movie browsing experience. With its intuitive interface, users can easily search for their favorite movies within the app and powered by Redux for state management",
    description:
      "Filmflux is a captivating React Redux application that bridges users to the vast landscape of cinema via the TMDB API. With its sleek interface, Filmflux enables users to not just browse movies but also receive tailor-made recommendations, drawing from their unique tastes and preferences. Delving deeper, Filmflux offers valuable insights into the status, budget, and cast of each film, enriching the movie exploration journey for enthusiasts seeking both entertainment and knowledge.",
    features: [
      "Users can search for movies by title, genre, or keyword.",
      "Users can explore detailed information about each movie, including its synopsis, release date, and ratings.",
      "Users can view the status, budget, and cast details of each movie to gain deeper insights into its production.",
      "Users can easily switch between different devices, with Filmflux offering a responsive and cross-platform experience.",
      "Users can search for people involved in movie production, including actors, directors, and producers.",
      "Users can navigate easily through the application with intuitive and user-friendly navigation.",
    ],
    links: [
      {
        id: 0,
        name: "GitHub Repository",
        link: "https://github.com/NighTzy-Godz/FilmFlux",
      },
      {
        id: 1,
        name: "Demo Website",
        link: "https://film-flux.vercel.app",
      },
    ],
    duration: "17 Days",
  },
];

export default projects;
