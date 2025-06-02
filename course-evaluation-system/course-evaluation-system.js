// ===================================================================
// ALTERNATIVE: LET MONGODB AUTO-GENERATE ObjectIds
// ===================================================================

// Clear existing collections (optional)
db.students.deleteMany({});
db.courses.deleteMany({});
db.modules.deleteMany({});
db.instructors.deleteMany({});
db.reviews.deleteMany({});

// Step 1: Insert instructors and capture their IDs
const instructor1 = db.instructors.insertOne({
  instructorId: "INS001",
  name: "Dr. Pham Van D",
  email: "phamvand@university.edu",
  department: "Computer Science",
  modules: [],
  createdAt: new Date(),
  updatedAt: new Date()
});

const instructor2 = db.instructors.insertOne({
  instructorId: "INS002",
  name: "Prof. Hoang Thi E",
  email: "hoangthie@university.edu",
  department: "Information Technology",
  modules: [],
  createdAt: new Date(),
  updatedAt: new Date()
});

// Step 2: Insert courses and capture their IDs
const course1 = db.courses.insertOne({
  courseId: "CS101",
  courseName: "Introduction to Computer Science",
  courseCode: "CS101",
  department: "Computer Science",
  credits: 3,
  description: "Basic concepts of computer science",
  modules: [],
  createdAt: new Date(),
  updatedAt: new Date()
});

const course2 = db.courses.insertOne({
  courseId: "IT201",
  courseName: "Database Management Systems",
  courseCode: "IT201",
  department: "Information Technology",
  credits: 4,
  description: "Database design and management",
  modules: [],
  createdAt: new Date(),
  updatedAt: new Date()
});

// Step 3: Insert modules using the captured IDs
const module1 = db.modules.insertOne({
  moduleId: "MOD001",
  moduleName: "Programming Fundamentals",
  moduleCode: "CS101-M1",
  courseId: course1.insertedId,
  instructorId: instructor1.insertedId,
  description: "Basic programming concepts",
  createdAt: new Date(),
  updatedAt: new Date()
});

const module2 = db.modules.insertOne({
  moduleId: "MOD002",
  moduleName: "Data Structures",
  moduleCode: "CS101-M2",
  courseId: course1.insertedId,
  instructorId: instructor1.insertedId,
  description: "Introduction to data structures",
  createdAt: new Date(),
  updatedAt: new Date()
});

const module3 = db.modules.insertOne({
  moduleId: "MOD003",
  moduleName: "SQL Fundamentals",
  moduleCode: "IT201-M1",
  courseId: course2.insertedId,
  instructorId: instructor2.insertedId,
  description: "Basic SQL operations",
  createdAt: new Date(),
  updatedAt: new Date()
});

const module4 = db.modules.insertOne({
  moduleId: "MOD004",
  moduleName: "Database Design",
  moduleCode: "IT201-M2",
  courseId: course2.insertedId,
  instructorId: instructor2.insertedId,
  description: "Database design principles",
  createdAt: new Date(),
  updatedAt: new Date()
});

// Step 4: Insert students
const student1 = db.students.insertOne({
  studentId: "ST001",
  name: "Nguyen Van A",
  email: "nguyenvana@university.edu",
  courses: [course1.insertedId, course2.insertedId],
  createdAt: new Date(),
  updatedAt: new Date()
});

const student2 = db.students.insertOne({
  studentId: "ST002",
  name: "Tran Thi B",
  email: "tranthib@university.edu",
  courses: [course1.insertedId],
  createdAt: new Date(),
  updatedAt: new Date()
});

const student3 = db.students.insertOne({
  studentId: "ST003",
  name: "Le Van C",
  email: "levanc@university.edu",
  courses: [course2.insertedId],
  createdAt: new Date(),
  updatedAt: new Date()
});

// Step 5: Insert reviews
db.reviews.insertMany([
  {
    reviewId: "REV001",
    studentId: student1.insertedId,
    moduleId: module1.insertedId,
    courseId: course1.insertedId,
    instructorId: instructor1.insertedId,
    moduleRating: 4.5,
    instructorRating: 4.0,
    comments: "Good introduction to programming",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    reviewId: "REV002",
    studentId: student2.insertedId,
    moduleId: module1.insertedId,
    courseId: course1.insertedId,
    instructorId: instructor1.insertedId,
    moduleRating: 4.0,
    instructorRating: 4.5,
    comments: "Clear explanations",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    reviewId: "REV003",
    studentId: student1.insertedId,
    moduleId: module2.insertedId,
    courseId: course1.insertedId,
    instructorId: instructor1.insertedId,
    moduleRating: 3.5,
    instructorRating: 4.0,
    comments: "Challenging but rewarding",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    reviewId: "REV004",
    studentId: student3.insertedId,
    moduleId: module3.insertedId,
    courseId: course2.insertedId,
    instructorId: instructor2.insertedId,
    moduleRating: 5.0,
    instructorRating: 4.8,
    comments: "Excellent SQL course",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    reviewId: "REV005",
    studentId: student1.insertedId,
    moduleId: module4.insertedId,
    courseId: course2.insertedId,
    instructorId: instructor2.insertedId,
    moduleRating: 4.2,
    instructorRating: 4.5,
    comments: "Great database design concepts",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Step 6: Update courses and instructors with module references
db.courses.updateOne(
    { _id: course1.insertedId },
    { $set: { modules: [module1.insertedId, module2.insertedId] } }
);

db.courses.updateOne(
    { _id: course2.insertedId },
    { $set: { modules: [module3.insertedId, module4.insertedId] } }
);

db.instructors.updateOne(
    { _id: instructor1.insertedId },
    { $set: { modules: [module1.insertedId, module2.insertedId] } }
);

db.instructors.updateOne(
    { _id: instructor2.insertedId },
    { $set: { modules: [module3.insertedId, module4.insertedId] } }
);