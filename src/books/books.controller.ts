import { Body, Controller, Get, Post } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  @ApiResponse({ status: 200, description: 'create book' })
  postGenre( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Get()
  @ApiResponse({ status: 200, description: 'get all books' })
  getAll() {
    return this.booksService.getAllBooks();
  }
}