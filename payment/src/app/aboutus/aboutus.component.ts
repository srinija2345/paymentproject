import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  companyDetails:any;
  constructor(private router: Router) { 
    this.companyDetails= {
      name:'DBS',
      logo:"https://miro.medium.com/max/1024/0*IcRywGBc7fMYbb2A.png"
  }
  }
  onRecent() {  
    this.router.navigate(['/login'])  
  }

  ngOnInit(): void {
  }

}
