import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course-dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
    constructor (private coursesService: CoursesService){}

    @Get()
    @ApiResponse({ status: 200, description: 'List of all courses' })
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseId')
    @ApiResponse({ status: 200, description: 'Course found' })
    async getCourse(@Param('courseId') courseId: string) {
        const course = await this.coursesService.getCourse(courseId);
        return course;
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Course created' })
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesService.addCourse(createCourseDto);
        return course;
    }

    @Delete()
    @ApiResponse({ status: 200, description: 'Course removed' })
    async deleteCourse(@Query('courseId') courseId: string) {
        const course = await this.coursesService.deleteCourse(courseId);
    }
}
