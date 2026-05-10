import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS301",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description:
      "An in-depth study of fundamental data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with classic algorithms for sorting, searching, and graph traversal. Emphasizes algorithmic complexity analysis and problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Covers vector spaces, matrices, linear transformations, eigenvalues, and eigenvectors. Students explore applications in computer graphics, machine learning, and systems of linear equations, developing both computational and theoretical skills.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHY101",
    name: "Classical Mechanics",
    department: "Physics",
    description:
      "Introduction to Newtonian mechanics, kinematics, dynamics, energy, momentum, and rotational motion. Students apply calculus-based methods to analyze physical systems and gain foundational knowledge for advanced studies in engineering and physics.",
    createdAt: new Date().toISOString(),
  },
];
