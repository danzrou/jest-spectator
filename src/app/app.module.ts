import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirective } from './directives/my.directive';
import { MyComponent } from './components/my/my.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirective,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
