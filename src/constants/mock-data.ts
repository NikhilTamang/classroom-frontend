import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS301",
    name: "Data Structures and Algorithms",
    department: "CS",
    description:
      "An in-depth study of fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with classic algorithms for sorting, searching, and graph traversal. Emphasizes algorithmic complexity analysis and problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description:
      "Covers vector spaces, matrices, linear transformations, eigenvalues, and eigenvectors. Students explore applications in computer graphics, machine learning, and systems of linear equations, developing both computational and theoretical skills.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG101",
    name: "Introduction to English Studies",
    department: "English",
    description:
      "This course introduces students to the fundamentals of English language, literature, and communication. It covers reading comprehension, academic writing, grammar, vocabulary development, and basic literary analysis to build strong foundational language skills.",
    createdAt: new Date().toISOString(),
  },
];
