import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.css']
})
export class ErrorNotFoundComponent implements OnInit {
  path: string;
  constructor(private route: ActivatedRoute,) {
    this.path = '';
  }

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe(
      (data) => {
        console.log('path:' + data.path);
        this.path = data.path;
      }
    );
    // .subscribe((data: { path: string }) => {
    //   console.log('path:' + data.path);
    //   this.path = data.path;
    // });
  }

}
