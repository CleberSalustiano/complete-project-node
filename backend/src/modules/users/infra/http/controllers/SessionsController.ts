// index, show, create, update, delete
import { Request, Response } from "express";

import {container} from "tsyringe"

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response):Promise<Response> {
    const { email, password } = request.body;


    const authenticaseUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticaseUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}
