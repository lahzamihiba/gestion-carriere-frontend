import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {UserProfile} from '../../services/keycloak/user-profile';
import { MatHeaderRowDef, MatRowDef } from '@angular/material/table';

@Component({
  selector: 'app-users-table',
  templateUrl: 'user-table.component.html',
  styleUrls: ['user-table.component.css'],  imports: [
    MatTable,MatRowDef,MatHeaderRowDef
  ],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource<UserProfile>([]);

  //dataSource: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        console.log("Données chargées:", users);
        if (users.length > 0) {
          console.log("Structure d'un utilisateur:", users[0]);
        }
        this.dataSource.data = users;
      },
      error: (error) => {
        console.error('Erreur de chargement des utilisateurs:', error);
      }
    });
  }

}
