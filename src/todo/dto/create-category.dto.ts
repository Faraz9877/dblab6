import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateCategoryDto {
  @ApiProperty({description:'Enter the name of the category: ', minLength: 1, default: 'Daily' ,maxLength:20})
  readonly name: string;

  @ApiProperty({description:'Enter the IDs of tasks: ', default: [1]})
  readonly taskIDs: number[];
}