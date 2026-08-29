import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/dtos/create-users-dto';

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) { }
    
    @Post('login')
    login(@Body() dto: { email: string; password: string }) {
        return this.auth.login(dto.email, dto.password);
    }
    @Post('register')
    register(@Body() dto: CreateUserDTO) {
        return this.auth.register(dto);
    }
}