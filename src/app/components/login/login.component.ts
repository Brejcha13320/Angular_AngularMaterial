import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  loading = false;

  constructor( private snackBar: MatSnackBar, private router:Router ) { 
    this.formulario = new FormGroup({
      'usuario': new FormControl( '',
      [ Validators.required ]
      ),
      'password': new FormControl( '',
      [Validators.required]
      )
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.formulario.valid){
      this.fakeLoading();
    } else {
      this.error();
      this.formulario.reset();
    }
  }

  error(){
    this.snackBar.open('El Usuario o Contraseña son Invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout( ()=> {
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
