import { Component, OnInit } from '@angular/core';
import { Boleto } from '../models/Boleto';
import { BoletoService } from '../service/Boleto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-Boleto',
  templateUrl: './editar-Boleto.component.html',
  styleUrls: ['./editar-Boleto.component.css']
})
export class EditarBoletoComponent implements OnInit {

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
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this. BoletoService.update(id, this.Boleto).subscribe(
      data => {
        this.toastr.success('Boleto Actualizado', 'OK', {
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
