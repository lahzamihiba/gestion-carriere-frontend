import { Component, OnInit } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { LeadService, Lead } from '../../services/lead.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-leads-table',
  templateUrl: 'leads-table-component.component.html',
  imports: [
    MatTable
  ],
  styleUrls: ['leads-table-component.component.css']
})
export class LeadsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'company', 'phone', 'email', 'addedBy', 'list'];
  dataSource = new MatTableDataSource<Lead>([]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this..getUsers().subscribe({
      next: () => {
        this.dataSource.data = leads;
      },
      error: (error) => {
        console.error('Erreur de chargement des leads:', error);
      },
      complete: () => {
        console.log('Chargement des leads terminé');
      }
    });

  }
}
