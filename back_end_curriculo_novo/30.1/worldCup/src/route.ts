// src/routes.ts
import { Router } from 'express';

import WorldCupController from './controller/worldCupController';

const worldCupController = new WorldCupController();

const router = Router();

router.get('/', worldCupController.getWorldCups);

export default router;