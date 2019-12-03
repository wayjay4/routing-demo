import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <div>
      <p>
        You selected department with id = {{departmentID}}
      </p>
      <p>
        <a (click)="goPrevious()">Previous</a>
        |
        <a (click)="goNext()">Next</a>
      </p>
      <p>
        <button (click)="gotoDepartments()">Back</button>
      </p>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
    public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.departmentID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentID = parseInt(params.get('id'));
    });
  }

  goPrevious(){
    var previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID]);
  }

  goNext(){
    var nextID = this.departmentID + 1;
    this.router.navigate(['/departments', nextID])
  }

  gotoDepartments(){
    var selectedID = this.departmentID ? this.departmentID : null;
    this.router.navigate(['/departments', {id: selectedID}]);
  }
}
