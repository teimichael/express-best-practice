import AppDataSource from "../db";

import { User } from '../models/User';

export const UserRepository = AppDataSource.getRepository(User).extend({

});
