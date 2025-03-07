/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kouessan Kpodar",
  title: "Hi, I'm Kouessan",
  subTitle: emoji(
    "A passionate Data Analyst 🚀 with experience in transforming data into actionable insights using SQL, R, Python, Power BI, SpreadSheet and other analytical tools. Skilled in data visualization, statistical analysis, and building data-driven solutions to drive business decisions."
  ),
  resumeLink: "https://drive.google.com/file/d/1z8z0EV2-ZpiriNK2MXz8Xa5xdcizCqIv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/kouessan-kpodar-b7a303223/",
  gmail: "ephraim3kpodar@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ANALYST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive dashboards and data visualizations for web and mobile applications."),
    emoji("⚡ Build dynamic and insightful reports using BI tools like Power BI and Tableau."),
    emoji("⚡ Work with large datasets to extract meaningful insights and drive data-driven decision-making."),
    emoji("⚡ Integrate third-party services and cloud platforms such as AWS, Google Cloud, and Snowflake for data storage and processing.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R programming",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Microsoft",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Apple",
      fontAwesomeClassname: "fab fa-apple"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESGIS University Togo",
      logo: require("./assets/images/esgis.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - April 2017",
      desc: "IT, Networks & Telecommunications",
      descBullets: [
        "Software Engineering",
        "Big Data & Artificial Intelligence",
        "computer security",
        "Systems, Networks & Cloud Computing"
      ]
    }/*,
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }*/
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Transformation",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assembly II",
      company: "Medtronic, Minneapolis, MN",
      companylogo: require("./assets/images/medtronic.jpeg"),
      date: "April 2022 – Present",
      desc: "Manufacturing and development of healthcare technologies and therapies.",
      descBullets: [
        "Train colleagues on the operation of new machinery by clearly communicating functions and best practices, improving team proficiency, and contributing to overall production efficiency",
        "Analyze machine performance data to proactively detect irregularities, contributing to process optimization and consistent delivery of high-quality medical devices",
        "Document manufacturing processes and inspection results, maintaining organized records to support quality assurance and facilitate data-driven decision-making",
        "Monitor equipment performance to identify patterns and potential issues, collaborating with the engineering team to troubleshoot and implement solutions, minimizing downtime and enhancing production efficiency"
      ]
    },
    {
      role: "Assembly I",
      company: "Boston Scientific, Maple Grove, Minneapolis",
      companylogo: require("./assets/images/boston.png"),
      date: "October 2019 – 03 2022",
      desc: "Boston Scientific Corporation specializes in medical devices.."
    },
    {
      role: "Driver",
      company: "Uber, Minneapolis, MN",
      companylogo: require("./assets/images/uber.jpg"),
      date: "October 2020 – Present",
      desc: "Uber driver."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A FEW PROJECTS FROM MY TRAINING",
  projects: [
    {
      image: require("./assets/images/capstone.webp"),
      projectName: "Data Analytics Capstone Project",
      projectDesc: "This capstone project from the Google Data Analytics Professional Certificate program demonstrates the process of importing and cleaning large Excel datasets into R using the tidyr package. The analysis focused on comparing members and casual customers through data subsets. Visualizations were created using ggplot2 to present the results clearly, enabling stakeholders to make informed decisions.",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://github.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/covid.jpg"),
      projectName: "COVID-19 Statistics Analysis and Interactive Dashboard Project",
      projectDesc: "This project involved cleaning and analyzing a COVID-19 dataset using R programming and SQL to explore specific variables, such as growth and change over time, as well as differences between Minneapolis and the United States. Data views were created to facilitate deeper analysis, then imported into Microsoft Excel and Google Sheets for further cleaning and formatting. Various visualizations were created using Tableau, R, Excel, and SQL, showcasing key data insights, which were then compiled into an interactive dashboard for easy access and exploration.",
      footerLink: [
        {
          name: "Visit Github",
          url: "http://github.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Certificat",
      subtitle:
        "This certification validates fundamental data analytics skills, including data collection, transformation, organization, and visualization to extract meaningful insights and support decision-making. It involves hands-on labs and a capstone project, enabling mastery of key data processing stages: asking the right questions, preparing and analyzing data, visualizing insights, and driving actionable outcomes. The program also emphasizes teamwork, project management, problem-solving, and proficiency in Google Workspace tools.",
      image: require("./assets/images/certif.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (612) 433-9716",
  email_address: "ephraim3kpodar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
