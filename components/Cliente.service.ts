import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'lista');
  }

  public detail(Cli_cod: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `detalle/${id}`);
  }

  public detailName(nom_cliente: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `detallenombre/${nombre}`);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + 'crear', cliente);
  }

  public update(Cli_cod: number, cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + `actualizar/${id}`, cliente);
  }

  public delete(Cli_cod: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `borrar/${id}`);
  }
}
