import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Ali Naqi",
  title: "Hi all, I'm Ali Naqi",
  description:
    "I am a dedicated Full Stack web developer specializing in Python, particularly within the Frappe ERPNext ecosystem. With a robust background in developing comprehensive web applications, I have adeptly utilized Python, Frappe, ERPNext, and various cloud technologies to deliver scalable and efficient solutions. My passion lies in continuously exploring and adopting new technologies, enhancing my skill set, and integrating innovative solutions into projects. Renowned for my self-motivation and diligence, I thrive in collaborative team environments and am always eager to expand my knowledge and contribute to impactful initiatives.",
  resumeLink: "https://drive.google.com/file/d/1Jce_-HLTTU62_0D50DTO4_W3kkO85tC3/view?usp=sharing",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:baltialinaqi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-naqi-109a00184/",
  github: "https://github.com/AliNaqi2020",
  instagram: "https://www.instagram.com/alinaqii786/",
  facebook: "https://www.facebook.com/profile.php?id=100013735652150&mibextid=JRoKGi",
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing custom apps and modules in Frappe Framework"),
        emoji("⚡ Building ERP solutions and business workflows in ERPNext"),
        emoji("⚡ Building RESTful APIs in Frappe & Frappe REST Framework"),
        emoji("⚡ Developing reports and dashboards for data visualization"),
        emoji("⚡ Implementing role-based access control and permission management"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Frappe",
          iconifyTag: "simple-icons:frappe",
        },
        {
          skillName: "ERPNext",
          iconifyTag: "simple-icons:erpnext",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        }
        ,
        {
          skillName: "MariaDB",
          iconifyTag: "devicon:mariadb-wordmark",
        },
        {
          skillName: "Redis",
          iconifyTag: "devicon:redis-wordmark",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Linux",
          iconifyTag: "devicon:linux",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "Frontend/Design",
    progressPercentage: "50",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Karachi",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "December 2018 - December 2022",
    desc: "",
    grade: "Grade A",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "ERPNext Developer",
    company: "Iplex Soft",
    companyLogo: "/img/icons/common/iplexsoft.jpeg",
    date: "Sep 2021 - Oct 2022",
    desc: "I've architected robust backends for a variety of web applications, APIs, and WebSocket services in domains such as e-commerce, podcasts, and property management, leveraging the Frappe framework and ERPNext platform. I possess extensive experience in managing server infrastructure and performing deployments on Linux servers,  and AWS S3, ensuring high availability and scalability for mission-critical applications. Additionally, I've implemented PyTest for automated unit and integration testing, significantly reducing manual testing efforts by 4 hours per sprint. This has resulted in a more reliable codebase, reinforcing the foundation for seamless and dependable ERP solutions in the Frappe ecosystem.",
  },
  {
    role: "Python Frappe ERPNext Developer",
    company: "BOT Solutions",
    companyLogo: "/img/icons/common/botsolutions.png",
    date: "Nov 2022 - Jan 2024",
    desc: "I specialize in crafting robust backends for various web applications, APIs, and WebSocket services across e-commerce, podcasts, and property management domains. With expertise in the Frappe framework and ERPNext platform, I've successfully implemented scalable solutions to meet diverse business needs. My proficiency extends to managing server infrastructure and deploying applications on Linux servers, Heroku, and AWS S3, ensuring optimal performance and reliability. Leveraging PyTest for automated unit and integration testing, I've streamlined testing processes, saving 4 hours per sprint and enhancing the codebase's dependability. With a focus on delivering seamless ERP solutions, I'm committed to reinforcing the Frappe ecosystem's foundation for success.",
  },
  {
    role: "Software Engineer",
    company: "Codevative",
    companyLogo: "/img/icons/common/codevative.jpeg",
    date: "Feb 2024 - Present",
    desc: "I've architected robust backends for a variety of web applications, APIs, and WebSocket services in domains such as e-commerce, podcasts, and property management, leveraging the Frappe framework and ERPNext platform. I possess extensive experience in managing server infrastructure and performing deployments on Linux servers,  and AWS S3, ensuring high availability and scalability for mission-critical applications. Additionally, I've implemented PyTest for automated unit and integration testing, significantly reducing manual testing efforts by 4 hours per sprint. This has resulted in a more reliable codebase, reinforcing the foundation for seamless and dependable ERP solutions in the Frappe ecosystem.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "HRMS Management System",
    desc: "HRMS Management is a comprehensive solution designed to streamline and automate human resource management processes within an organization. It offers a wide range of features to effectively manage employee data, attendance, leave, payroll, performance evaluation, and more. The system ensures smooth communication between HR departments and employees, facilitating efficient collaboration and decision-making.",
    github: "https://github.com/AliNaqi2020/hrmsCustom",
    link: "https://www.linkedin.com/in/ali-naqi-109a00184/",
  },
  {
    name: "Real Estate Management System",
    desc: "BBH Project Management is a specialized software solution tailored for real estate developers, property managers, and construction firms to efficiently manage their projects from inception to completion. This comprehensive platform offers a suite of tools and features to streamline project planning, budgeting, scheduling, resource allocation, and collaboration, enabling stakeholders to deliver projects on time and within budget while maintaining quality standards.",
    github: "projects/1",
  },
  {
    name: "Retail Management System",
    desc: "The Retail Management System (RMS) is a comprehensive software solution designed to streamline and optimize operations for retail businesses of all sizes. From brick-and-mortar stores to online retailers, RMS offers a suite of powerful tools to manage inventory, sales, customer relationships, and financial transactions seamlessly. By integrating various aspects of retail operations into a unified platform, RMS empowers retailers to enhance efficiency, improve customer service, and drive business growth.",
    github: "https://github.com/AliNaqi2020",
  },
  {
    name: "Healthcare Management System",
    desc: "Our Healthcare Management System (HMS) is a comprehensive software solution designed to streamline and optimize operations for healthcare providers, clinics, hospitals, and medical facilities. It encompasses a range of modules and features to facilitate efficient patient care, enhance administrative processes, and ensure compliance with regulatory standards. Our HMS portfolio highlights our expertise in developing custom solutions tailored to the unique needs and workflows of healthcare organizations.",
    github: "https://github.com/AliNaqi2020",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hanzla Tauqeer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
