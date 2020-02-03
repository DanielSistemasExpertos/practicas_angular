import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    getUsuarios() {
        return [
            {
            "nombre": "Daniel Ángel",
            "edad": 20,
            "hobby": "gym"
            },
            {
            "nombre": "Ezequiel Ángel",
            "edad": 26,
            "hobby": "Leer biblia"
            },
            {
            "nombre": "Ruth Ángel",
            "edad": 36,
            "hobby": "Psicologia"
            }
        ];
    }
}