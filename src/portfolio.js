// Website related settings
const settings = {
  isSplash: false,
};

//Home Page
const greeting = {
  title: "Hi Folks 👋.",
  title2: "Neel",
  logo_name: "Neel Deshmukh",
  nickname: "",
  full_name: "Neel Deshmukh",
  subTitle: "I am a Full Stack Developer. Curently doing Backend & MLOps.",
  resumeLink: "#",
  mail: "mailto:deshmukhneel31@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/neel-desh",
  linkedin: "https://www.linkedin.com/in/neeldeshmukh/",
  gmail: "deshmukhneel31@gmail.com",
  gitlab: "#",
  facebook: "https://www.facebook.com/Neeldeshmukhpatil",
  twitter: "https://twitter.com/neeldeshmukhp",
  instagram: "https://www.instagram.com/neeldeshmukhp/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed highly Scalable Backend for Web and Mobile applications",
        "⚡ Building responsive website using ReactJS/Html/Bootstrap/CSS3",
        "⚡ Developing mobile applications using React Native and Android",
        "⚡ Creating application backend in Python, Node, Express & Flask",
        "⚡ Well versed in DataStructure and Algoritm",
        "⚡ Integration of third party services such as Firebase / AWS / Google CLoud Console",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration and Deployment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jaihind College, Churchgate",
      subtitle: "Vocational Software Development",
      logo_path: "",
      alt_name: "Jaihind",
      duration: "2017 -2021",
      descriptions: [
        "⚡ I have studied core subjects like OOPS, OS, DBMS, Networking, Security, Toc, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.jaihindcollege.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SPIT Hackathon",
      subtitle: "The official techno-cultural fest of SPIT - Oculus 2021",
      logo_path: "spithackathon.png",
      certificate_link: "/",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Extracurricular Activities",
  description:
    "I've mostly done projects on my own and I am currenlty doing an internship at Cerebranium as Backend & ML Engineer. I like to share my knowledge with others, guiding and mentoring them.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Backend and Machine Learning (Intern)",
          company: "Cerebranium",
          company_url: "https://cerebranium.com/",
          logo_path: "cerebranium.png",
          duration: "May 2021 - (Current)",
          location: "Berlin, Germany",
          description:
            "I am currently working here as a Backend and MLOps Engineer Intern.",
          color: "#0071C5",
        },
        {
          title: "Wordpress Development (Freelancer)",
          company: "Apex Travel Paradise",
          company_url: "https://apextravel.in/",
          logo_path: "apex.png",
          duration: "Dec 2020 - Jan 2021",
          location: "Work From Home",
          description:
            "Created a wordpress site to managed hotels and display travel packages and destinations",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Extracurricular Activities",
      experiences: [
        {
          title: "Team Leader Website Team",
          company: "DCC",
          company_url: "https://jhcdotcomclub.com/",
          logo_path: "dcc.jpg",
          duration: "2020 - 2021",
          location: "College Club",
          description:
            "Building website and managing website for college club and event.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, React Project and Android. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "neel.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I don't blog frequently but sometimes I do write some stuff.",
    link: "https://neeldeshmukhp.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Thundarr VPN",
      url: "https://github.com/neel-desh/ThundarrVPN",
      description:
        "This is Vpn Application. This will securly connect to a vpn server, protecting your privacy.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
        {
          name: "AWS Ec2",
          iconifyClass: "logos:aws-ec2",
        },
      ],
    },
    {
      id: "1",
      name: "Inshort Bharat",
      url: "https://github.com/neel-desh/Inshort-Bharat",
      description:
        "A News web application built using python flask, and bootstrap. It also has ML module as Summarization, Classification and Sentiment Analysis.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Mysql",
          iconifyClass: "logos-mysql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
