import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from 'src/dtos/create-users-dto';

@Injectable()
export class UsersService {

    constructor(
        private prisma: PrismaService
    ){}

    async createUser(dto: CreateUserDTO){
       const userCreated = await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email
            }
        })
        return {
            message: 'Usuário criado com sucesso!',
            data: userCreated
        } 
    }
    

    async getAllUsers(): Promise<CreateUserDTO[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async updateUser(id: number, dto: CreateUserDTO): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: {
                name: dto.name ?? '',
                email: dto.email ?? ''
            }
        });
    }

    async deleteUser(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: { id }
        });
    }
}
