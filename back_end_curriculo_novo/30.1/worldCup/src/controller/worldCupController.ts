// src/controller/worldCupController.ts
import { Request, Response } from 'express';
import WorldCupService from '../service/worldCupService';

class WorldCupController {
  constructor(private worldCupService = new WorldCupService()) {}

  serverError = 'Internal Server Error';

  public getWorldCups = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const worldCups = await this.worldCupService.getWorldCups();
      return res.status(200).send(worldCups);
    } catch (error) {
      return res.status(500).send(this.serverError);
    }
  };
}

export default WorldCupController;