import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Directive({
  selector: '[appShowControlAuth]'
})
export class ShowControlAuthDirective implements OnInit {
  condition: boolean;

  @Input() set appShowControlAuth(condition: boolean) {
    this.condition = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) { 
    
  }

  ngOnInit() {
    this.viewContainer.clear();
    console.log('sfsdfsdf')
    this.authService.currentUser$.subscribe(user =>{
      if (user && this.condition || !user && !this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
    
  }
}
