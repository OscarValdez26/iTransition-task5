import { Router } from "express";
import {getData} from '../controllers/controller.js';

const router = Router();

router.post('/getusers',getData);

export default router;