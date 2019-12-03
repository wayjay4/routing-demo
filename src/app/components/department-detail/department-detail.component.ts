import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <div>
      <p>
        You selected department with id = {{departmentID}}
        <br />
        <button (click)="showOverview()">Overview</button> | <button (click)="showContact()">Contact</button>
      </p>

      <!-- Routed views go here -->
      <router-outlet></router-outlet>

      <p>
        <button (click)="goPrevious()">Previous</button>
        |
        <button (click)="goNext()">Next</button>
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
    //this.router.navigate(['/departments', previousID]);
    this.router.navigate(['../', previousID], {relativeTo: this.route});
  }

  goNext(){
    var nextID = this.departmentID + 1;
    //this.router.navigate(['/departments', nextID]);
    this.router.navigate(['../', nextID], {relativeTo: this.route})
  }

  gotoDepartments(){
    var selectedID = this.departmentID ? this.departmentID : null;
    //this.router.navigate(['/departments', {id: selectedID, test: 'testValue'}]);
    this.router.navigate(['../', {id: selectedID, test: 'testValue'}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
