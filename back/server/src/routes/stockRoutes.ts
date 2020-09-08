import { Router } from 'express';
import stockController from '../controllers/stockController';

class StockRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', stockController.list);
        this.router.get('/:id', stockController.getOne);
        this.router.post('/', stockController.create);
        this.router.put('/:id', stockController.update);
        this.router.delete('/:id', stockController.delete);
    }

}

const stockRoutes = new StockRoutes();
export default stockRoutes.router;