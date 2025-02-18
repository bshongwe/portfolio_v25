import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ernest",
  lastName: "Shongwe",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "isiZulu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I build Ai-powered SaaS Products via secure DevOps pipelines using AWS
      Azure and GCP cloud services.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bshongwe",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ernest-shongwe/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shongwe.bhekizwe@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and DevOps Specialist</>,
  subline: (
    <>
      I am Ernest, a Software Engineer at <InlineCode>Beqy.ai</InlineCode>, where I build
      <br /> Ai-powered fintech solutions, deployed via secure pipelines.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/bhekizwe-shongwe-i5uo9b/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ernest is a Sandton-based software engineer, passionate about buiding
        multiplatiform solutions with 3+ years of experience. His work involves
        LLM RAG Full Stack SaaS products and secure DevOps pipelines.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Beqy.ai",
        timeframe: "Nov 2024 - Present",
        role: "Backend Engineer",
        achievements: [
          <>
            Built secure DevOps pipelines for Ai/ML fintech SaaS that supports
            200k+ records and 1k+ users (via Azure CI/CD, Docker and K8s) to
            increase deployment effeciency time by 50%.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/beqy-ai.png",
            alt: "Beqy.ai",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc",
        timeframe: "Apr 2024 - Nov2024",
        role: "DevOps Engineer",
        achievements: [
          <>
            Deployed and maintained 4+ automated pipelines, a high-availability
            data pipeline (DynamoDB, CosmosDB) and severless architecture (AWS
            Lambda & API Gateway) leading to 25% deployment effeciency.
          </>,
          <>
            Led maintenance of 4+ projects, improved setup effeciency by 30%
            and reduced downtime by 40%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/kalkey.png",
            alt: "KalKey",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc",
        timeframe: "Mar 2024 - Apr 2024",
        role: "Full Stack Python Developer",
        achievements: [
          <>
            Built and maintained 7+ serverless Python-based apps using AWS
            Lambda and AWS API Gateway, achieving 20% bug reduction and 15%
            server response delay.
          </>,
          <>
            Optimised UI/UX, increasing custmoer satisfaction by 30%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/kalkey.png",
            alt: "KalKey",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc",
        timeframe: "Dec 2023 - Mar 2024",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Developed and built 4+ MERN project, optimised load time by 40%,
            optmised 8+ web systems to reduce server response delay by 35%.
          </>,
          <>
            Developed and built 12+ additional projects to improve uptime to
            99%.
          </>,
          <>
            Mentored 5 incoming junior developers.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/kalkey.png",
            alt: "KalKey",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc",
        timeframe: "Oct 2023 - Dec 2023",
        role: "App Developer",
        achievements: [
          <>
            Developed iOS and Android apps using React Native with 15% reduced
            latency, 20% improved UI/UX, 30% reduced bugs and 99.9% stability.
          </>,
          <>
            Used effecient version control to manage 5+ projects, redced
            deployment errors by 35%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/kalkey.png",
            alt: "KalKey",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc",
        timeframe: "Apr 2022 - Oct 2023",
        role: "Frontend Developer",
        achievements: [
          <>
            Built 20+ projects, ensuring 100% responsive design, 99% uptime and
            99.9% stability, reduced load time by 40% and improved UI/UX by 30%.
          </>,
          <>
            Boosted website performance through SEO improvements by 40%, 25%
            improvement on UI/UX and 30% increase in customer satisfaction due
            to a 30% deployment error reduction rate.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/kalkey.png",
            alt: "KalKey",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ALX Africa",
        timeframe: "Sept 2024 - present",
        description: <>Software Engineering: Applied Ai.</>,
      },
      {
        name: "KalKey Inc.",
        timeframe: "May 2024 - Dec 2024",
        description: <>DevOps Training Course: Linux, AWS, Azure & K8s.</>,
      },
      {
        name: "Headstarter",
        timeframe: "Sept 2024 - Feb 2025",
        description: <>Software Engineering: Ai Resident.</>,
      },
      {
        name: "Headstarter",
        timeframe: "Jun 2024 - Sept 2025",
        description: <>Software Engineering: Ai Fellowship.</>,
      },
      {
        name: "ALX Africa",
        timeframe: "Jun 2023 - Jul 2024",
        description: <>Software Engineering: Full Stack, Backend Specialization.</>,
      },
      {
        name: "freeCodeCamp",
        timeframe: "Jan 2023 - Jun 2023",
        description: <>Full Stack Web Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "DevOps Pipelines",
        description: <>Building secure app and SaaS CI/CD pipelines via GitHub Actions and Microsoft Azure Pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/devops.jpeg",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/devops-2.jpeg",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Ai DevOps Data Pipelines",
        description: <>Building secure data pipelines via GitHub Actions and Microsoft Azure Pipelines.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/ai-ml-pipeline.png",
            alt: "Ai DevOps image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/ai-ml-pipeline-2.png",
            alt: "Ai DevOps image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps: Orchestration",
        description: <>Provisioning and containerisation for cloud deployments.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/k8s-devops.png",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/terraform.jpeg",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/jenkins.jpeg",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/docker.jpg",
            alt: "DevOps image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SaaS Development",
        description: <>Building next gen SaaS apps using Next.js or other modren frontend frameworks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/saas.png",
            alt: "SaaS image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Software Engineering concepts and technical experinces.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
