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
        Ernest is a Sandton-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
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
            Built secure DevOps pipelines that reduced deployment time by 50% and increased
            deployment frequency by 30%.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        description: <>Software Engineering: Ai Resident.</>,
      },
      {
        name: "ALX Africa",
        timeframe: "Jun 2023 - Jul 2024",
        description: <>Software Engineering: Full Stack, Backend specialization.</>,
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
  title: "Writing about Software Engineering concepts and technical experinces...",
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
