import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formulario: FormGroup;
  sexo: any[] = ['Masculino', 'Femenino'];

  constructor( private _usuarioService: UsuarioService,
               private router:Router,
               private snackBar: MatSnackBar ) {
    this.formulario = new FormGroup({
      'usuario': new FormControl('', [Validators.required]),
      'nombre': new FormControl('', [Validators.required]),
      'apellido': new FormControl('', [Validators.required]),
      'sexo': new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    let user: Usuario = {
      usuario: this.formulario.value.usuario,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      sexo: this.formulario.value.sexo
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);
    this.snackBar.open('El Usuario fue agregado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
