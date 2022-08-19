import { Controller, Get } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

  constructor(
    private studentService: StudentService
  ) { }

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }
}