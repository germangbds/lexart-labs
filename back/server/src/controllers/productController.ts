import { Request, Response } from 'express';
import pool from '../database';

class ProductController {

    public async list (req: Request, res: Response) {
        (await pool).query('SELECT * FROM product')
        .then(product => {
            res.json(product);
        });
    }
    
}

const productController = new ProductController();
export default productController;