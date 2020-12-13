import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateItemDto {
  @ApiProperty({description:'Enter the description of item: ', minLength: 1, default: 'Description' ,maxLength:500})
  readonly description: string;
}