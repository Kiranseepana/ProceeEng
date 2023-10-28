/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kiran Seepana's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable and technical systems to create impact.",
  og: {
    title: "Kiran Seepana Portfolio",
    type: "website",
    url: "http://kiranseepana.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Kiran Seepana",
  logo_name: "KiranSeepana",
  nickname: "Kiran",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // resumeLink:
  //   "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Kiranseepana",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kiranseepana/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kiran-seepana-4611a25a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:kiran.seepana@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kiran0325s",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Process Engineer/Process Safety",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Capacity enhancement projects",
        "⚡ Perform Process safety related activties(Hazards evolution and HAZOP)",
        "⚡ New Technology implementation",
        "⚡ Project management activites",
        "⚡ Hands on experiens on Softwares(CRW4, Python,JAVA Programming, AutoCAD and ASPEN HYSYS) ",
        "⚡ Handling Cost improvement activties",
        "⚡ Evolute the Engergy saving options",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "openmoji:washing-machine",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // }
        // ,
      ],
    },
    ,
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //
  ],
};

const degrees = {
  degrees: [
    {
      title: "GMR Institute of Technology",
      subtitle: "B.Tech. in Chemical Engineering",
      logo_path: "",
      alt_name: "GMRIT Rajam",
      duration: "2010 - 2014",
      descriptions: ["⚡ I have studied Chemical engineering"],
      website_link: "https://gmrit.edu.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Lean Six sigma",
      subtitle: "LSSB",
      logo_path: "stanford_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      // alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I worked with reputed Pharmaceutical Industries like Dr. Reddy's laboratories Ltd, Divis laboratories, Cohance lifeScience ltd, and steel industry (Jindal Steel and Power Ltd). Total I have 8+years of experience ",
  // header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        experiences,
        [
          {
            title: "V4(DM)- Process Safety",
            company: "Dr. Reddy's Laboratories Ltd",
            company_url: "",
            logo_path: "legato_logo.png",
            duration: "Aug-2023 - PRESENT",
            location: "Pydibheemavaram, A.P",
            description:
              "work on IH ,process safety elements(MOC, PSI, PHA & PSSR) for new process or facilities.",
            color: "#0879bf",
          },
          {
            title: "Assistant Manager- TSD /OE",
            company: "Cohance Life Science Ltd",
            company_url: "",
            logo_path: "legato_logo.png",
            duration: "June 2020 - July-2023",
            location: "Vizag, A.P",
            description:
              "Worked on New products Tech tranfers, Energy saving projects and Capacity enhancement.",
            color: "#0879bf",
          },
          {
            title: "Assistant Manager -Operations",
            company: "Jindal Steel & Power Ltd",
            company_url: "https://www.jindalsteelpower.com",
            logo_path: "muffito_logo.png",
            duration: "Dec-2018 - OCt-2020",
            location: "Angul, Odisha",
            description:
              "I worked on crygenic Air separation plant opearation and maintenace.",
            color: "#9b1578",
          },
          {
            title: "Team Member",
            company: "Dr. Reddys laboratories Ltd.",
            company_url: "https://www.linkedin.com/company/freecopy/about/",
            logo_path: "freecopy_logo.png",
            duration: "Dec 2016 - Dec 2018",
            location: "Vizag, A.P",
            description: "Worked in sterile manufacting plant FTO9.",
            color: "#fc1f20",
          },
          {
            title: "Team Member",
            company: "Divis laboratories Ltd.",
            company_url: "",
            logo_path: "freecopy_logo.png",
            duration: "Sept 2014 - Nov 2016",
            location: "Vizag, A.P",
            description: "Worked in API manufacting plant.",
            color: "#fc1f20",
          },
        ],
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I worked on various Energy conservation projects, Cost reduction in products, improving recoveries, and time cycle reduction in various unit opeations and process like Drying, Distillation, Layer Separations.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Waste Management Paper",
      createdAt: "2018-12-26",
      description: "Paper Written on waste handling ",
      url: "",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Atchutapuram, Visakhapatnam, Andhrapradesh - 531011",
    avatar_image_path: "address_image.svg",
    location_map_link: " ",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8686753754",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
