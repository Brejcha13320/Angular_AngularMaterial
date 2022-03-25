import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: '230181016', nombre: 'Jesus David', apellido: "Mejia", sexo: 'Masculino'},
    {usuario: '230181015', nombre: 'Juan David', apellido: "Vergara", sexo: 'Masculino'},
    {usuario: '230181014', nombre: 'Carlos David', apellido: "Ruiz", sexo: 'Femenino'},
    {usuario: '230181013', nombre: 'Mateo David', apellido: "Galvez", sexo: 'Masculino'}
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios;
  }

  deleteUsuario(index:number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
