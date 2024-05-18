import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/api'; // URL base da API

  constructor(private http: HttpClient) {}

  // Método para obter todas as consultas
  getAppointments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/appointments`);
  }

  // Método para obter uma consulta específica
  getAppointment(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/appointments/${id}`);
  }

  // Método para criar uma nova consulta
  createAppointment(appointment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/appointments`, appointment);
  }

  // Método para atualizar uma consulta
  updateAppointment(id: number, appointment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/appointments/${id}`, appointment);
  }

  // Método para deletar uma consulta
  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/appointments/${id}`);
  }
}
