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
class GamesController {
    // lista todos por metodo GET http://localhost:3000/api/games/
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM games', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // lista uno http://localhost:3000/api/games/1
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "El juego no existe" });
                }
            });
        });
    }
    // crea un juego por metodo POST http://localhost:3000/api/games/ 
    // {
    // "title": "Detroid Become Human",
    // "description": "A PS4 game",
    // "image": "https://as.com/meristation/imagenes/2018/07/24/reportajes/1532455616_145240_1532506180_noticia_normal.jpg"
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ messaje: 'Juego guardado...' });
        });
    }
    //actualiza por id localhost:3000/api/games/1 usando POSTMAN por metodo PUT colocar en body la opcion raw y el objeto con los datos a actualizar
    // {
    //     "title": "Delta run",
    //     "description": "A RPG game",
    //     "image": "https://www.nextn.es/wp-content/uploads/2019/02/1902-14-Deltarune-Nintendo-Switch-01.jpg"
    // }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ messaje: 'El juego fue actualizado ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'EL juego fue eliminado ' + id });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
