import { IsInt, IsNotEmpty, IsOptional, IsString, IsDateString, IsUrl, IsPositive } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  userId!: number;

  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  planId?: number;
}