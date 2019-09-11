import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './containers/user-details/user-details.component';
import { UserDetailsFormComponent } from './componets/user-details-form/user-details-form.component';
import { BanUserRoutingModule } from './ban-user.routes';

const COMPONENTS = [ 
  UserDetailsComponent,
  UserDetailsFormComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [BanUserRoutingModule]
})
export class BanUserModule { }
