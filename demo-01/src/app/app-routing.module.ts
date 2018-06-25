import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

const routes: Routes = [
  { path: '', component: MessageBoxComponent },
  { path: ':messageId', component: MessageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
