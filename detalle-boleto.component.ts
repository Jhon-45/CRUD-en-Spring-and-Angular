import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/Boleto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Boleto } from '../models/Boleto';

@Component({
  selector: 'app-detalle-Boleto',
  templateUrl: './detalle-Boleto.component.html',
  styleUrls: ['./detalle-Boleto.component.css']
})
export class DetalleClienteComponent implements OnInit {

  Boleto: Boleto = null;

  constructor(
    private BoletoService: BoletoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.BoletoService.detail(id).subscribe(
      data => {
        this.Boleto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
