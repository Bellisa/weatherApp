import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/interfaces/IProfile';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app.profile.component.html',
  styleUrls: ['./app.profile.component.css']
})
export class AppProfileComponent {
  @Input()
  public profile: IProfile;
}

