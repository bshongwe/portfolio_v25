import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ernest Bhekizwe",
  lastName: "Shongwe",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Engineer | Backend Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/South Africa", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Zulu", "seTwsana"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
    link: "mailto:ernest@beqy.co.za",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Software Engineer | Backend Engineer</>,
  subline: (
    <>
      I'm Ernest, Backend Engineer at <InlineCode>Beqy.ai</InlineCode>,
      <br /> where I build Fintech Ai-powered SaaS solutions. I use AWS, Azure
      <br /> and GCP for cloud solutions. I also build RESTful APIs, deployment
      <br /> pipelines and CI/CD workflows.
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ernest is a Johannesburg-based software engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        His work spans secure deployment pipelines (even ML deployment
        pipelines), UI/UX, RESTful API development and database management.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "WORK EXPERIENCE",
    experiences: [
      {
        company: "Beqy.ai",
        timeframe: "2024 - Present",
        role: "Backend Engineer",
        achievements: [
          <>
            Built a secure deployment pipeline, increasing deployment
            effeciency by 85%, improving backend processing to 10K+
            transactions/month with 99% minimum uptime and 30% increase in load
            times.
          </>,
          <>
            Upgraded Azure CI/CD pipelines, increasing deployment efficiency by
            85% and enabling rollback. Optimized API performance, reducing
            response times by 65%, improving query performance by 50%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KalKey Inc.",
        timeframe: "2022 - 2024",
        role: "Full Stack Software Engineer | DevSecOps Engineer",
        achievements: [
          <>
            Built a secure automated deployment pipeline, resulting in a 30%
            provisioning efficiency improvement. Implemented a 95% test
            coverage for shipped features.
          </>,
          <>
            Led an LLM RAG intergration project, capable of processing 10K+ API
            queries per day with 99% minimum uptime.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "ACADEMIC BACKGROUND",
    institutions: [
      {
        name: "ALX Africa",
        description: <>Studied Software Engineering: Applied Ai.</>,
      },
      {
        name: "ALX Africa",
        description: <>Studied Software Engineering: Backend Specialization.</>,
      },
      {
        name: "Headstarter",
        description: <>Studied Software Engineering: Ai Fellowship.</>,
      },
      {
        name: "Headstarter",
        description: <>Studied Software Engineering: Ai Accelerate.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
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
  title: "Writing about design and tech...",
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
