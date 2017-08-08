import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BetterHighlightDirective} from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
