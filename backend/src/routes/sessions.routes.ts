
import { Router } from "express";

import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  try {
    const {email, password} = request.body;


    const authenticaseUser = new AuthenticateUserService();
    const { user } = await authenticaseUser.execute({
      email,
      password,
    })

    delete user.password;

    return response.json({ user });
  } catch (error) {
    return response.status(400).json({error: error.message})
  }
})

export default sessionsRouter;
