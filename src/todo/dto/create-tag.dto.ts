import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTagDto {
  @ApiProperty({description:'Enter the name of the tag: ', minLength: 1, default: 'Tag' ,maxLength:20})
  readonly name: string;

  @ApiProperty({description:'Enter the ID of the task: ', default: 1})
  readonly taskID: number;
}