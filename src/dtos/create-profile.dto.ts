import { IsInt, IsNotEmpty, IsOptional, IsString, IsDateString, IsUrl } from 'class-validator';

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
}