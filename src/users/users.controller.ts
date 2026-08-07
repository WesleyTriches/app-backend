import { Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

//GET POST PUT DELETE = RESTFul

@Controller('api/users')
export class UsersController {
    constructor(
        private readonly prismaService: PrismaService,        
    ) { }

    @Post()
    async create() {
        const userCreated = await this.prismaService.user.create({
            data: {
                name: 'João da Silva',
                email: 'joaozin@jojo.com'
            }
        })
        return {
            message: 'Usuário criado com sucesso!',
            data: userCreated
        }
    }
}