import { Request, Response } from 'express';
import pool from '../database';

class StockController {

    public async list (req: Request, res: Response) {
        (await pool).query('SELECT s.id, s.quantity, s.id_client, c.name AS name_client, s.id_product, p.name AS name_product, p.description, p.image, s.created_at, s.user  FROM  stock AS s JOIN product AS p ON s.id_product = p.id JOIN client AS c ON s.id_client = c.id')
        .then(rows => {

            const stocks = rows.map( (stock: any) => {
                const row = JSON.parse(JSON.stringify(stock));
                return {
                    id: row.id,
                    quantity: row.quantity,
                    client: {
                        id: row.id_client,
                        name: row.name_client
                    },
                    product: {
                        id: row.id_product,
                        name: row.name_product,
                        description: row.description,
                        image: row.image
                    },
                    created_at: row.created_at,
                    user: row.user
                }
            })

                res.json(stocks);

        });
    }

    public async getOne (req : Request, res : Response) : Promise<any> {
        const {id} =  req.params;
        (await pool).query('SELECT s.id, s.quantity, s.id_client, c.name AS name_client, s.id_product, p.name AS name_product, p.description, p.image, s.created_at, s.user  FROM  stock AS s JOIN product AS p ON s.id_product = p.id JOIN client AS c ON s.id_client = c.id WHERE s.id = ?' , [id])
        .then(rows => {       

            if(rows.length > 0){

                const row = JSON.parse(JSON.stringify(rows[0]));
                const stock = {
                    id: row.id,
                    quantity: row.quantity,
                    client: {
                        id: row.id_client,
                        name: row.name_client
                    },
                    product: {
                        id: row.id_product,
                        name: row.name_product,
                        description: row.description,
                        image: row.image
                    },
                    created_at: row.created_at,
                    user: row.user
                }

                res.json(stock);

            }else{
                res.status(404).json({text: "This stock not exist in DB"});
            }
        });
    }

    public async create (req: Request, res: Response): Promise<void> {
        (await pool).query('INSERT INTO stock set ?', [req.body]);
        res.json({message: 'Stock created'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} =  req.params;
        (await pool).query('UPDATE stock set ? WHERE id = ?' , [req.body, id]);
        res.json({message: 'Stock updated'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} =  req.params;
        (await pool).query('DELETE FROM stock WHERE id = ?' , [id]);
        res.json({message: 'Stock deleted'});
    }

}

const stockController = new StockController();
export default stockController;