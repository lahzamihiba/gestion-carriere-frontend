import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  template: `
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="sidebar">
        <h2 class="text-xl font-bold mb-5">Dashboard</h2>
        <ul>
          <li class="bg-purple-500 text-white">Dashboard</li>
          <li>Overview</li>
          <li>Courses</li>
          <li>Students</li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <h1 class="text-2xl font-bold">Dashboard</h1>

        <!-- Cards -->
        <div class="grid grid-cols-4 gap-4 mt-5">
          <div class="stat-card bg-blue">Total Students: 1220</div>
          <div class="stat-card bg-red">Total Teachers: 120</div>
          <div class="stat-card bg-green">Total Courses: 15</div>
          <div class="stat-card bg-yellow">Faculty Room: 100</div>
        </div>

        <!-- Graphs -->
        <div class="grid grid-cols-2 gap-4 mt-5">
          <div class="bg-white p-5 shadow rounded">
            <ngx-charts-bar-vertical
              [results]="barChartData"
              [xAxis]="true"
              [yAxis]="true"
              [legend]="true"
              [showXAxisLabel]="true"
              [showYAxisLabel]="true"
              xAxisLabel="Year"
              yAxisLabel="Students">
            </ngx-charts-bar-vertical>
          </div>

          <div class="bg-white p-5 shadow rounded">
            <ngx-charts-pie-chart
              [results]="pieChartData"

              [legend]="true"
              [labels]="true">
            </ngx-charts-pie-chart>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: []
})
export class DashboardComponent {
  barChartData = [
    { name: '2017', value: 200 },
    { name: '2018', value: 300 },
    { name: '2019', value: 400 },
    { name: '2020', value: 600 },
    { name: '2021', value: 500 }
  ];

  pieChartData = [
    { name: 'Active Employees', value: 75 },
    { name: 'Inactive Employees', value: 25 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
}
