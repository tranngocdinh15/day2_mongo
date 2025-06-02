


// ===================================================================
// 1. CREATE STUDENTS COLLECTION
// ===================================================================

db.students.insertMany([
  {
    _id: ObjectId("665b1a1a1234567890abcdef"),
    studentId: "STU001",
    name: "Nguyen Van An",
    email: "nguyenvanan@student.edu.vn",
    enrolledCourses: [
      ObjectId("665b1a1b1234567890abcde1"),
      ObjectId("665b1a1b1234567890abcde2")
    ],
    major: "Computer Science",
    academicYear: 2,
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1a1234567890abcd01"),
    studentId: "STU002",
    name: "Tran Thi Bich",
    email: "tranthibich@student.edu.vn",
    enrolledCourses: [
      ObjectId("665b1a1b1234567890abcde1"),
      ObjectId("665b1a1b1234567890abcde3")
    ],
    major: "Information Technology",
    academicYear: 3,
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1a1234567890abcd02"),
    studentId: "STU003",
    name: "Le Van Cuong",
    email: "levancuong@student.edu.vn",
    enrolledCourses: [
      ObjectId("665b1a1b1234567890abcde2"),
      ObjectId("665b1a1b1234567890abcde3")
    ],
    major: "Software Engineering",
    academicYear: 2,
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1a1234567890abcd03"),
    studentId: "STU004",
    name: "Pham Thi Dung",
    email: "phamthidung@student.edu.vn",
    enrolledCourses: [
      ObjectId("665b1a1b1234567890abcde1")
    ],
    major: "Computer Science",
    academicYear: 1,
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1a1234567890abcd04"),
    studentId: "STU005",
    name: "Hoang Van Em",
    email: "hoangvanem@student.edu.vn",
    enrolledCourses: [
      ObjectId("665b1a1b1234567890abcde2"),
      ObjectId("665b1a1b1234567890abcde3")
    ],
    major: "Information Technology",
    academicYear: 4,
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  }
]);

// ===================================================================
// 2. CREATE INSTRUCTORS COLLECTION
// ===================================================================

