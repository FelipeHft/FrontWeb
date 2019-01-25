import { Subject } from './subject';
import { Teacher } from './teacher';


export interface Course {
    code: number;
    ordinal: number;
    year: number;
    subject: Subject;
    teacher: Teacher;
    section: number;
  }