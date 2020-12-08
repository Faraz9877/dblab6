import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateGenreDto {
  @ApiProperty({description:'Enter the genre: ', minLength: 1, default: 'Genre' ,maxLength:20})
  readonly type: string;
}