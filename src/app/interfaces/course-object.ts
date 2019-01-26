export interface CourseObject {
  course?: Course;
  student?: Teacher;
  grade?: number;
  status?: string;
}

interface Course {
  code?: number;
  ordinal?: number;
  year?: number;
  subject?: Subject;
  teacher?: Teacher;
  section?: number;
}

interface Teacher {
  rut?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthdate?: string;
}

interface Subject {
  code?: string;
  name?: string;
  created?: string;
}