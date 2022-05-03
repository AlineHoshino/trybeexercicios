// src/service/worldCupService.ts
import { IWorldCup } from '../Schemas/worldCup';
import WorldCupModel from '../model/worldCupModel';

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    const worldCups = await this.worldCupModel.getWorldCups();
    return worldCups;
  }
}

export default WorldCupService;