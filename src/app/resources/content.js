import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ernest",
  lastName: "Shongwe",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "isiZulu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      join my newsletter today and be part of my evergrowing tech community.
      Signup to get the latest updates on my projects, blog posts and more.
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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ernest-beqy",
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
      <br /> Ai-powered fintech solutions, deployed via secure DevOps & MLpipelines.
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
        Ernest is a Sandton-based software engineer, passionate about building
        multiplatiform solutions with 3+ years of experience. His work involves
        LLM RAG Full Stack SaaS products and secure DevOps pipelines.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "WORK EXPERIENCE",
    experiences: [
      {
        company: "Beqy.ai",
        timeframe: "Nov 2024 - Present",
        role: "Backend Engineer",
        achievements: [
          <>
            Built secure DevOps pipelines for Ai/ML fintech SaaS that supports
            200k+ records, 10k+ transactions and 1k+ users.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster via Azure CI/CD, Docker
            and K8s, achieving 99%+ uptime.
          </>,
          <>
            Configured VMs, proxy, load balancer, SSL and other infrastructure
            components to ensure high availability and scalability. Also
            designed and implemented a secure CI/CD pipeline for the SaaS.
          </>,
          <>
            Improved the AI/ML model accuracy by 20% through data pipeline
            optimisation and feature engineering.
          </>,
          <>
            Attended the Microsoft AI Tour 2025 (Johannesburg) to stay updated
            with the latest AI/ML trends and technologies.
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
        timeframe: "Mar 2024 - Nov 2024",
        role: "DevOps Engineer",
        achievements: [
          <>
            Deployed and maintained 4+ automated pipelines, a high-availability
            data pipeline (DynamoDB, CosmosDB) and severless architecture (AWS
            Lambda & API Gateway) leading to 60% deployment effeciency, 30%
            provisioning time reduction and 50% reducution in post-deployment
            issues.
          </>,
          <>
            Led maintenance of 7+ serverless apps and 4+ secure, automated
            pipelines, improved setup effeciency by 30% and reduced downtime by
            40%.
          </>,
          <>
            Undertook on-job training in DevSecOps and Data Science, sponsered
            by KalKey Inc.
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
        timeframe: "Oct 2023 - Mar 2024",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Built and maintained 12+ projects, averaging 99% uptime, 40%
            improvement in load time and 30% development cost reduction.
          </>,
          <>
            Optimised UI/UX, increasing customer satisfaction by 30%, API
            integration that reduced latency by 15% and 30% improved SEO.
          </>,
          <>
            Leveraged Espresso, Mockito, JUnit and Mocha-Chai to test 10+
            projects, achieving 99%+ test coverage and 10% reduction in
            post-deployment issues.
          </>,
          <>
            Developed and built 4+ MERN projects, optimised load time by 40%,
            optmised 8+ web systems to reduce server response delay by 35%.
            Developed 12+ additional projects with an average uptime of 99%.
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
          <>
            Develped iOS and Android apps using React Native and Flutter.
            Achieved 15% latency reduction, improving existing UI/UX by 20%,
            bug reduction of 30% and an averga stability of 99.9%.
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
    title: "EDUCATION",
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
        timeframe: "Jun 2024 - Sept 2024",
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
