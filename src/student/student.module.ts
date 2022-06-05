import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolved } from './student.resolved';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  exports: [StudentService],
  providers: [StudentService, StudentResolved]
})
export class StudentModule {}
