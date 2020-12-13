import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateTaskDto from './dto/create-task.dto';
import EditTaskDto from './dto/edit-task.dto';
import CreateItemDto from './dto/create-item.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('category/post')
    @ApiResponse({ status: 200, description: 'create category' })
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('item/post')
    @ApiResponse({ status: 200, description: 'create item' })
    postItem( @Body() item: CreateItemDto) {
        return this.todoService.insertItem(item);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('tag/post')
    @ApiResponse({ status: 200, description: 'create tag' })
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.insertTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('task/post')
    @ApiResponse({ status: 200, description: 'create task' })
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete('task/delete')
    @ApiResponse({ status: 200, description: 'delete task' })
    @ApiQuery({
        name: 'taskID',
        required: true,
        type: Number
    })
    deleteTask( @Query('taskID') taskID: number) {
        return this.todoService.deleteTask(taskID);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put('task/put')
    @ApiResponse({ status: 200, description: 'edit task' })
    updateBook( @Body() task: EditTaskDto) {
        return this.todoService.editTask(task);
    }
}
