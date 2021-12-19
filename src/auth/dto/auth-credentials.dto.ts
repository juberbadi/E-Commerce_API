import { IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  // @IsString()
  // @MinLength(4)
  // @MaxLength(10)
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(16)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message: 'Passwords will contain at least 1 upper case letter, at least 1 lower case letter, at least 1 number or special character, MinLength 8 and MaxLength 16'})
  password: string;


}
