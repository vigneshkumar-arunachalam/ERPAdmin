import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters/masters.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { CustomerComponent } from './masters/customer/customer.component';
import { CustomernewallComponent } from './masters/customer/customernewall/customernewall.component';

import { ContractComponent } from './contract/contract.component';
import { AddComponent } from './contract/add/add.component';

import { ContractmasterfileComponent } from './contract/contractmasterfile/contractmasterfile.component';
import { ContractclassificationComponent } from './contract/contractclassification/contractclassification.component';
import { ContractnameComponent } from './contract/contractname/contractname.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagementComponent } from './management/management.component';
import { UserManagementComponent } from './management/user-management/user-management.component';
import { AddUserComponent } from './management/user-management/add-user/add-user.component';


const routes: Routes = [
  {
    path: '', component: UserManagementComponent
  },
  
  {
    path: 'adduser', component: AddUserComponent
  },
  {
    path: 'usermanagements', component: ManagementComponent
  },
  {
    path: 'usermanagement', component: UserManagementComponent
  },
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  
 

 
  
  {
    path: 'contractname', component: ContractnameComponent
  },
  {
    path: 'Contractclassification', component: ContractclassificationComponent 
  },
  {
    path: 'contractmasterfile', component: ContractmasterfileComponent 
  },

  
 
  {
    path: 'addcontract', component: AddComponent
  },
  
  {
    path: 'contract', component: ContractComponent
  },
  
 
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'customernewall', component: CustomernewallComponent
  },
 
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'sidebar', component: SidebarComponent
  }, 
  {
    path: 'sidebar2', component: Sidebar2Component
  },
  {
    path:'masters',component:MastersComponent
  }
  ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
