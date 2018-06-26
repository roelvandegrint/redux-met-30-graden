import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageFilterComponent } from './message-filter/message-filter.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { IAppState } from './store/app-state.interface';
import { rootReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessagesEffects } from './store/messages/messages.effects';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    AddMessageComponent,
    MessageFilterComponent,
    MessageBoxComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<IAppState>(rootReducer),
    EffectsModule.forRoot([MessagesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
