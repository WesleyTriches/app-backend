import { IsNotEmpty, Length } from "class-validator";
export class CreateUserDTO {
    
    @IsNotEmpty()
    @Length(3, 100)
    name: string = '';

    @IsNotEmpty()
    email: string = '';

    @IsNotEmpty()
    passwordHash: string = '';
}