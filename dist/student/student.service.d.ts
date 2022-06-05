import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getStudents(): Promise<Student[]>;
    getStudent(id: string): Promise<Student>;
    createStudent(craeteStudentInput: CreateStudentInput): Promise<Student>;
    getManyStudents(studentIds: string[]): Promise<Student[]>;
}
