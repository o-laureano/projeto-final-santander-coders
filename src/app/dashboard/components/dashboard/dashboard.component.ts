import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../auth/services/appointment.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments = [
    { id: 1, date: '2024-05-20', time: '10:00', status: 'SCHEDULED' },
    { id: 2, date: '2024-05-21', time: '12:00', status: 'DONE' }
  ];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (data) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Erro ao carregar ', error);
      }
    );
  }

  markAsDone(appointmentId: number): void {
    console.log('Mark as done:', appointmentId);
    const appointment = this.appointments.find(app => app.id === appointmentId);
    if (appointment) {
      appointment.status = 'DONE';
      this.appointmentService.updateAppointment(appointmentId, appointment).subscribe(
        () => {
          this.loadAppointments();
        },
        (error) => {
          console.error('Erro ao marcar concluir', error);
        }
      );
    }
  }

  cancel(appointmentId: number): void {
    console.log('Cancel appointment:', appointmentId);
    const appointment = this.appointments.find(app => app.id === appointmentId);
    if (appointment) {
      appointment.status = 'CANCELED';
      this.appointmentService.updateAppointment(appointmentId, appointment).subscribe(
        () => {
          this.loadAppointments();
        },
        (error) => {
          console.error('Erro ao cancelar consulta', error);
        }
      );
    }
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe( //?????
      () => {
        this.loadAppointments();
      },
      (error) => {
        console.error('Erro ao deletar consulta', error);
      }
    );
  }

  editAppointment(appointment: any): void {
    // Lógica para editar uma consulta
    console.log('Editar consulta', appointment);
  }
}

