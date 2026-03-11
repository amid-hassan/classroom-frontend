import { Subject } from "../types /index";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "An introductory course on the basics of computer science, covering algorithms, data structures, and programming concepts.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Mathematics",
        description: "This course covers advanced calculus topics, including integration, sequences, and series.",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "ENG102",
        name: "English Literature",
        department: "English",
        description: "A survey of major literary works from the English-speaking world, with a focus on critical analysis and historical context.",
        createdAt: new Date().toISOString()
    }
];
