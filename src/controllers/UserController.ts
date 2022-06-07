import {JsonController, Param, Body, Get, Post} from 'routing-controllers';
import {UserService} from "../services/UserService";
import {Service} from "typedi";
import {User} from "../models/User";
import {IsNotEmpty, IsPositive} from "class-validator";

export class CreateUserBody {
    @IsNotEmpty()
    public firstname: string;

    @IsNotEmpty()
    public lastname: string;

    @IsPositive()
    public age: number;
}

@JsonController('/users')
@Service()
export class UserController {

    constructor(
        private userService: UserService
    ) {
    }

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.userService.retrieve(id)
    }

    @Post()
    create(@Body() body: CreateUserBody) {
        const user = new User();
        user.firstname = body.firstname;
        user.lastname = body.lastname;
        user.age = body.age;

        return this.userService.create(user);
    }

}


