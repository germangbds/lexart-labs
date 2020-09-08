"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class StockController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield database_1.default).query('SELECT s.id, s.quantity, s.id_client, c.name AS name_client, s.id_product, p.name AS name_product, p.description, p.image, s.created_at, s.user  FROM  stock AS s JOIN product AS p ON s.id_product = p.id JOIN client AS c ON s.id_client = c.id')
                .then(rows => {
                const stocks = rows.map((stock) => {
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
                    };
                });
                res.json(stocks);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('SELECT s.id, s.quantity, s.id_client, c.name AS name_client, s.id_product, p.name AS name_product, p.description, p.image, s.created_at, s.user  FROM  stock AS s JOIN product AS p ON s.id_product = p.id JOIN client AS c ON s.id_client = c.id WHERE s.id = ?', [id])
                .then(rows => {
                if (rows.length > 0) {
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
                    };
                    res.json(stock);
                }
                else {
                    res.status(404).json({ text: "This stock not exist in DB" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield database_1.default).query('INSERT INTO stock set ?', [req.body]);
            res.json({ message: 'Stock created' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('UPDATE stock set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Stock updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('DELETE FROM stock WHERE id = ?', [id]);
            res.json({ message: 'Stock deleted' });
        });
    }
}
const stockController = new StockController();
exports.default = stockController;
