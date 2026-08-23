import { IsOptional, IsString, IsNotEmpty, IsDateString, IsUrl, IsInt, IsPositive} from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  fullName?: string;

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