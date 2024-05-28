import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalesService } from '../services/hospitales.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Hospital } from '../models/hospital';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hospitales-nuevo',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule],
  templateUrl: './hospitales-nuevo.component.html',
  styleUrl: './hospitales-nuevo.component.scss'
})
export class HospitalesNuevoComponent implements OnInit{
  hospitalForm: FormGroup;
  constructor(
  private fb: FormBuilder,
  private hospitalesService: HospitalesService,
  private snackBar: MatSnackBar
  ) {
    this.hospitalForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.hospitalForm.valid) {
      const nuevoHospital: Hospital = this.hospitalForm.value;
      this.hospitalesService.add(nuevoHospital).subscribe({
        next: (data) => {
          this.snackBar.open('Hospital creado exitosamente', 'Cerrar', {
            duration: 3000
          });
          this.hospitalForm.reset();
        },
        error: (error) => {
          console.error('Error al crear el hospital', error);
          this.snackBar.open('Error al crear el hospital', 'Cerrar', {
            duration: 3000
          });
        }
      });
    } 
  } 
} 
