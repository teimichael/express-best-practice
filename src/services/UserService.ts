import {Service} from 'typedi';
import {UserRepository} from "../repositories/UserRepository";
import {User} from "../models/User";

@Service()
export class UserService {

    public findAll(): Promise<User[]> {
        return UserRepository.find();
    }

    public async retrieve(id: number): Promise<User | null> {
        return await UserRepository.findOneBy( {id});
    }

    public async create(user: User): Promise<User> {
        return await UserRepository.save(user);
    }

}
