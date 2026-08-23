import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePlanDto } from 'src/dtos/create-plan-dto';
import { UpdatePlanDto } from 'src/dtos/update-plan-dto';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
    constructor(
        private service: PlansService
    ) { }

    @Post()
    async create(@Body() body: CreatePlanDto) {
        return await this.service.create(body);
    }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.service.findOne(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePlanDto) {
        await this.service.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.service.delete(id);
    }
}