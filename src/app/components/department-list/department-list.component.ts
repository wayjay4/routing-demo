import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <div>
      <h3>Department List</h3>
      <ul class="items">
        <li *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    {"id": 1, "name":"Angular"},
    {"id": 2, "name":"Node"},
    {"id": 3, "name":"MongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"Bootstrap"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
