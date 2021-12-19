import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity'
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRole } from './user-role.enum';
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto):  Promise<void> {
    const { firstname, lastname, username, email, password } = authCredentialsDto;

    //incrypt password using bcrypt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const user = this.create({ firstname, lastname, username, email, password: hashedPassword,  role: UserRole.USER, })

    try {
      await this.save(user);

    } catch (error) {

      console.log(error.code);
      if(error.code === 'ER_DUP_ENTRY') {
        //ER_DUP_ENTRY is error code for duplicate username(generate in catch error)
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }


  async createAdmin(authCredentialsDto: AuthCredentialsDto):  Promise<void> {
    const { firstname, lastname, username, email, password } = authCredentialsDto;

    //incrypt password using bcrypt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const user = this.create({ firstname, lastname, username, email, password: hashedPassword,  role: UserRole.ADMIN, })

    try {
      await this.save(user);

    } catch (error) {

      console.log(error.code);
      if(error.code === 'ER_DUP_ENTRY') {
        //ER_DUP_ENTRY is error code for duplicate username(generate in catch error)
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getUsers(): Promise<User[]> {

    const query = this.createQueryBuilder('user');

    const products = await query.getMany();
    return products;
  }
}
