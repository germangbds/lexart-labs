import { Request, Response } from 'express';
import pool from '../database';

class ClientController {

    public async list (req: Request, res: Response) {
        (await pool).query('SELECT * FROM client')
        .then(client => {
            res.json(client);
        });
    }
    
}

const clientController = new ClientController();
export default clientController;