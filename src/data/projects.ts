export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveSiteUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Pro",
    description: "A full-featured e-commerce platform with advanced product filtering, secure payments, and an intuitive admin dashboard. Built with Next.js, Stripe, and Tailwind CSS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "E-commerce"],
    liveSiteUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management tool designed to boost productivity. Features include drag-and-drop boards, real-time updates, and notification system. Powered by React and Firebase.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task list",
    tags: ["React", "Firebase", "Real-time", "Productivity"],
    liveSiteUrl: "#",
  },
  {
    id: "3",
    title: "Personal Blog Engine",
    description: "A lightweight and customizable blog engine built with Astro and Markdown. Optimized for performance and SEO, offering a seamless writing and reading experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing blog",
    tags: ["Astro", "Markdown", "SEO", "Performance"],
    repoUrl: "#",
  },
  {
    id: "4",
    title: "Recipe Sharing App",
    description: "A community-driven recipe sharing application where users can discover, share, and rate recipes. Features user authentication, recipe submission, and advanced search.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "food recipe",
    tags: ["React Native", "Node.js", "MongoDB", "Mobile App"],
    liveSiteUrl: "#",
    repoUrl: "#",
  },
];
