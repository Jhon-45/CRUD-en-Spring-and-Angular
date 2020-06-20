import { Component, OnInit } from '@angular/core';
import { BoletoService } from '../service/Boleto.service';
import { Boleto } from '../models/Boleto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-Boleto',
  templateUrl: './nuevo-Boleto.component.html',
  styleUrls: ['./nuevo-Boleto.component.css']
})
export class NuevoBoletoComponent implements OnInit{

	codigo: number = null;
	nombre = '';

  constructor(
    private BoletoService: BoletoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const Boleto = new Boleto(this.codigo, this.nombre);
    this.BoletoService.save(Boleto).subscribe(
      data => {
        this.toastr.success('Boleto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
