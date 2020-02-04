import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    // lista todos por metodo GET http://localhost:3000/api/games/
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    // lista uno http://localhost:3000/api/games/1
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
       await pool.query('SELECT * FROM games WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({ text: "El juego no existe" });
            }
            
        });
    }

    // crea un juego por metodo POST http://localhost:3000/api/games/ 
    // {
	// "title": "Detroid Become Human",
	// "description": "A PS4 game",
	// "image": "https://as.com/meristation/imagenes/2018/07/24/reportajes/1532455616_145240_1532506180_noticia_normal.jpg"
    // }
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({messaje: 'Juego guardado...'});
    }
    //actualiza por id localhost:3000/api/games/1 usando POSTMAN por metodo PUT colocar en body la opcion raw y el objeto con los datos a actualizar
    // {
    //     "title": "Delta run",
    //     "description": "A RPG game",
    //     "image": "https://www.nextn.es/wp-content/uploads/2019/02/1902-14-Deltarune-Nintendo-Switch-01.jpg"
    // }
    public async update(req: Request, res: Response): Promise<void> {
       const { id } = req.params;
       await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
       res.json({messaje: 'El juego fue actualizado '+id})

    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'EL juego fue eliminado ' + id })
    }

}

export const gamesController = new GamesController();
export default gamesController;