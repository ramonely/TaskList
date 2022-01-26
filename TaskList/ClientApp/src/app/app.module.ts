import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ListTComponent } from './list-t/list-t.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ListTComponent,
    AddtaskComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'list-t', component: ListTComponent},
      { path: 'addtask', component: AddtaskComponent},
      { path: 'edit', component: EditComponent},
      { path: 'search', component: SearchComponent}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
