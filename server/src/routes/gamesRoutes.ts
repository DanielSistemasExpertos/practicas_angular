import { Router } from 'express';

import gamesController from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    // metodo con ruta por defecto
    config(): void {
        //listar
        this.router.get('/', gamesController.list );
        //listar
        this.router.get('/:id', gamesController.getOne );
        //crear
        this.router.post('/', gamesController.create);
        //actualizar
        this.router.put('/:id', gamesController.update);
        //borrar
        this.router.delete('/:id', gamesController.delete);
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;