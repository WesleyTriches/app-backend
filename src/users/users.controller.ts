import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from 'src/dtos/create-users-dto';
import { User } from 'src/generated/prisma/browser';
import { UsersService } from './users.service';

//GET POST PUT DELETE = RESTFul

@Controller('users')
export class UsersController {
    constructor(
        private service : UsersService
    ) { }

    @Post()
    async create(@Body() body: CreateUserDTO) {
        await this.service.createUser(body); // sempre que tiver async, coloca await pra esperar o retorno e não ir pro resto do cod
    }

    @Get()
    async findAll() {
        return await this.service.getAllUsers();
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body:
        CreateUserDTO) {
        await this.service.updateUser(id, body);
    }
    
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.service.deleteUser(id);
    }
}