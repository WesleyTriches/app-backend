import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDTO } from 'src/dtos/create-users-dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService,
        private userService: UsersService) { }

    async login(email: string, password: string) {

        const user = await this.validate(email, password);
        if (!user) throw new UnauthorizedException('Credenciais inválidas');
        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }

    async validate(email: string, password: string) {
        //select na tabela where email = email
        //retorna objeto User (name, email, pwd)
        const user = await this.userService.findByEmail(email);
        if (!user) return null;
        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;
        const { passwordHash, ...safe } = user;
        return safe;
    }

    async register(dto: CreateUserDTO) {
        const user = await this.userService.createUser(dto);
        const payload = { sub: user.id, email: user.email, name: user.name };
        return {
            access_token: await this.jwt.signAsync(payload),
            user: payload,
        };
    }
}