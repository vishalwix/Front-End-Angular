import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private employeeService: EmployeeService, private router: Router, public dialog: MatDialog,
    private token: TokenStorageService, private snackBar:MatSnackBar) { }

  employees: Employee[];

  ngOnInit() {
    this.getEmployees();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
    this.snackBar.open('Employee deleted Successful','',{duration:1000, panelClass: ['green-snackbar', 'login-snackbar'], horizontalPosition: "right",
          verticalPosition: "top"});
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
