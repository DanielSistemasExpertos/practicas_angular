import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    // lista todos
    public list (req: Request, res: Response) {
        res.json({text:'Listando los juegos..'})
    }

    // lista uno
    public getOne (req: Request, res: Response) {
        res.json({text:'Listando el juego ' + req.params.id})
    }

    public create (req: Request, res: Response) {
        console.log(req.body);
        res.json({text: 'Creando un juego...'});
    }

    public update(req: Request, res: Response) {
        res.json({text: 'Actualiza el juego ' + req.params.id })
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Borrando el juego ' + req.params.id })
    }

}

export const gamesController = new GamesController();
export default gamesController;