import { IsOptional, IsString, IsNumber, IsPositive, Length } from 'class-validator';

export class UpdatePlanDto {
    @IsOptional()
    @IsString()
    @Length(2, 60)
    name?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    price?: number;
}