import { Router } from 'express';
import clientController from '../controllers/clientController';

class ClientRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clientController.list);
    }

}

const clientRoutes = new ClientRoutes();
export default clientRoutes.router;