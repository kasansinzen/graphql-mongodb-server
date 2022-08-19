import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolved } from './student.resolved';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  exports: [StudentService],
  providers: [StudentService, StudentResolved],
  controllers: [StudentController]
})
export class StudentModule {}
