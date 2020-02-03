"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    // lista todos
    list(req, res) {
        res.json({ text: 'Listando los juegos..' });
    }
    // lista uno
    getOne(req, res) {
        res.json({ text: 'Listando el juego ' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        res.json({ text: 'Creando un juego...' });
    }
    update(req, res) {
        res.json({ text: 'Actualiza el juego ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Borrando el juego ' + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
