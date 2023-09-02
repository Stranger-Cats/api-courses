import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
    @ApiProperty({ type: Number, description: 'ID' })
    readonly id: number;
    @ApiProperty({ type: String, description: 'Title of the course' })
    readonly title: string;
    @ApiProperty({ type: String, description: 'Description of the course' })
    readonly description: string;
}
