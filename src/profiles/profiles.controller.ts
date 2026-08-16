import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from 'src/dtos/create-profile.dto';
import { UpdateProfileDto } from 'src/dtos/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() dto: CreateProfileDto) {
    return this.profilesService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profilesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProfileDto) {
    return this.profilesService.update(id, dto);
  }
}