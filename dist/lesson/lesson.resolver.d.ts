import { StudentService } from "src/student/student.service";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
export declare class LessonResolver {
    private lessonService;
    private studentService;
    constructor(lessonService: LessonService, studentService: StudentService);
    lessons(): Promise<Lesson[]>;
    lesson(id: string): Promise<Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(assignStudentsToLessonInput: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<import("../student/student.entity").Student[]>;
}
