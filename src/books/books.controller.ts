import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import EditBookDto from './dto/edit-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  @ApiResponse({ status: 200, description: 'create book' })
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Delete('delete')
  @ApiResponse({ status: 200, description: 'delete book' })
  @ApiQuery({
    name: 'bookID',
    required: true,
    type: Number
  })
  deleteBook( @Query('bookID') bookID: number) {
    return this.booksService.delete(bookID);
  }
  @Put('put')
  @ApiResponse({ status: 200, description: 'edit book' })
  updateBook( @Body() book: EditBookDto) {
    return this.booksService.edit(book);
  }
  @Get()
  @ApiResponse({ status: 200, description: 'get all books' })
  getAll() {
    return this.booksService.getAllBooks();
  }
}