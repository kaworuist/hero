import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis|undefined;
  gotoCrises(): void {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crises', { id: crisisId, foo: 'foo' }]);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    this.crisis = this.service.getCrisis(id);
  }

}
