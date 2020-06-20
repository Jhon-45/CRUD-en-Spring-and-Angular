import { Component, OnInit } from '@angular/core';
import { Boleto } from '../models/Boleto';
import { ProductoService } from '../service/Boleto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-Boleto',
  templateUrl: './lista-Boleto.component.html',
  styleUrls: ['./lista-Boleto.component.css']
})
export class ListaBoletoComponent implements OnInit {

  clientes: Boleto[] = [];

  constructor(
    private BoletoService: BoletoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarBoletos();
  }

  cargarBoletos(): void {
    this.BoletoService.lista().subscribe(
      data => {
        this.Boletos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(Cli_cod: number) {
    this.BoletoService.delete(Cli_cod).subscribe(
      data => {
        this.toastr.success('Boleto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarBoleto();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
