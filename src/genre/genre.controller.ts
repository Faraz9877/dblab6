import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreServices from './genre.services';
import CreateGenreDto from './dto/create-genre.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @Post('post')
  @ApiResponse({ status: 200, description: 'create genre' })
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @Get()
  @ApiResponse({ status: 200, description: 'get all genres' })
  getAll() {
    return this.genreServices.getAllGenre();
  }
}