db.instructors.insertMany([
  {
    _id: ObjectId("665b1a1d1234567890abcde8"),
    instructorId: "INS001",
    employeeId: "EMP001",
    fullName: "Dr. Nguyen Van Duc",
    email: "nguyenvanduc@university.edu.vn",
    department: "Information Technology Faculty",
    academicTitle: "Doctor",
    specializations: ["Programming", "Software Engineering"],
    assignedModules: [
      ObjectId("665b1a1c1234567890abcde4"),
      ObjectId("665b1a1c1234567890abcde5")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1d1234567890abcde9"),
    instructorId: "INS002",
    employeeId: "EMP002",
    fullName: "MSc. Le Thi Hoa",
    email: "lethihoa@university.edu.vn",
    department: "Information Technology Faculty",
    academicTitle: "Master",
    specializations: ["Algorithms", "Data Structures"],
    assignedModules: [
      ObjectId("665b1a1c1234567890abcde6"),
      ObjectId("665b1a1c1234567890abcde7")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1d1234567890abcdea"),
    instructorId: "INS003",
    employeeId: "EMP003",
    fullName: "Assoc.Prof.Dr. Tran Van Giang",
    email: "tranvangiang@university.edu.vn",
    department: "Information Technology Faculty",
    academicTitle: "Associate Professor - Doctor",
    specializations: ["Artificial Intelligence", "Machine Learning"],
    assignedModules: [
      ObjectId("665b1a1c1234567890abcde9"),
      ObjectId("665b1a1c1234567890abcdeb")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  }
]);

// ===================================================================
// 3. CREATE COURSES COLLECTION
// ===================================================================

db.courses.insertMany([
  {
    _id: ObjectId("665b1a1b1234567890abcde1"),
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    courseCode: "CS101",
    department: "Information Technology Faculty",
    creditHours: 3,
    description: "Basic course on computer science and programming fundamentals",
    courseModules: [
      ObjectId("665b1a1c1234567890abcde4"),
      ObjectId("665b1a1c1234567890abcde5")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1b1234567890abcde2"),
    courseId: "CS201",
    courseName: "Data Structures and Algorithms",
    courseCode: "CS201",
    department: "Information Technology Faculty",
    creditHours: 4,
    description: "Course on data structures and fundamental algorithms",
    courseModules: [
      ObjectId("665b1a1c1234567890abcde6"),
      ObjectId("665b1a1c1234567890abcde7")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1b1234567890abcde3"),
    courseId: "CS301",
    courseName: "Artificial Intelligence",
    courseCode: "CS301",
    department: "Information Technology Faculty",
    creditHours: 3,
    description: "Course on artificial intelligence concepts and applications",
    courseModules: [
      ObjectId("665b1a1c1234567890abcde9"),
      ObjectId("665b1a1c1234567890abcdeb")
    ],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  }
]);

// ===================================================================
// 4. CREATE MODULES COLLECTION
// ===================================================================

db.modules.insertMany([
  {
    _id: ObjectId("665b1a1c1234567890abcde4"),
    moduleId: "CS101-M1",
    moduleName: "Programming Fundamentals",
    moduleCode: "CS101-M1",
    parentCourseId: ObjectId("665b1a1b1234567890abcde1"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcde8"),
    moduleDescription: "Basic programming concepts and syntax",
    weekNumber: 1,
    durationWeeks: 2,
    topicsCovered: ["Variables", "Data Types", "Control Structures"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1c1234567890abcde5"),
    moduleId: "CS101-M2",
    moduleName: "Object-Oriented Programming",
    moduleCode: "CS101-M2",
    parentCourseId: ObjectId("665b1a1b1234567890abcde1"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcde8"),
    moduleDescription: "Introduction to OOP concepts",
    weekNumber: 3,
    durationWeeks: 3,
    topicsCovered: ["Classes", "Objects", "Inheritance", "Polymorphism"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1c1234567890abcde6"),
    moduleId: "CS201-M1",
    moduleName: "Arrays and Linked Lists",
    moduleCode: "CS201-M1",
    parentCourseId: ObjectId("665b1a1b1234567890abcde2"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcde9"),
    moduleDescription: "Basic data structures",
    weekNumber: 1,
    durationWeeks: 2,
    topicsCovered: ["Arrays", "Linked Lists", "Dynamic Memory"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1c1234567890abcde7"),
    moduleId: "CS201-M2",
    moduleName: "Trees and Graphs",
    moduleCode: "CS201-M2",
    parentCourseId: ObjectId("665b1a1b1234567890abcde2"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcde9"),
    moduleDescription: "Advanced data structures",
    weekNumber: 5,
    durationWeeks: 3,
    topicsCovered: ["Binary Trees", "Search Trees", "Graphs", "Traversal Algorithms"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1c1234567890abcde9"),
    moduleId: "CS301-M1",
    moduleName: "Introduction to AI",
    moduleCode: "CS301-M1",
    parentCourseId: ObjectId("665b1a1b1234567890abcde3"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcdea"),
    moduleDescription: "Overview of artificial intelligence",
    weekNumber: 1,
    durationWeeks: 2,
    topicsCovered: ["AI History", "Applications", "Search Algorithms"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  },
  {
    _id: ObjectId("665b1a1c1234567890abcdeb"),
    moduleId: "CS301-M2",
    moduleName: "Machine Learning Basics",
    moduleCode: "CS301-M2",
    parentCourseId: ObjectId("665b1a1b1234567890abcde3"),
    assignedInstructorId: ObjectId("665b1a1d1234567890abcdea"),
    moduleDescription: "Basic machine learning algorithms",
    weekNumber: 4,
    durationWeeks: 4,
    topicsCovered: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    createdAt: ISODate("2025-06-01T03:33:36Z"),
    updatedAt: ISODate("2025-06-01T03:33:36Z")
  }
]);

// ===================================================================
// 5. CREATE REVIEWS COLLECTION
// ===================================================================

db.reviews.insertMany([
  // Reviews for CS101-M1
  {
    _id: ObjectId("665b1a1e1234567890abcdea"),
    reviewerId: ObjectId("665b1a1a1234567890abcdef"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde4"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde1"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde8"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 3,
      usefulnessScore: 4
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 4,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Content is very good and easy to understand. Real examples help understand better.",
      instructorFeedback: "Professor teaches very well and is always ready to answer student questions.",
      improvementSuggestions: "Should have more practical exercises to reinforce knowledge."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-15T10:30:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-15T10:30:00Z"),
    updatedAt: ISODate("2025-05-15T10:30:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcdeb"),
    reviewerId: ObjectId("665b1a1a1234567890abcd01"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde4"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde1"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde8"),

    contentRating: {
      overallScore: 3,
      clarityScore: 3,
      relevanceScore: 4,
      difficultyLevel: 4,
      usefulnessScore: 3
    },

    instructorRating: {
      overallScore: 4,
      teachingSkills: 4,
      communicationSkills: 4,
      responsivenessScore: 4,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Good content but needs more illustrative examples.",
      instructorFeedback: "Instructor has deep and broad knowledge.",
      improvementSuggestions: "Need more real-world applications."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-16T14:20:00Z"),
    isAnonymousReview: true,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-16T14:20:00Z"),
    updatedAt: ISODate("2025-05-16T14:20:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd10"),
    reviewerId: ObjectId("665b1a1a1234567890abcd03"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde4"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde1"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde8"),

    contentRating: {
      overallScore: 5,
      clarityScore: 5,
      relevanceScore: 5,
      difficultyLevel: 2,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Module is very suitable for beginners. Step-by-step explanation is very detailed.",
      instructorFeedback: "Dr. Duc is excellent, creating a.txt comfortable learning environment.",
      improvementSuggestions: "Could add some challenges for advanced students."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-17T09:15:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-17T09:15:00Z"),
    updatedAt: ISODate("2025-05-17T09:15:00Z")
  },

  // Reviews for CS101-M2
  {
    _id: ObjectId("665b1a1e1234567890abcdec"),
    reviewerId: ObjectId("665b1a1a1234567890abcdef"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde5"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde1"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde8"),

    contentRating: {
      overallScore: 5,
      clarityScore: 5,
      relevanceScore: 5,
      difficultyLevel: 4,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "OOP module is excellent with many real-world examples.",
      instructorFeedback: "Professor teaches very well, making complex concepts easy to understand.",
      improvementSuggestions: "Perfect as it is."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-18T16:45:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-18T16:45:00Z"),
    updatedAt: ISODate("2025-05-18T16:45:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd11"),
    reviewerId: ObjectId("665b1a1a1234567890abcd03"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde5"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde1"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde8"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 5,
      usefulnessScore: 4
    },

    instructorRating: {
      overallScore: 4,
      teachingSkills: 4,
      communicationSkills: 4,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "OOP is a.txt bit difficult but explained very thoroughly. Need time to fully understand.",
      instructorFeedback: "Professor is very patient and ready to answer questions.",
      improvementSuggestions: "Could have more hands-on workshops."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-19T11:30:00Z"),
    isAnonymousReview: true,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-19T11:30:00Z"),
    updatedAt: ISODate("2025-05-19T11:30:00Z")
  },

  // Reviews for CS201-M1
  {
    _id: ObjectId("665b1a1e1234567890abcd12"),
    reviewerId: ObjectId("665b1a1a1234567890abcd01"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde6"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde2"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde9"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 4,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 4,
      teachingSkills: 4,
      communicationSkills: 3,
      responsivenessScore: 4,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Data structures are presented logically and easy to understand.",
      instructorFeedback: "Ms. Hoa has deep specialized knowledge but sometimes speaks a.txt bit fast.",
      improvementSuggestions: "Should slow down a.txt bit when explaining."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-20T08:45:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-20T08:45:00Z"),
    updatedAt: ISODate("2025-05-20T08:45:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd13"),
    reviewerId: ObjectId("665b1a1a1234567890abcd02"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde6"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde2"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde9"),

    contentRating: {
      overallScore: 5,
      clarityScore: 5,
      relevanceScore: 5,
      difficultyLevel: 3,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Very good! Basic to advanced approach is excellent.",
      instructorFeedback: "Ms. Hoa teaches very vividly and easy to understand.",
      improvementSuggestions: "Continue maintaining this teaching style."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-21T13:20:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-21T13:20:00Z"),
    updatedAt: ISODate("2025-05-21T13:20:00Z")
  },

  // Reviews for CS201-M2
  {
    _id: ObjectId("665b1a1e1234567890abcd14"),
    reviewerId: ObjectId("665b1a1a1234567890abcd02"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde7"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde2"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde9"),

    contentRating: {
      overallScore: 3,
      clarityScore: 3,
      relevanceScore: 4,
      difficultyLevel: 5,
      usefulnessScore: 4
    },

    instructorRating: {
      overallScore: 4,
      teachingSkills: 4,
      communicationSkills: 3,
      responsivenessScore: 4,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Trees and graphs section is quite complex, need a.txt lot of time to understand.",
      instructorFeedback: "Ms. Hoa has good knowledge but needs to explain slower.",
      improvementSuggestions: "Should have more illustrative exercises for each algorithm."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-22T15:10:00Z"),
    isAnonymousReview: true,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-22T15:10:00Z"),
    updatedAt: ISODate("2025-05-22T15:10:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd15"),
    reviewerId: ObjectId("665b1a1a1234567890abcd04"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde7"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde2"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcde9"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 5,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 4,
      teachingSkills: 4,
      communicationSkills: 4,
      responsivenessScore: 4,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Advanced content, very useful for future career.",
      instructorFeedback: "Ms. Hoa is very professional and experienced.",
      improvementSuggestions: "Could add more real-world application examples."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-23T10:25:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-23T10:25:00Z"),
    updatedAt: ISODate("2025-05-23T10:25:00Z")
  },

  // Reviews for CS301-M1
  {
    _id: ObjectId("665b1a1e1234567890abcd16"),
    reviewerId: ObjectId("665b1a1a1234567890abcd01"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde9"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde3"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcdea"),

    contentRating: {
      overallScore: 5,
      clarityScore: 5,
      relevanceScore: 5,
      difficultyLevel: 3,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "AI introduction module is very attractive and updates new trends.",
      instructorFeedback: "Assoc.Prof. Giang has profound knowledge and excellent delivery method.",
      improvementSuggestions: "Perfect, continue developing in this direction."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-24T14:30:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-24T14:30:00Z"),
    updatedAt: ISODate("2025-05-24T14:30:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd17"),
    reviewerId: ObjectId("665b1a1a1234567890abcd04"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcde9"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde3"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcdea"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 4,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 4,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Very interesting content, opens up many new research directions.",
      instructorFeedback: "Prof. Giang has rich practical experience.",
      improvementSuggestions: "Could add demos of real AI applications."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-25T16:40:00Z"),
    isAnonymousReview: true,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-25T16:40:00Z"),
    updatedAt: ISODate("2025-05-25T16:40:00Z")
  },

  // Reviews for CS301-M2
  {
    _id: ObjectId("665b1a1e1234567890abcd18"),
    reviewerId: ObjectId("665b1a1a1234567890abcd01"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcdeb"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde3"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcdea"),

    contentRating: {
      overallScore: 4,
      clarityScore: 4,
      relevanceScore: 5,
      difficultyLevel: 5,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 4,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "Machine Learning is very practical and highly applicable.",
      instructorFeedback: "Prof. Giang has a.txt very good hands-on approach.",
      improvementSuggestions: "Need more lab time for more practice."
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-26T12:15:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-26T12:15:00Z"),
    updatedAt: ISODate("2025-05-26T12:15:00Z")
  },
  {
    _id: ObjectId("665b1a1e1234567890abcd19"),
    reviewerId: ObjectId("665b1a1a1234567890abcd04"),
    evaluatedModuleId: ObjectId("665b1a1c1234567890abcdeb"),
    evaluatedCourseId: ObjectId("665b1a1b1234567890abcde3"),
    evaluatedInstructorId: ObjectId("665b1a1d1234567890abcdea"),

    contentRating: {
      overallScore: 5,
      clarityScore: 5,
      relevanceScore: 5,
      difficultyLevel: 4,
      usefulnessScore: 5
    },

    instructorRating: {
      overallScore: 5,
      teachingSkills: 5,
      communicationSkills: 5,
      responsivenessScore: 5,
      knowledgeLevel: 5
    },

    textualFeedback: {
      contentFeedback: "ML module is excellent, combines theory and practice well.",
      instructorFeedback: "Assoc.Prof. Giang is one of the best instructors I've ever studied with.",
      improvementSuggestions: "Everything is wonderful!"
    },

    semesterPeriod: "Semester 1",
    academicYear: "2024-2025",
    submissionDate: ISODate("2025-05-27T09:50:00Z"),
    isAnonymousReview: false,
    isVerifiedReview: true,
    createdAt: ISODate("2025-05-27T09:50:00Z"),
    updatedAt: ISODate("2025-05-27T09:50:00Z")
  }
]);

// 3.1. Retrieve the list of reviews for a.txt specific module

