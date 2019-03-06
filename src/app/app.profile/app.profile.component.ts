import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app.profile.component.html',
  styleUrls: ['./app.profile.component.css']
})
export class AppProfileComponent implements OnInit {
  @Input()
  public Profile: IProfile;

  ngOnInit() {
  }
}

