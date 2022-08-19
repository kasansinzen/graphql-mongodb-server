import { Student } from './student.entity';
import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<Student[]>;
}
