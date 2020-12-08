import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateBookDto {
  @ApiProperty({description:'Enter the name of the book: ', minLength: 1, default: 'Book' ,maxLength:20})
  readonly name: string;

  @ApiProperty({description:'Enter the user\'s ID: ', default: 1})
  readonly userID: number;

  @ApiProperty({description:'Enter the ID of the genre: ', default: [1]})
  readonly genreIDs: number[];
}