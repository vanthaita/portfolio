export const DATA = {
  name: "Thai Ta",
  url: "https://www.facebook.com/",
  location: "TP HCM, VN",
  locationLink: "https://www.google.com/maps/place/HCM",
  description:
    "  with a passion for building saas applications. I love creating innovative solutions that make life easier and more efficient.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Nest.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Rust",
    "Move language",
    "Solidity",
    "C++",
  ],
  contact: {
    email: "thaitv225@gmail.com",
    tel: "3029267160",
    social: {
      GitHub: {
        name: "GitHub",
        url: "",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
      },
      email: {
        name: "Send Email",
        url: "#",
      },
    },
  },
  work: [
    {
      company: "Sun* Vietnam",
      href: "https://sun-asterisk.vn/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer Intern",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEVHcEz3+Pj//////////////f3///////////7/////5+T/19L/xb7/////4t7/pJj/fGr/STH/MxT/IQD/a1j/WkX/GgD/lYf/CgD/8/L/t63/hXb/eGQlOJe4AAAAD3RSTlMADzOCtuT/X9Q5///8Wdw7WLEuAAABhUlEQVR4AVSSB6KEIAxEWcVRA/tDU0S9/zl/4vax543UMS/dut4OwGD77mZ+dRsnvDWNP3i2AMg5750jAHb+sPufFDnElHOKgcX0d38zX9KyrOuaRfJYllT8k85DXbOQt1ZRHWZlNwuWyianVvUpnwyroxrRwprTjlaXUhaGetfQMMqPE1hajeCdHJFrnhGlwJhupoNbLtga4Bz0qXBx6EyPfcsCdwI4JQZoF5i3Hb2x7RCYy8kNHAqj8VmywKNZM9AivhQUgisUhpSlXRoM6Hq7oF+iv6COIhEE5gc8PKhWgj8USlHgoDALPM+dWqNdXp5wMPZqNoZTcKg1KAtRYCJr+teA3gqvAfWma1XnWbR2ITmLzrO2TpbP66vXojJ9erV7WT4zkhrhlMSoBgdhhcZry3yStQJxTEmSwARZ0eTtFaR54s0BaKwxqQ2A23ianzEZDoLYYxbFHQAdw/0TMLVTTRKWqr4mAfuNJmqJsVT8RPMdamrH0f7HhZaoEdlBUhIlOwAAf/komF9Z4QAAAAAASUVORK5CYII=",
      start: "July 2024",
      end: "September 2024",
      description: "Developed internal products in the R&D department.",
    },
  ],
  education: [
    {
      school: "University of Information Technology",
      href: "https://www.uit.edu.vn/",
      degree: "Bachelor of Information Technology",
      logoUrl: "/uit.svg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      name: 'Mogi',
      description: 'Mock Interview • Next.js • TypeScript',
      externalLink: 'https://mogi-three.vercel.app',
      githubLink: 'https://github.com/vanthaita/Mogi',
      image: './mogi.png',
    },
    {
      name: 'Bugoru.dev',
      description: 'Blog • Next.js • TypeScript',
      externalLink: 'https://burogu-fontend.vercel.app/',
      githubLink: 'https://github.com/vanthaita/burogu-fontend',
      image: './burogu.png',
    },
    {
      name: 'Notto',
      description: 'Note • Next.js • TypeScript',
      externalLink: 'https://notto-omega.vercel.app/',
      githubLink: 'https://github.com/vanthaita/notto',
      image: './notto.png',
    },
  ],
  ideas: [
    {
      name: "AI saas for Cloning UI/UX Design",
      description: "A tool that clones UI/UX designs from any website URL, built for no-code users to streamline web development.",
      status: "Concept",
      statusColor: "green", 
    },
    {
      name: "AI saas for Auto-Writing Travel Blogs",
      description: "An AI-based tool that automatically generates advanced blog posts about travel to promote tourism industries.",
      status: "Concept",
      statusColor: "orange",
    },
    {
      name: "Web3 & GameFi: Cross-Game NFT Standard",
      description: "Creating a blockchain network or NFT GameFi standard allowing NFTs to be used across multiple games.",
      status: "Concept",
      statusColor: "blue",
    },
    {
      name: "Url document to PDF & Chat with PDF",
      description: "A tool to convert url documents to PDFs and enable users to interact with the document via chat functionality for easier reading.",
      status: "Concept",
      statusColor: "orange",
    },
  ]
} as const;
