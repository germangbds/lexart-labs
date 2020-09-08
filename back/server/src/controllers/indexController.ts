import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'Stock is /api/stock'})
    }
    
}

export const indexController = new IndexController();