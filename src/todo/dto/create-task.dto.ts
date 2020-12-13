import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTaskDto {
  @ApiProperty({description:'Enter the owner\'s ID: ', minLength: 1, default: 'User' ,maxLength:20})
  readonly userID: string;
  
  @ApiProperty({description:'Enter task type: (0: text, 1: items) ', minLength: 1, default: false ,maxLength:1})
  readonly taskType: boolean;

  @ApiProperty({description:'If you entered type = 0, enter the description of task: ', minLength: 1, default: 'Task' ,maxLength:500})
  readonly description: string;

  @ApiProperty({description:'If you entered type = 1, enter the IDs of items: ', default: [1]})
  readonly itemIDs: number[];

  @ApiProperty({description:'Enter the ID of the category: ', default: 1})
  readonly categoryID: number;

  @ApiProperty({description:'Enter the IDs of tags: ', default: [1]})
  readonly tagIDs: number[];
}