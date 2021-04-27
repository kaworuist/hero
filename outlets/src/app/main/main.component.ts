import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toSet(): void {
    this.router.navigate(['/main', { outlets: { page: null }}]);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
