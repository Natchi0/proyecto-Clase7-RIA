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
  selector: 'app-hospitales-eliminar',
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
  templateUrl: './hospitales-eliminar.component.html',
  styleUrl: './hospitales-eliminar.component.scss'
})
export class HospitalesEliminarComponent {
  hospitalForm: FormGroup;
  constructor(
  private fb: FormBuilder,
  private hospitalesService: HospitalesService,
  private snackBar: MatSnackBar
  ) {
    this.hospitalForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.hospitalForm.valid) {
      if (window.confirm('¿Estás seguro de que quieres eliminar este hospital?')) {
        const id = this.hospitalForm.value.id;
        this.hospitalesService.delete(id).subscribe({
          next: (data) => {
            this.snackBar.open('Hospital eliminado exitosamente', 'Cerrar', {
              duration: 3000
            });
            this.hospitalForm.reset();
          },
          error: (error) => {
            console.error('Error al eliminar el hospital', error);
            this.snackBar.open('Error al eliminar el hospital', 'Cerrar', {
              duration: 3000
            });
          }
        });
      }
    }
  }
}
