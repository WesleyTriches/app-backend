import { IsString, IsNotEmpty, IsNumber, IsPositive, Length } from 'class-validator';

export class CreatePlanDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 60)
    name: string = '';

    @IsNumber()
    @IsPositive()
    price: number = 0;
}