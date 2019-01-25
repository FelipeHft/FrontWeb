import { Course } from './course';
import { Teacher } from './teacher';


export interface RootObject {
    course: Course;
    student: Teacher;
    grade: number;
    status: string;
  }
