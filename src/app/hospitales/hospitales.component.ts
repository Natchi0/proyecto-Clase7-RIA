import { Component, OnInit } from '@angular/core';
import { HospitalesService } from '../services/hospitales.service';
import { Hospital } from '../models/hospital';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-hospitales',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatInputModule],
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.scss'
})
export class HospitalesComponent implements OnInit {
  public hospitals: Array<Hospital> = [];

  constructor(private HospitalesService: HospitalesService) {}

  public displayedColumns: string[] = ['id', 'nombre', 'direccion']

  ngOnInit(): void {
    this.HospitalesService.get().subscribe({
      next: (data) => {
        this.hospitals = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
