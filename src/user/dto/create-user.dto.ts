import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateUserDto {
  @ApiProperty({description:'Enter the user\'s name: ', minLength: 1, default: 'User' ,maxLength:20})
  readonly name: string;
  
  @ApiProperty({description:'Enter the ID of the books: ', default: [1]})
  readonly books: number[];

  @ApiProperty({description:'Enter the user\'s password: ', minLength: 4, default: 'User' ,maxLength:20})
  readonly password: string;
}