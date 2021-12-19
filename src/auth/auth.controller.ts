import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ApiParam, ApiTags, ApiBearerAuth, ApiCreatedResponse , ApiResponse, ApiOkResponse, ApiUnauthorizedResponse} from '@nestjs/swagger';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { SignInDto } from './dto/signIn.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @Post('/user/signup')
  @ApiCreatedResponse({ description: 'Ok({message: User signUp})'})
  @ApiResponse({ status:400, description: 'Bad request({message: Validation Error})' })
  @ApiResponse({ status:409, description: 'Conflict error({message: User is already exists})' })
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/user/signin')
  @ApiCreatedResponse({ description: 'Ok({message: User signIn})'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized({message: Check your login credentials})' })
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.authService.singIn(signInDto);
  }

  @Post('/admin/signup')
  @ApiCreatedResponse({ description: 'Ok({message: Admin signUp})'})
  @ApiResponse({ status:400, description: 'Bad request({message: Validation Error})' })
  @ApiResponse({ status:409, description: 'Conflict error({message: User is already exists})' })
  signUpAdmin(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUpAdmin(authCredentialsDto);
  }

  @Post('/admin/signin')
  @ApiCreatedResponse({ description: 'Ok({message: User signIn})'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized({message: Check your login credentials})' })
  signInAdmin(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.authService.singInAdmin(signInDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Get('/admin/user')
  @ApiOkResponse({ description: 'The resource list have been successfully returned'})
  // @ApiResponse({ status:401, description: 'Unauthorized User' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized User' })
  getProducts(): Promise<User[]> {
    return this.authService.getUsers();
  }
}
