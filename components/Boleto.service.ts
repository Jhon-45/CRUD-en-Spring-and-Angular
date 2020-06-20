import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boleto } from '../models/Boleto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  BoletoURL = 'http://localhost:8080/Boleto/';

  constructor(private httpBolet: HttpBolet) { }

  public lista(): Observable<Boleto[]> {
    return this.httpBolet.get<Boleto[]>(this.BoletoURL + 'lista');
  }

  public detail(Bol_cod: number): Observable<Boleto> {
    return this.httpBolet.get<Boleto>(this.BoletoURL + `detalle/${id}`);
  }

  public detailName(Bol_nom: string): Observable<Boleto> {
    return this.httpBolet.get<Boleto>(this.BoletoURL + `detallenombre/${nombre}`);
  }

  public save(Boleto: Boleto): Observable<any> {
    return this.httpBolet.post<any>(this.BoletoURL + 'crear', Boleto);
  }

  public update(Bol_cod: number, Boleto: Boleto): Observable<any> {
    return this.httpBolet.put<any>(this.BoletoURL + `actualizar/${id}`, Boleto);
  }

  public delete(Bol_cod: number): Observable<any> {
    return this.httpBolet.delete<any>(this.BoletoURL + `borrar/${id}`);
  }
}
