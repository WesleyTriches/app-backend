import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service'; 
import { CreateProfileDto } from 'src/dtos/create-profile.dto';
import { UpdateProfileDto } from 'src/dtos/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProfileDto) {
    const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
    if (!user) {
      throw new BadRequestException(`Usuário com id ${dto.userId} não existe.`);
    }

    const existingProfile = await this.prisma.profile.findUnique({
      where: { userId: dto.userId },
    });
    if (existingProfile) {
      throw new ConflictException('Este usuário já possui um perfil.');
    }

    return this.prisma.profile.create({
      data: {
        userId: dto.userId,
        fullName: dto.fullName,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
        avatarUrl: dto.avatarUrl,
      },
    });
  }

  async findOne(id: number) {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`Perfil com id ${id} não encontrado.`);
    }
    return profile;
  }

  async update(id: number, dto: UpdateProfileDto) {
    await this.findOne(id); // lança 404 se não existir

    return this.prisma.profile.update({
      where: { id },
      data: {
        fullName: dto.fullName,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
        avatarUrl: dto.avatarUrl,
      },
    });
  }
}