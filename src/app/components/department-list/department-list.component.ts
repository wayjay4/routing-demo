import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <div>
      <h3>Department List</h3>
      <ul class="items">
        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedID;
  public testData;
  public departments = [
    {"id": 1, "name":"Angular"},
    {"id": 2, "name":"Node"},
    {"id": 3, "name":"MongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"Bootstrap"}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedID = parseInt(params.get('id'));
      this.testData = params.get('test');
    })

    console.log("this.testData"); console.dir(this.testData);
  }

  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedID;
  }
}
