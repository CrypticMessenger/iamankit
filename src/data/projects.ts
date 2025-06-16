export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveSiteUrl?: string;
  repoUrl?: string;
  ppt?: string; // Optional field for project presentation link
}

export const projects: Project[] = [
  {
    id: "1",
    title: "RideMate: Carpooling Solution",
    description: "RideMate: Share rides, save money, go green. \n Ideated, designed, developed and deployed Ridemate from scratch.\nRideMate is a carpooling app designed for college students. It helps you find and share rides with your classmates, save commute charges and reduce your carbon footprint. Whether you need a ride to campus, a grocery store, or a weekend trip, RideMate connects you with friendly and reliable drivers or passengers.\n Download RideMate today and join the community of smart and eco-friendly commuters! \n(only @iitrpr.ac.in emails allowed to promote security and trust among fraternity)",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQEW6bUV32LKhA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1685215232057?e=1750705200&v=beta&t=V8IUSZXqsUsLaOrxPA0s1M16HavpCXbAghoAwLLR2BQ", // Replace with actual image if available
    imageHint: "carpooling app",
    tags: ["Dart (Flutter)", "MongoDB", "Javascript(NodeJS & ExpressJS)"],
    ppt: "https://docs.google.com/presentation/d/1QOKrqjgrnRMM9Ka-KhjDZpC_XwB99IIYZbvuA1oNAwI/edit?usp=sharing",
    liveSiteUrl: "https://play.google.com/store/apps/details?id=com.ridesharerider", // Replace with actual Play Store link
  },
  {
    id: "2",
    title: "Optimizing Communication Overhead in High Performance Computer based on LogGP parameters",
    description: "Developed a simulator to model and optimize communication overhead in HPC systems using LogGP parameters. This research aimed to improve the efficiency of parallel computing tasks.",
    imageUrl: "https://assets.grok.com/users/152d1512-03c5-46f0-bed1-8133185debc2/generated/94113421-294e-47da-b0c1-88922d01b5ff/image.jpg", // Replace with actual image if available
    imageHint: "hpc optimization",
    tags: ["C++", "MPI", "LogGP", "HPC"],
    // liveSiteUrl: "#", // No live site for this project
    // repoUrl: "https://github.com/CrypticMessenger/LogGPSimulator",
    ppt: "https://docs.google.com/presentation/d/1-GMDLFv_uaDTxNmLp1BzxE8-314NMO3d8M8w3xK14fI/edit?slide=id.p#slide=id.p", // Replace with actual PPT link
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
