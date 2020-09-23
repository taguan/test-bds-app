import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardColumnComponent } from './board-column/board-column.component';
import { CardComponent } from './card/card.component';
import {CardProviderService} from './card-provider.service';
import { CardAdderComponent } from './card-adder/card-adder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardColumnComponent,
    CardComponent,
    CardAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CardProviderService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
