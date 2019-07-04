import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { FakeBackendService } from './fake-backend.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [    
    AppComponent,
    SidebarComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    PageNotFoundComponent,
    UserListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
