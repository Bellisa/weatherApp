import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-ngb-alert',
  templateUrl: './ngb-alert.component.html',
  styleUrls: ['./ngb-alert.component.css']
})
export class NgbAlertComponent implements OnInit {
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  @Input("information")
  public set information(val) {
    console.log(val)
    this._success.next(val);
  }

  ngOnInit(): void {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }
}
