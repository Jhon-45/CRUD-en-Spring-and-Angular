import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ProductoService } from '../service/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.lista().subscribe(
      data => {
        this.clientes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(Cli_cod: number) {
    this.clienteService.delete(Cli_cod).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCliente();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
