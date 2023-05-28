import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
