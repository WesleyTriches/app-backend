import { CanActivate, ExecutionContext, Injectable, UnauthorizedException }
    from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwt: JwtService) { }

    canActivate(ctx: ExecutionContext): boolean {

        const req = ctx.switchToHttp().getRequest<any>();

        // libera preflight CORS
        const method = (req.method || '').toUpperCase();

        if (method === 'OPTIONS') return true;
        const url = String(req.originalUrl || req.url || '');

        //liberar somente estas duas rotas
        if (url.includes('/auth/login') || url.includes('/auth/register')) return true;

        // exige Authorization: Bearer <token>
        const auth = String(req.headers?.authorization || '');
        if (!auth.startsWith('Bearer ')) {
            throw new UnauthorizedException('Bearer token ausente');
        }
        
        const token = auth.slice(7).trim();
        try {
            req.user = this.jwt.verify(token); // valida assinatura/expiração
            return true;
        } catch {
            throw new UnauthorizedException('Token inválido ou expirado');
        }
    }
}