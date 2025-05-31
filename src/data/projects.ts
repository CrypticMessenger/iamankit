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
    title: "RideMate: Carpooling Solution",
    description: "A carpooling application that connects users with similar commutes. Features include real-time ride matching, in-app payments, and user ratings. Built with Flutter and Node.js.",
    imageUrl: "https://placehold.co/600x400.png", // Replace with actual image if available
    imageHint: "carpooling app",
    tags: ["Dart (Flutter)", "MongoDB", "Javascript(NodeJS & ExpressJS)", "Provider", "Google Maps API", "PayTM API"],
    liveSiteUrl: "https://play.google.com/store/apps/details?id=com.ridesharerider", // Replace with actual Play Store link
    repoUrl: "https://github.com/CrypticMessenger/RideMate",
  },
  {
    id: "2",
    title: "Optimizing Communication Overhead in High Performance Computer based on LogGP parameters",
    description: "Developed a simulator to model and optimize communication overhead in HPC systems using LogGP parameters. This research aimed to improve the efficiency of parallel computing tasks.",
    imageUrl: "https://placehold.co/600x400.png", // Replace with actual image if available
    imageHint: "hpc optimization",
    tags: ["C++", "MPI", "LogGP", "HPC"],
    // liveSiteUrl: "#", // No live site for this project
    repoUrl: "https://github.com/CrypticMessenger/LogGPSimulator",
  },
  {
    id: "3",
    title: "Academic Management System: Scalable and Maintainable",
    description: "A comprehensive academic management system designed for scalability and maintainability. Features include course registration, grade management, and student information tracking. Built with Java and SQL.",
    imageUrl: "https://placehold.co/600x400.png", // Replace with actual image if available
    imageHint: "academic system",
    tags: ["Java", "SQL", "JDBC", "RestAPI", "Angular", "Springboot"],
    // liveSiteUrl: "#", // No live site for this project
    repoUrl: "https://github.com/CrypticMessenger/AcademicManagementSystem",
  },
  {
    id: "4",
    title: "Railway Reservation System",
    description: "A railway reservation system that allows users to search for trains, book tickets, and manage reservations. Developed using C++ and focused on efficient data structures and algorithms.",
    imageUrl: "https://placehold.co/600x400.png", // Replace with actual image if available
    imageHint: "railway reservation",
    tags: ["C++", "Data Structures", "Algorithms"],
    // liveSiteUrl: "#", // No live site for this project
    // repoUrl: "#", // No repo link for this project
  },
];
