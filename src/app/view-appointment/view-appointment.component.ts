import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { Fitness } from "../modals/Fitness";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
})
export class ViewAppointmentComponent implements OnInit {
  users: Fitness[];

  constructor(private userservice: UserService, private router: Router) {}

  viewAppointment(id) {
    console.log(id);
    this.router.navigate([`/view/${id}`]);
  }

  ngOnInit() {
    this.userservice.getfitnessdata().subscribe((data) => {
      this.users = [];
      data.forEach(
        (value: {
          inr: number;
          paisa: number;
          streetaddress: string;
          city: string;
          state: string;
          country: string;
          pincode: number;
          phonenumber: number;
          email: string;
          firstname: string;
          lastname: string;
          age: number;
          trainerpreference: string;
          physiotherapist: string;
          packages: string;
          id: string;
        }) => {
          this.users.push(
            new Fitness(
              value.inr,
              value.paisa,
              value.streetaddress,
              value.city,
              value.state,
              value.country,
              value.pincode,
              value.phonenumber,
              value.email,
              value.firstname,
              value.lastname,
              value.age,
              value.trainerpreference,
              value.physiotherapist,
              value.packages,
              value.id
            )
          );
        }
      );
    });
  }
}
