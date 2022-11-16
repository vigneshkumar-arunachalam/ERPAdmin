import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastersComponent } from './masters/masters.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { Sidebar2Component } from './sidebar2/sidebar2.component';
import {MatIconModule} from '@angular/material/icon';
import { CustomerComponent } from './masters/customer/customer.component';
import { CustomernewallComponent } from './masters/customer/customernewall/customernewall.component';

import { ContractComponent } from './contract/contract.component';
import { AddComponent } from './contract/add/add.component';

import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

import { ContractmasterfileComponent } from './contract/contractmasterfile/contractmasterfile.component';
import { ContractclassificationComponent } from './contract/contractclassification/contractclassification.component';
import { ContractnameComponent } from './contract/contractname/contractname.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagementComponent } from './management/management.component';
import { UserManagementComponent } from './management/user-management/user-management.component';
import { AddUserComponent } from './management/user-management/add-user/add-user.component';
import { EditUserComponent } from './management/user-management/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MastersComponent,
    HeaderComponent,
    FooterComponent,

    NavbarComponent,
     SidebarComponent,
    
     Sidebar2Component,
     CustomerComponent,
     CustomernewallComponent,
   
     ContractComponent,
     AddComponent,
   
     ContractmasterfileComponent,
     ContractclassificationComponent,
     ContractnameComponent,
    
     LoginComponent,
     LogoutComponent,
     ManagementComponent,
     UserManagementComponent,
     AddUserComponent,
     EditUserComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,MatChipsModule,EditorModule, DragDropModule,
    HttpClientModule,MatIconModule, NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,MatFormFieldModule,MatAutocompleteModule,MatInputModule,MatSliderModule,
    AutocompleteLibModule,PdfViewerModule
  ],
  providers: [   [BnNgIdleService], { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
