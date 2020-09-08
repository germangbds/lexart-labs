import { Router } from 'express';
import productController from '../controllers/productController';

class ProductRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productController.list);
    }

}

const productRoutes = new ProductRoutes();
export default productRoutes.router;