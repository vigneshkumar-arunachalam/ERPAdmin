import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import Swal from 'sweetalert2';
declare var iziToast: any;
declare var $: any;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public birthdate: any;
  public age: number;


  //Permission -checkbox-Quotation New
  role_drop_val: any;
  groupSelectCommonId_quotation_per: any;
  checkbox_value_quotation_per: any;
  edit_array_quotation_per: any = [];
  //Permission -checkbox-Biller All
  groupSelectCommonId_BillerAll: any;
  checkbox_value_BillerAll: any;
  edit_array_BillerAll: any = [];
  //Permission -checkbox-Delivery Chellan
  groupSelectCommonId_DeliveryChelan: any;
  checkbox_value_DeliveryChelan: any;
  edit_array_DeliveryChelan: any = [];
  //Permission -checkbox-Quotation
  groupSelectCommonId_Quotation: any;
  checkbox_value_Quotation: any;
  edit_array_Quotation: any = [];
  //Permission - checkbox Group-Dashboard
  groupSelectCommonId_Dashboard: any;
  checkbox_value_Dashboard: any;
  edit_array_Dashboard: any = [];
  //Permission - checkbox Group-Purchase Order
  groupSelectCommonId_PurchaseOrder: any;
  checkbox_value_PurchaseOrder: any;
  edit_array_PurchaseOrder: any = [];
  //Permission - checkbox Group-Credit Note
  groupSelectCommonId_CreditNote: any;
  checkbox_value_CreditNote: any;
  edit_array_CreditNote: any = [];
  //Permission - checkbox Group-Purchase Entry
  groupSelectCommonId_PurchaseEntry: any;
  checkbox_value_PurchaseEntry: any;
  edit_array_PurchaseEntry: any = [];
  //Permission - checkbox Group-CRM Enquiry
  groupSelectCommonId_CRMEnquiry: any;
  checkbox_value_CRMEnquiry: any;
  edit_array_CRMEnquiry: any = [];
  //Permission - checkbox Group-Customer Leads
  groupSelectCommonId_CustomerLeads: any;
  checkbox_value_CustomerLeads: any;
  edit_array_CustomerLeads: any = [];
  //Permission - checkbox Group-Contract Biller
  groupSelectCommonId_ContractBiller: any;
  checkbox_value_ContractBiller: any;
  edit_array_ContractBiller: any = [];

  //Permission - checkbox Group-Deposits
  groupSelectCommonId_Deposits: any;
  checkbox_value_Deposits: any;
  edit_array_Deposits: any = [];
  //Permission - checkbox Group-Withdrawal
  groupSelectCommonId_Withdrawal: any;
  checkbox_value_Withdrawal: any;
  edit_array_Withdrawal: any = [];
  //Permission - checkbox Group-Non Trade Purchase Entry
  groupSelectCommonId_NonTradePurchaseEntry: any;
  checkbox_value_NonTradePurchaseEntry: any;
  edit_array_NonTradePurchaseEntry: any = [];
  //Permission - checkbox Group-Calendar Template
  groupSelectCommonId_CalendarTemplate: any;
  checkbox_value_CalendarTemplate: any;
  edit_array_CalendarTemplate: any = [];
  //Permission - checkbox Group-Transaction Salary
  groupSelectCommonId_TransactionSalary: any;
  checkbox_value_TransactionSalary: any;
  edit_array_TransactionSalary: any = [];
  //Permission - checkbox Group-Transaction Petty Cash
  groupSelectCommonId_TransactionPettyCash: any;
  checkbox_value_TransactionPettyCash: any;
  edit_array_TransactionPettyCash: any = [];
  //Permission - checkbox Group-Transaction Entry
  groupSelectCommonId_TransactionEntry: any;
  checkbox_value_TransactionEntry: any;
  edit_array_TransactionEntry: any = [];
  //Permission - checkbox Group-Transaction Approval
  groupSelectCommonId_TransactionApproval: any;
  checkbox_value_TransactionApproval: any;
  edit_array_TransactionApproval: any = [];
  //Permission - checkbox Group-Trans Approval Data Center
  groupSelectCommonId_TransApprovalDataCenter: any;
  checkbox_value_TransApprovalDataCenter: any;
  edit_array_TransApprovalDataCenter: any = [];
  //Permission - checkbox Group-License Key
  groupSelectCommonId_LicenseKey: any;
  checkbox_value_LicenseKey: any;
  edit_array_LicenseKey: any = [];
  //Permission - checkbox Group-VS Provisioning
  groupSelectCommonId_VSProvisioning: any;
  checkbox_value_VSProvisioning: any;
  edit_array_VSProvisioning: any = [];
  //Permission - checkbox Group-Product Stock
  groupSelectCommonId_ProductStock: any;
  checkbox_value_ProductStock: any;
  edit_array_ProductStock: any = [];
  //Permission - checkbox Group-Reseller Product Price
  groupSelectCommonId_ResellerProduct: any;
  checkbox_value_ResellerProduct: any;
  edit_array_ResellerProduct: any = [];
  //Permission - checkbox Group-Product Stock Transfer Alet
  groupSelectCommonId_ProductStockTransferAlet: any;
  checkbox_value_ProductStockTransferAlet: any;
  edit_array_ProductStockTransferAlet: any = [];
  //Permission - checkbox Group-Stock PreApproval
  groupSelectCommonId_StockPreApproval: any;
  checkbox_value_StockPreApproval: any;
  edit_array_StockPreApproval: any = [];
  //Permission - checkbox Group-DID Inventory Product
  groupSelectCommonId_DIDInventoryProduct: any;
  checkbox_value_DIDInventoryProduct: any;
  edit_array_DIDInventoryProduct: any = [];
  //Permission - checkbox Group-Customer Project
  groupSelectCommonId_CustomerProject: any;
  checkbox_value_CustomerProject: any;
  edit_array_CustomerProject: any = [];
  //Permission - checkbox Group-Customer Master
  groupSelectCommonId_CustomerMaster: any;
  checkbox_value_CustomerMaster: any;
  edit_array_CustomerMaster: any = [];
  //Permission - checkbox Group-Recurring Checker List
  groupSelectCommonId_RecurringCheckerList: any;
  checkbox_value_RecurringCheckerList: any;
  edit_array_RecurringCheckerList: any = [];
  //Permission - checkbox Group-Guru Details
  groupSelectCommonId_GuruDetails: any;
  checkbox_value_GuruDetails: any;
  edit_array_GuruDetails: any = [];

   //Permission - checkbox Group-Call Log
   groupSelectCommonId_CallLog: any;
   checkbox_value_CallLog: any;
   edit_array_CallLog: any = [];
 
   //Permission - checkbox Group-DC Delivery Chellan
   groupSelectCommonId_DC: any;
   checkbox_value_DC: any;
   edit_array_DC: any = [];
   
   //Permission - checkbox Group-Email Notification
   groupSelectCommonId_EmailNotification: any;
   checkbox_value_EmailNotification: any;
   edit_array_EmailNotification: any = [];
 
   //Permission - checkbox Group-Email Notification
   groupSelectCommonId_TimeBooking: any;
   checkbox_value_TimeBooking: any;
   edit_array_TimeBooking: any = [];
 
   //Permission - checkbox Group-Trans Deposit Approval
   groupSelectCommonId_TransDepositApproval: any;
   checkbox_value_TransDepositApproval: any;
   edit_array_TransDepositApproval: any = [];





  //Transaction
  //Transaction_left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Show All'];
  Transaction_left = [{ 'name': 'Add New', 'id': '1101' }, { 'name': 'Edit', 'id': '1102' }, { 'name': 'Delete', 'id': '1103' }, { 'name': 'List', 'id': '1104' }, { 'name': 'Search', 'id': '1105' }, { 'Show All': 'Search', 'id': '1106' }];

  Transaction_Right = [];
  //TransactionApproval
  // TransactionApproval_Left = ['Reject', 'Task Approval', 'List', 'Quotation', 'Approval'];
  TransactionApproval_Left = [{ 'name': 'Approval', 'id': '1201' }, { 'name': 'Reject', 'id': '1202' }, { 'name': 'Task Approval', 'id': '1204' }, { 'name': 'List', 'id': '1203' }, { 'name': 'Quotation', 'id': '1205' }];
  TransactionApproval_Right = [];
  //TransactionDeposit
  TransactionDeposit_Left = [{ 'name': 'Add New', 'id': '1211' }, { 'name': 'Edit', 'id': '1212' }, { 'name': 'Delete', 'id': '1213' }, { 'name': 'List', 'id': '1214' }, { 'name': 'Search', 'id': '1215' }];
  TransactionDeposit_Right = [];
  //TransactionCommission
  TransactionCommission_Left = [{ 'name': 'Add New', 'id': '1291' }, { 'name': 'Edit', 'id': '1292' }, { 'name': 'Delete', 'id': '1293' }, { 'name': 'List', 'id': '1294' }, { 'name': 'Search', 'id': '1295' }];
  TransactionCommission_Right = [];
  //TransactionWithdrawal
  TransactionWithdrawal_Left = [{ 'name': 'Add New', 'id': '1221' }, { 'name': 'Edit', 'id': '1222' }, { 'name': 'Delete', 'id': '1223' }, { 'name': 'List', 'id': '1224' }, { 'name': 'Search', 'id': '1225' }];
  TransactionWithdrawal_Right = [];
  //TransactionPurchaseEntry
  TransactionPurchaseEntry_Left = [{ 'name': 'Add New', 'id': '1231' }, { 'name': 'Edit', 'id': '1232' }, { 'name': 'Delete', 'id': '1233' }, { 'name': 'List', 'id': '1234' }, { 'name': 'Search', 'id': '1235' }];
  TransactionPurchaseEntry_Right = [];
  //Transactionsalary
  Transactionsalary_Left = [{ 'name': 'Add New', 'id': '1241' }, { 'name': 'Edit', 'id': '1242' }, { 'name': 'Delete', 'id': '1243' }, { 'name': 'List', 'id': '1244' }, { 'name': 'Search', 'id': '1245' }];
  Transactionsalary_Right = [];
  //TransactionPettyCash
  TransactionPettyCash_Left = [{ 'name': 'Add New', 'id': '1251' }, { 'name': 'Edit', 'id': '1252' }, { 'name': 'Delete', 'id': '1253' }, { 'name': 'List', 'id': '1254' }, { 'name': 'Search', 'id': '1255' }, { 'name': 'Credit', 'id': '1256' }];

  TransactionPettyCash_Right = [];
  //Transaction Vendor Order
  TransactionVendorOrder_Left = [{ 'name': 'Add New', 'id': '1261' }, { 'name': 'Edit', 'id': '1262' }, { 'name': 'Delete', 'id': '1263' }, { 'name': 'List', 'id': '1264' }, { 'name': 'Search', 'id': '1265' }];
  TransactionVendorOrder_Right = [];
  //Transaction invoice Payment
  TransactionInvoicePayment_Left = [{ 'name': 'Add New', 'id': '1271' }, { 'name': 'Edit', 'id': '1272' }, { 'name': 'Delete', 'id': '1273' }, { 'name': 'List', 'id': '1274' }, { 'name': 'Search', 'id': '1275' }];
  TransactionInvoicePayment_Right = [];
  //Transaction Others
  TransactionOthers_Left = [{ 'name': 'Add New', 'id': '1281' }, { 'name': 'Edit', 'id': '1282' }, { 'name': 'Delete', 'id': '1283' }, { 'name': 'List', 'id': '1284' }, { 'name': 'Search', 'id': '1285' }];
  TransactionOthers_Right = [];
  //bottom
  //Deposits
  Deposits_Left = [{ 'name': 'Add New', 'id': '1001' }, { 'name': 'Edit', 'id': '1002' }, { 'name': 'Delete', 'id': '1003' }, { 'name': 'List', 'id': '1004' }, { 'name': 'Search', 'id': '1005' }];
  Deposits_Right = [];

  //issue
  Issues_Left = [{ 'name': 'Add New', 'id': '2001' }, { 'name': 'Edit', 'id': '2002' }, { 'name': 'Delete', 'id': '2003' }, { 'name': 'List', 'id': '2004' }, { 'name': 'Search', 'id': '2005' }];
  Issues_Right = [];
  //Customer
  Customer_Left = [{ 'name': 'Add New', 'id': '5001' }, { 'name': 'Edit', 'id': '5002' }, { 'name': 'Delete', 'id': '5003' }, { 'name': 'List', 'id': '5004' }, { 'name': 'Search', 'id': '5005' }, { 'name': 'Show All', 'id': '5006' }, { 'name': 'Share', 'id': '5007' }, { 'name': 'Cut Mail', 'id': '5008' }, { 'name': 'Spl Edit', 'id': '5009' }, { 'name': 'Cust Details', 'id': '3211' }, { 'name': 'Bill code', 'id': '3212' }];
  Customer_Right = [];
  //Customer Contract
  CustomerContract_Left = [{ 'name': 'Add New', 'id': '5011' }, { 'name': 'Edit', 'id': '5012' }, { 'name': 'Delete', 'id': '5013' }, { 'name': 'List', 'id': '5014' }, { 'name': 'Search', 'id': '5015' }, { 'name': 'User Att', 'id': '5016' }, { 'name': 'Oth Att', 'id': '5017' }, { 'name': 'Inv Show', 'id': '5018' }, { 'name': 'Biller Show', 'id': '5019' }];

  CustomerContract_Right = [];
  //Contract Name Management
  CustomerNameMgmt_Left = [{ 'name': 'Add New', 'id': '5031' }, { 'name': 'Edit', 'id': '5032' }, { 'name': 'Delete', 'id': '5033' }, { 'name': 'List', 'id': '5034' }, { 'name': 'Search', 'id': '5035' }];
  CustomerNameMgmt_Right = [];
  //Contract Classification
  ContractClassification_Left = [{ 'name': 'Add New', 'id': '5041' }, { 'name': 'Edit', 'id': '5042' }, { 'name': 'Delete', 'id': '5043' }, { 'name': 'List', 'id': '5044' }, { 'name': 'Search', 'id': '5045' }];
  ContractClassification_Right = [];
  //Customer Leads
  CustomerLeads_Left = [{ 'name': 'Add New', 'id': '5051' }, { 'name': 'Edit', 'id': '5052' }, { 'name': 'Delete', 'id': '5053' }, { 'name': 'List', 'id': '5054' }, { 'name': 'Search', 'id': '5055' }, { 'name': 'Lead Conv', 'id': '5056' }, { 'name': 'Main Tab', 'id': '5057' }];

  CustomerLeads_Right = [];
  //3cx CRM Admin
  c3xCRMAdmin_Left = [{ 'name': 'Add New', 'id': '5061' }, { 'name': 'Edit', 'id': '5062' }, { 'name': 'Delete', 'id': '5063' }, { 'name': 'List', 'id': '5064' }, { 'name': 'Search', 'id': '5065' }];
  c3xCRMAdmin_Right = [];
  //Mrvoip Package
  MrvoipPackage_Left = [{ 'name': 'Add New', 'id': '5021' }, { 'name': 'Edit', 'id': '5022' }, { 'name': 'Delete', 'id': '5023' }, { 'name': 'List', 'id': '5024' }, { 'name': 'Search', 'id': '5025' }];
  MrvoipPackage_Right = [];
  //CRM(Enquiry)
  CRMEnquiry_Left = [{ 'name': 'Add New', 'id': '5501' }, { 'name': 'Edit', 'id': '5502' }, { 'name': 'Delete', 'id': '5503' }, { 'name': 'List', 'id': '5504' }, { 'name': 'Search', 'id': '5505' }, { 'name': 'Cmts', 'id': '5506' }, { 'name': 'Send Mail', 'id': '5507' }, { 'name': 'Mail View', 'id': '5508' }, { 'name': 'CSV Export', 'id': '5509' }, { 'name': 'Spec Per View', 'id': '5510' }, { 'name': 'Spec Per Filter', 'id': '5511' }, { 'name': '3cx', 'id': '5512' }, { 'name': 'Reseller', 'id': '5513' }, { 'name': 'Nx32', 'id': '5514' }, { 'name': 'User Ass', 'id': '5515' }];




  CRMEnquiry_Right = [];
  //	CRM Template
  CRMTemplate_Left = [{ 'name': 'Add New', 'id': '5601' }, { 'name': 'Edit', 'id': '5602' }, { 'name': 'Delete', 'id': '5603' }, { 'name': 'List', 'id': '5604' }, { 'name': 'Search', 'id': '5605' }];
  CRMTemplate_Right = [];
  //	Calendar Template
  CalendarTemplate_Left = [{ 'name': 'Add New', 'id': '5621' }, { 'name': 'Edit', 'id': '5622' }, { 'name': 'Delete', 'id': '5623' }, { 'name': 'List', 'id': '5624' }, { 'name': 'Search', 'id': '5625' }];
  CalendarTemplate_Right = [];
  //	Vendor
  vendor_Left = [{ 'name': 'Add New', 'id': '9801' }, { 'name': 'Edit', 'id': '9802' }, { 'name': 'Delete', 'id': '9803' }, { 'name': 'List', 'id': '9804' }, { 'name': 'Search', 'id': '9805' }];
  vendor_Right = [];
  //Product Category
  ProductCategory_Left = [{ 'name': 'Add New', 'id': '6081' }, { 'name': 'Edit', 'id': '6082' }, { 'name': 'Delete', 'id': '6083' }, { 'name': 'List', 'id': '6084' }, { 'name': 'Search', 'id': '6085' }, { 'name': 'Pur % Update', 'id': '6086' }];

  ProductCategory_Right = [];
  //Reseller Product Category
  ResellerProductCategory_Left = [{ 'name': 'Add New', 'id': '6087' }, { 'name': 'Edit', 'id': '6088' }, { 'name': 'Delete', 'id': '6089' }, { 'name': 'List', 'id': '16084' }, { 'name': 'Search', 'id': '6090' }];
  ResellerProductCategory_Right = [];
  //	Product 
  Product_Left = [{ 'name': 'Add New', 'id': '6001' }, { 'name': 'Edit', 'id': '6002' }, { 'name': 'Delete', 'id': '6003' }, { 'name': 'List', 'id': '6004' }, { 'name': 'Search', 'id': '5605' }];
  Product_Right = [];
  //	Reseller Product 
  ResellerProduct_Left = [{ 'name': 'Add New', 'id': '6006' }, { 'name': 'Edit', 'id': '6007' }, { 'name': 'Delete', 'id': '6008' }, { 'name': 'List', 'id': '6009' }, { 'name': 'Search', 'id': '6010' }];
  ResellerProduct_Right = [];
  //	Product Stock(Stock Menu)
  ProductStock_Left = [{ 'name': 'P-->Tran', 'id': '6091' }, { 'name': 'Edit', 'id': '6092' }, { 'name': 'Delete', 'id': '6093' }, { 'name': 'List', 'id': '6094' }, { 'name': 'Search', 'id': '6095' }, { 'name': 'A<--P', 'id': '6097' }, { 'name': 'P-->I', 'id': '6098' }, { 'name': 'P <--I', 'id': '6099' }, { 'name': 'Reset', 'id': '7029' }, { 'name': 'RMA Re-Iss', 'id': '7030' }, { 'name': 'Pri Upd', 'id': '7031' }];

  ProductStock_Right = [];
  //	DID Inventory
  DIDInventory_Left = [{ 'name': 'Add New', 'id': '7091' }, { 'name': 'Edit', 'id': '7092' }, { 'name': 'Delete', 'id': '7093' }, { 'name': 'List', 'id': '7094' }, { 'name': 'Search', 'id': '7095' }, { 'name': 'P-->Tran', 'id': '7096' }, { 'name': 'A<--P', 'id': '7097' }, { 'name': 'P-->I', 'id': '7098' }, { 'name': 'P <--I', 'id': '7099' }];
  DIDInventory_Right = [];
  //3cx API Credit Report
  API3cxCreditReport_Left = [{ 'name': 'List', 'id': '6115' }, { 'name': 'Cal4care', 'id': '6116' }, { 'name': 'Dcare', 'id': '6117' }];
  API3cxCreditReport_Right = [];
  //Recurring Date List
  RecurringDateList_Left = [{ 'name': 'View', 'id': '7043' }, { 'name': 'Update', 'id': '7044' }];

  RecurringDateList_Right = [];
  //	Individual Petty Cash and From Date
  /* IndividualPettyCashandFromDate_Left = ['View'];
  [{'name':'View','id':'7043'}];
  IndividualPettyCashandFromDate_Right = []; */


  //License Category
  LicenseCategory_Left = [{ 'name': 'Add New', 'id': '6011' }, { 'name': 'Edit', 'id': '6012' }, { 'name': 'Delete', 'id': '6013' }, { 'name': 'List', 'id': '6014' }, { 'name': 'Search', 'id': '6015' }];
  LicenseCategory_Right = [];
  //License Product
  LicenseProduct_Left = [{ 'name': 'Add New', 'id': '6021' }, { 'name': 'Edit', 'id': '6022' }, { 'name': 'Delete', 'id': '6023' }, { 'name': 'List', 'id': '6024' }, { 'name': 'Search', 'id': '6025' }];
  LicenseProduct_Right = [];
  //License Key
  LicenseKey_Left = [{ 'name': 'Add New', 'id': '6031' }, { 'name': 'Edit', 'id': '6032' }, { 'name': 'Delete', 'id': '6033' }, { 'name': 'List', 'id': '6034' }, { 'name': 'Search', 'id': '6035' }, { 'name': 'Send Mail', 'id': '6036' }, { 'name': 'Issue Key', 'id': '6037' }, { 'name': 'Exp Date', 'id': '6038' }, { 'name': 'Buy Lic', 'id': '6039' }, { 'name': 'AV <- P', 'id': '6051' }, { 'name': 'P -> AS', 'id': '6052' }, { 'name': 'P <- AS', 'id': '6053' }, { 'name': 'Lic Grp Del', 'id': '6055' }, { 'name': 'AV Tab', 'id': '6054' }, { 'name': 'Pool Tab', 'id': '6057' }, { 'name': 'Ass Tab', 'id': '6058' }, { 'name': 'Cld Tab', 'id': '6059' }, { 'name': 'Res Tab', 'id': '6060' }];



  LicenseKey_Right = [];

  //Customer Projects Details
  CustomerProjectsDetails_Left = [{ 'name': 'Add New', 'id': '6041' }, { 'name': 'Edit', 'id': '6042' }, { 'name': 'Delete', 'id': '6043' }, { 'name': 'List', 'id': '6044' }, { 'name': 'Search', 'id': '6045' }, { 'name': 'Send Mail', 'id': '6046' }, { 'name': 'Team Pwd', 'id': '6047' }, { 'name': 'Back Upload', 'id': '6048' }, { 'name': 'Back Down', 'id': '6049' }, { 'name': 'Back Delete', 'id': '6050' }, { 'name': 'Show All', 'id': '6056' }];

  CustomerProjectsDetails_Right = [];
  //Vendor Product
  VendorProduct_Left = [{ 'name': 'Add New', 'id': '9901' }, { 'name': 'Edit', 'id': '9902' }, { 'name': 'Delete', 'id': '9903' }, { 'name': 'List', 'id': '9904' }, { 'name': 'Search', 'id': '9905' }];
  VendorProduct_Right = [];
  //Courier
  Courier_Left = [{ 'name': 'Add New', 'id': '7001' }, { 'name': 'Edit', 'id': '7002' }, { 'name': 'Delete', 'id': '7003' }, { 'name': 'List', 'id': '7004' }, { 'name': 'Search', 'id': '7005' }];
  Courier_Right = [];

  // Password Mgt Details
  PasswordMgtDetails_Left = [{ 'name': 'Add New', 'id': '7011' }, { 'name': 'Edit', 'id': '7012' }, { 'name': 'Delete', 'id': '7013' }, { 'name': 'List', 'id': '7014' }, { 'name': 'Search', 'id': '7015' }, { 'name': 'Spec Per View', 'id': '7016' }];
  PasswordMgtDetails_Right = [];
  // PurchaseEntry
  PurchaseEntry_Left = [{ 'name': 'Add New', 'id': '9931' }, { 'name': 'Edit', 'id': '9932' }, { 'name': 'Delete', 'id': '9933' }, { 'name': 'List', 'id': '9934' }, { 'name': 'Search', 'id': '9935' }];
  PurchaseEntry_Right = [];
  // Non Trade Purchase Entry
  NonTradePurchaseEntry_Left = [{ 'name': 'Add New', 'id': '9941' }, { 'name': 'Edit', 'id': '9942' }, { 'name': 'Delete', 'id': '9943' }, { 'name': 'List', 'id': '9944' }, { 'name': 'Search', 'id': '9945' }];
  NonTradePurchaseEntry_Right = [];
  // Stock Entry
  StockEntry_Left = [{ 'name': 'Add New', 'id': '911' }, { 'name': 'Edit', 'id': '912' }, { 'name': 'Delete', 'id': '913' }, { 'name': 'List', 'id': '914' }];
  StockEntry_Right = [];
  // Salary Entry
  SalaryEntry_Left = [{ 'name': 'Add New', 'id': '9951' }, { 'name': 'Edit', 'id': '9952' }, { 'name': 'Delete', 'id': '9953' }, { 'name': 'List', 'id': '9954' }, { 'name': 'Search', 'id': '9955' }];
  SalaryEntry_Right = [];

  // Billing
  Billing_Left = [{ 'name': 'Add New', 'id': '3001' }, { 'name': 'Edit', 'id': '3002' }, { 'name': 'Delete', 'id': '3003' }, { 'name': 'List', 'id': '3004' }, { 'name': 'Search', 'id': '3005' }
    , { 'name': 'Mail', 'id': '3006' }, { 'name': 'Pay', 'id': '3007' }, { 'name': 'View', 'id': '3008' }, { 'name': 'Pay Link', 'id': '3009' }, { 'name': 'Land View', 'id': '3010' }
    , { 'name': 'All Bills', 'id': '3011' }, { 'name': 'Sp Per', 'id': '3012' }, { 'name': 'Rec', 'id': '3013' }, { 'name': 'Sale Rep', 'id': '3015' }, { 'name': 'Alert', 'id': '3014' }
    , { 'name': 'Spl Edit', 'id': '3016' }, { 'name': 'P.I Gr.Del', 'id': '3017' }, { 'name': 'S->PI', 'id': '3018' }, { 'name': 'R Comm', 'id': '3019' }
    , { 'name': 'F Attch', 'id': '3020' }, { 'name': 'T Chart', 'id': '3022' }, { 'name': 'Act-Pri Share', 'id': '3021' }, { 'name': '1-10 Edit Per', 'id': '3023' }, { 'name': 'All Tax', 'id': '3024' }
    , { 'name': 'Duplicate', 'id': '3025' }, { 'name': 'Send PO', 'id': '3026' }, { 'name': 'Term Con', 'id': '3027' }, { 'name': 'Inv RV', 'id': '3028' }, { 'name': 'Inv Type', 'id': '3029' }, { 'name': 'Quot Conv', 'id': '3030' }
    , { 'name': 'Shared', 'id': '3031' }, { 'name': 'Inv to DID Conv', 'id': '3032' }, { 'name': 'Coupon', 'id': '3033' }, { 'name': 'DO Conv', 'id': '3034' }, { 'name': 'Set Previous', 'id': '3036' }, { 'name': 'Sus-Inv-List', 'id': '3037' }
    , { 'name': 'Export-local', 'id': '3035' }, { 'name': '[From-to Date Filter] From dt', 'id': '3038' }];


  Billing_Right = [];

  // Profama Invoice
  ProfamaInvoice_Left = [{ 'name': 'Add New', 'id': '3101' }, { 'name': 'Edit', 'id': '3102' }, { 'name': 'Delete', 'id': '3103' }, { 'name': 'List', 'id': '3104' }, { 'name': 'Search', 'id': '3105' }
    , { 'name': 'Mail', 'id': '3106' }, { 'name': 'Pay', 'id': '3107' }, { 'name': 'View', 'id': '3108' }, { 'name': 'Land Mail', 'id': '3109' }, { 'name': 'Land View', 'id': '3110' }, { 'name': 'All Bills', 'id': '3111' }
    , { 'name': 'Sp Per', 'id': '3112' }, { 'name': 'Rec', 'id': '3113' }, { 'name': 'Sale Rep', 'id': '3115' }, { 'name': 'Alert', 'id': '3114' }, { 'name': 'Spl Edit', 'id': '3116' }
    , { 'name': 'P.I Gr.Del', 'id': '3117' }, { 'name': 'PI->S', 'id': '3119' }, { 'name': 'I->D', 'id': '3120' }];

  ProfamaInvoice_Right = [];

  // Quotation
  Quotation_Left = [{ 'name': 'Add New', 'id': '9521' }, { 'name': 'Edit', 'id': '9522' }, { 'name': 'Delete', 'id': '9523' }, { 'name': 'List', 'id': '9524' }, { 'name': 'Search', 'id': '9525' }, { 'name': 'Mail', 'id': '9526' }, { 'name': 'View', 'id': '9527' }];


  Quotation_Right = [];

  // Quotation New
  QuotationNew_Left = [{ 'name': 'Add New', 'id': '9501' }, { 'name': 'Edit', 'id': '9502' }, { 'name': 'Delete', 'id': '9503' }, { 'name': 'List', 'id': '9504' }, { 'name': 'Search', 'id': '9505' }, { 'name': 'Mail', 'id': '9506' }, { 'name': 'View', 'id': '9507' }
    , { 'name': 'Sales Rep', 'id': '9508' }, { 'name': 'Show All User', 'id': '9509' }, { 'name': 'Share Per', 'id': '9510' }, { 'name': 'Act-Pri Share', 'id': '9511' }];

  QuotationNew_Right = [];

  // Purchase Order
  PurchaseOrder_Left = [{ 'name': 'Add New', 'id': '9601' }, { 'name': 'Edit', 'id': '9602' }, { 'name': 'Delete', 'id': '9603' }, { 'name': 'List', 'id': '9604' }, { 'name': 'Search', 'id': '9605' }];
  PurchaseOrder_Right = [];

  // Credit Note
  CreditNote_Left = [{ 'name': 'Add New', 'id': '9611' }, { 'name': 'Edit', 'id': '9612' }, { 'name': 'Delete', 'id': '9613' }, { 'name': 'List', 'id': '9614' }, { 'name': 'Search', 'id': '9615' }];
  CreditNote_Right = [];
  // 	Delivery Challan
  DeliveryChallan_Left = [{ 'name': 'Add New', 'id': '9701' }, { 'name': 'Edit', 'id': '9702' }, { 'name': 'Delete', 'id': '9703' }, { 'name': 'List', 'id': '9704' }, { 'name': 'Search', 'id': '9705' }];
  DeliveryChallan_Right = [];
  // Delivery Order
  DeliveryOrder_Left = [{ 'name': 'Add New', 'id': '9711' }, { 'name': 'Edit', 'id': '9712' }, { 'name': 'Delete', 'id': '9713' }, { 'name': 'List', 'id': '9714' }, { 'name': 'Search', 'id': '9715' }];
  DeliveryOrder_Right = [];
  // VS Provisioning
  VSProvisioning_Left = [{ 'name': 'Add New', 'id': '9961' }, { 'name': 'Edit', 'id': '9962' }, { 'name': 'Delete', 'id': '9963' }, { 'name': 'List', 'id': '9964' }, { 'name': 'Search', 'id': '9965' }];
  VSProvisioning_Right = [];
  // 	Rate File Upload
  RateFileUpload_Left = [{ 'name': 'Add New', 'id': '9971' }, { 'name': 'Edit', 'id': '9972' }, { 'name': 'Delete', 'id': '9973' }, { 'name': 'List', 'id': '9974' }, { 'name': 'Search', 'id': '9975' }];
  RateFileUpload_Right = [];
  // 	Coupon Details
  CouponDetails_Left = [{ 'name': 'Add New', 'id': '6061' }, { 'name': 'Edit', 'id': '6062' }, { 'name': 'Delete', 'id': '6063' }, { 'name': 'List', 'id': '6064' }, { 'name': 'Search', 'id': '6065' }];
  CouponDetails_Right = [];

  // 		Calncall Shopping Master
  CalncallShoppingMaster_Left = [{ 'name': 'Add New', 'id': '6071' }, { 'name': 'Edit', 'id': '6072' }, { 'name': 'Delete', 'id': '6073' }, { 'name': 'List', 'id': '6074' }, { 'name': 'Search', 'id': '6075' }];
  CalncallShoppingMaster_Right = [];
  // 	Reseller Shopping Master
  ResellerShoppingMaster_Left = [{ 'name': 'Add New', 'id': '7051' }, { 'name': 'Edit', 'id': '7052' }, { 'name': 'Delete', 'id': '7053' }, { 'name': 'List', 'id': '7054' }, { 'name': 'Search', 'id': '7055' }];
  ResellerShoppingMaster_Right = [];
  // 		Document Preparation list
  DocumentPreparationlist_Left = [{ 'name': 'Add New', 'id': '7121' }, { 'name': 'Edit', 'id': '7122' }, { 'name': 'Delete', 'id': '7123' }, { 'name': 'List', 'id': '7124' }, { 'name': 'Search', 'id': '7125' }];
  DocumentPreparationlist_Right = [];
  // 	Payment Link Access list
  PaymentLinkAccessList_Left = [{ 'name': 'Add New', 'id': '7131' }, { 'name': 'Edit', 'id': '7132' }, { 'name': 'Delete', 'id': '7133' }, { 'name': 'List', 'id': '7134' }, { 'name': 'Search', 'id': '7135' }];
  PaymentLinkAccessList_Right = [];
  // 	Data Center Request
  DataCenterRequest_Left = [{ 'name': 'Add New', 'id': '7081' }, { 'name': 'Edit', 'id': '7082' }, { 'name': 'Delete', 'id': '7083' }, { 'name': 'List', 'id': '7084' }, { 'name': 'Search', 'id': '7085' }];
  DataCenterRequest_Right = [];
  // 	Data Center Masters
  DataCenterMasters_Left = [{ 'name': 'Delete', 'id': '7086' }, { 'name': 'List', 'id': '7087' }, { 'name': 'Approve', 'id': '7088' }];

  DataCenterMasters_Right = [];
  // 	Dynamic Excel
  DynamicExcel_Left = [{ 'name': 'Add New', 'id': '7141' }, { 'name': 'Edit', 'id': '7142' }, { 'name': 'Delete', 'id': '7143' }, { 'name': 'List', 'id': '7144' }, { 'name': 'Search', 'id': '7145' }, { 'name': 'History', 'id': '7146' }, { 'name': 'Share', 'id': '7147' }];

  DynamicExcel_Right = [];
  // 		Price List
  PriceList_Left = [{ 'name': 'Add New', 'id': '7071' }, { 'name': 'Edit', 'id': '7072' }, { 'name': 'Delete', 'id': '7073' }, { 'name': 'List', 'id': '7074' }, { 'name': 'Search', 'id': '7075' }, { 'name': 'History', 'id': '7077' }, { 'name': 'Share', 'id': '7076' }];

  PriceList_Right = [];
  // 		Call Logs
  CallLogs_Left = [{ 'name': 'Add New', 'id': '4001' }, { 'name': 'Rating', 'id': '4002' }, { 'name': 'Call Assigned By Me', 'id': '4003' }, { 'name': 'Comments', 'id': '4004' }];

  CallLogs_Right = [];











  drop(event: { previousContainer: { data: any[]; }; container: { data: any[]; }; previousIndex: number; currentIndex: number; }) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    let role_drop_arr = [];



    this.Transaction_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionApproval_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionDeposit_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionCommission_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionWithdrawal_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionPurchaseEntry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Transactionsalary_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionPettyCash_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionVendorOrder_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionInvoicePayment_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.TransactionOthers_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Deposits_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Issues_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Customer_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CustomerContract_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CustomerNameMgmt_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ContractClassification_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CustomerLeads_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.c3xCRMAdmin_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.MrvoipPackage_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CRMEnquiry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CRMTemplate_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CalendarTemplate_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.vendor_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ProductCategory_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ResellerProductCategory_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Product_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ResellerProduct_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ProductStock_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DIDInventory_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.API3cxCreditReport_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.RecurringDateList_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    // this.IndividualPettyCashandFromDate_Right.forEach(element => {
    //   const str = element.id;
    //   role_drop_arr.push(str);
    // });

    this.LicenseCategory_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.LicenseProduct_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.LicenseKey_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CustomerProjectsDetails_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.VendorProduct_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Courier_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.PasswordMgtDetails_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.PurchaseEntry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.NonTradePurchaseEntry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.StockEntry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.SalaryEntry_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Billing_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ProfamaInvoice_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.Quotation_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.QuotationNew_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.PurchaseOrder_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CreditNote_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DeliveryChallan_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DeliveryOrder_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.VSProvisioning_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.RateFileUpload_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CouponDetails_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CalncallShoppingMaster_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.ResellerShoppingMaster_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DocumentPreparationlist_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.PaymentLinkAccessList_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DataCenterRequest_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DataCenterMasters_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.DynamicExcel_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.PriceList_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.CallLogs_Right.forEach(element => {
      const str = element.id;
      role_drop_arr.push(str);
    });

    this.role_drop_val = role_drop_arr;

  }
  ageValue: false;
  checkboxList: any;
  fileList: any;
  middlecheckboxList: any;
  anothercheckboxList: any;
  checkboxStatus: false;
  checkboxList_3: any;
  checkboxList_5: any;
  public addresses: FormArray;
  itre = 0;
  test: boolean[] = [];
  designationDetailsList: any;
  userDetailsList: any;
  billerDetailsList: any;
  checkboxList2: any;
  pettyCashColorList: any;
  columntest: any;
  rowtest: any;
  BillerID: any;
  dynamicCheckboxwithKey: any;
  HRGroupList: any;
  // file: File;
  file: string[] = [];
  //checkbox
  groupSelectCheckCommonId: any;
  Checkbox_value: any;
  edit_array_Check: any = [];
  edit_array_Radio: any = [];
  //file
  signature_billerid: any = [];
  files_Signature = [];


  addUserForm1: FormGroup;
  addUserForm2: FormGroup;
  addUserForm3: FormGroup;
  addUserForm4: FormGroup;
  addUserForm5: FormGroup;
  addUserForm6: FormGroup;
  addUserForm7: FormGroup;
  addUserForm8: FormGroup;
  addUserFormTableData: FormGroup;
  addUserFormValidation: FormGroup;
  //checkbox declarartion


  checkboxCB_InProbation: boolean = false;
  checkboxCB_verification2D: boolean = false;
  checkboxCB_EPFCPFStatus: boolean = false;
  checkboxCB_Sinda: boolean = false;
  checkboxCB_Socso: boolean = false;
  checkboxCB_SMSNotifications: boolean = false;
  checkboxCB_EmailNotifications: boolean = false;
  checkboxCB_Staff: boolean = false;
  checkboxCB_IndividualPettyCashFromDate: boolean = false;
  HRValidation: boolean = false;



  constructor(private serverService: ServerService, private fb: FormBuilder, private router: Router) {
    this.addUserForm2 = this.fb.group({
      addresses: this.fb.array([this.createAddress()])
    });
  }

  ngOnInit(): void {
    this.onLoadGet();
    
    this.dynamicCheckboxwithKey = [

      { name: 'Trans Deposit Approval', selected: false, id: 2011 },
      { name: 'Trans Commission Approval', selected: false, id: 2012 },
      { name: 'Trans Withdrawal Approval', selected: false, id: 2013 },
      { name: 'Trans Purchase Approval', selected: false, id: 2014 },
      { name: 'Trans Petty Cash Approval', selected: false, id: 2015 },
      { name: 'Trans Vendor Approval', selected: false, id: 2016 },
      { name: 'Trans Invoice Approval', selected: false, id: 2017 },
      { name: 'Trans Quotation Filter Approval', selected: false, id: 2018 },
      { name: 'Invoice Individual Filter', selected: false, id: 2019 },
      { name: 'Approval Filter', selected: false, id: 2020 },
      { name: 'Trans Approval Main', selected: false, id: 2021 },
      { name: 'Trans Approval Product', selected: false, id: 2022 },
      { name: 'Trans Approval DID Number', selected: false, id: 2023 },
      { name: 'Trans Approval Small Task', selected: false, id: 2024 },
      { name: 'Trans Approval Inv Payment', selected: false, id: 2025 },
      { name: 'Trans Approval Online Shop', selected: false, id: 2026 },
      { name: 'Trans Approval DID Demo', selected: false, id: 2027 },
      { name: 'Trans Approval RMA Issues', selected: false, id: 2028 },
      { name: 'Trans Approval Other', selected: false, id: 2029 },
      { name: 'Trans Approval HRA', selected: false, id: 2030 },
      { name: 'Trans Approval Data Center', selected: false, id: 2031 },
      { name: 'Quotation Sent App Name', selected: false, id: 2032 },
      { name: 'Transaction Approval Share', selected: false, id: 2033 },
      { name: 'Transaction Approval Individual filter', selected: false, id: 2034 },
      { name: 'Customer Master Approval', selected: false, id: 2035 },
      { name: 'DID Invoice', selected: false, id: 2036 },
      { name: 'Write Off Invoice', selected: false, id: 2037 },
      { name: 'CMS Login', selected: false, id: 2038 },
      { name: 'Quotation Template', selected: false, id: 2039 },
      { name: 'Reseller Management', selected: false, id: 2040 },
      { name: 'Call logs', selected: false, id: 2041 },
      { name: 'Picture gallery', selected: false, id: 2042 },
      { name: 'Internal Tickets', selected: false, id: 2043 },
      { name: 'Petty Cash Report', selected: false, id: 2044 },
      { name: 'Withdrawal Report', selected: false, id: 2045 },
      { name: 'Price Category', selected: false, id: 2046 },
      { name: 'Enquiry Form', selected: false, id: 2047 },
      { name: 'Cms Country', selected: false, id: 2048 },
      { name: 'DID Number Catalog', selected: false, id: 2049 },
      { name: 'DID Provider', selected: false, id: 2050 },
      { name: 'DID Trunk Name', selected: false, id: 2051 },
      { name: 'Deposit Mgt', selected: false, id: 2052 },
      { name: 'Small Task', selected: false, id: 2053 },
      { name: 'Product Category', selected: false, id: 2054 },
      { name: 'Product Quotation', selected: false, id: 2055 },
      { name: 'Stock Inventory Report', selected: false, id: 2056 },
      { name: 'Rate Catelog', selected: false, id: 2057 },
      { name: 'Stock Inventory Entry', selected: false, id: 2058 },
      { name: 'DID Inventory Entry', selected: false, id: 2059 },
      { name: 'Sucuri Ip Access', selected: false, id: 2060 },
      { name: 'Mrvoip License Key', selected: false, id: 2061 },
      { name: 'Soft Phone License', selected: false, id: 2062 },
      { name: 'API Token', selected: false, id: 2063 },
      { name: 'Purchase Entry', selected: false, id: 2064 },
      { name: 'Purchase Entry Yearly', selected: false, id: 2065 },
      { name: 'Purchase Entry Yearly-Edit', selected: false, id: 2094 },
      { name: 'Purchase Entry - Voip Trend Chart', selected: false, id: 2076 },
      { name: 'Purchase Entry - Mrvoip Trend Entry', selected: false, id: 2095 },
      { name: 'Purchase Entry - Mrvoip Trend Chart', selected: false, id: 2096 },
      { name: 'Purchase Entry - Call4tel Trend Entry', selected: false, id: 2103 },
      { name: 'Purchase Entry - Call4tel Trend Chart', selected: false, id: 2104 },

      { name: 'Purchase Entry Waiting', selected: false, id: 2066 },
      { name: 'Non Trade Purchase Entry', selected: false, id: 2067 },
      { name: 'New Customer Approval', selected: false, id: 2068 },
      { name: 'Reseller Payment Menu', selected: false, id: 2077 },
      { name: 'Reseller Payment All', selected: false, id: 2078 },
      { name: 'Mrvoip calncall_callacloud Menu', selected: false, id: 2075 },
      { name: 'Mrvoip Package Price', selected: false, id: 2069 },
      { name: 'Mrvoip left Product Menu', selected: false, id: 2071 },
      { name: 'Mrvoip Industries', selected: false, id: 2072 },
      { name: 'Mrvoip Case Studies', selected: false, id: 2073 },
      { name: 'Mrvoip contact Details', selected: false, id: 2074 },
      { name: 'ERP - User Mgt', selected: false, id: 2079 },
      { name: 'External Blog', selected: false, id: 2070 },
      { name: 'Internal Blog', selected: false, id: 2080 },
      { name: 'NX32 Serial Number', selected: false, id: 2081 },
      { name: 'NX32 Document Upload', selected: false, id: 2082 },
      { name: 'Dynamic Excel', selected: false, id: 2083 },
      { name: 'Revenue Report', selected: false, id: 2084 },
      { name: 'MG Order List', selected: false, id: 2085 },
      { name: 'YG Order List', selected: false, id: 2086 },
      { name: 'Customer Invoice Share', selected: false, id: 2087 },
      { name: 'IP-Allowed Rule', selected: false, id: 2088 },
      { name: 'Renewal Reminder', selected: false, id: 2089 },
      { name: 'Webrtc-IP', selected: false, id: 2090 },
      { name: 'Fgw', selected: false, id: 2091 },
      { name: 'Attendance Reports', selected: false, id: 2092 },
      { name: 'CPF Contribution', selected: false, id: 2093 },
      { name: 'Website Subscribe Email', selected: false, id: 2097 },
      { name: '3cx Buy License Page', selected: false, id: 2098 },
      { name: '3cx Buy Permis For User', selected: false, id: 2099 },
      { name: 'Call4tel Address and Logo Show In Partner', selected: false, id: 2100 },
      { name: 'Mrvoip Address and Logo Show In Partner', selected: false, id: 2101 },
      { name: 'Mconnect Address and Logo Show In Partner', selected: false, id: 2102 },
      { name: 'Recurring Checker List ', selected: false, id: 1121 },
      { name: 'Enquiry Details ', selected: false, id: 1124 },
      { name: 'Overdue Payments Notification ', selected: false, id: 1127 },
      { name: 'Cal4Care Pte Ltd Overdue ', selected: false, id: 1130 },
      { name: 'DCARE Technologies India Pvt Ltd Overdue ', selected: false, id: 1133 },
      { name: 'Recurring Date Update ', selected: false, id: 1136 },
      { name: 'Stock Pre Approval ', selected: false, id: 1139 },
      { name: 'WebSite Enquiry ', selected: false, id: 1162 },
      { name: 'Consolidated Overdue', selected: false, id: 1165 },
      { name: 'Payment Follow Invoice ', selected: false, id: 1122 },
      { name: 'Transaction Approval ', selected: false, id: 1125 },
      { name: 'In-completes Task List', selected: false, id: 1128 },
      { name: 'Cal4care Sdn. Bhd Overdue ', selected: false, id: 1131 },
      { name: 'Marshal System Consultancy Overdue ', selected: false, id: 1134 },
      { name: 'Purchase Entry-Trend', selected: false, id: 1137 },
      // { name: '2ds Verfication ', selected: false, id: 1 },
      { name: '3cx Enquiry', selected: false, id: 1163 },
      { name: 'Cal4care Sdn Bhd GST Rpt ', selected: false, id: 1135 },
      { name: 'All Payment Follow Invoice ', selected: false, id: 1123 },
      { name: 'Call Log Comments ', selected: false, id: 1126 },
      { name: 'Send to Postal ', selected: false, id: 1129 },
      { name: 'Dcare Technologies Pte Ltd Overdue ', selected: false, id: 1132 },
      { name: 'Cal4Care Japan Co., Ltd Overdue ', selected: false, id: 1140 },
      { name: 'Cloud Renewal Lic Key Popup ', selected: false, id: 1138 },
      { name: 'All(M) Enquiry) ', selected: false, id: 1161 },
      { name: '3cx Assigned Enquiry ', selected: false, id: 1164 },
      { name: 'Cal4care (Thailand) Co., Ltd. Overdue ', selected: false, id: 1166 },
      { name: 'Custom Search Icon show', selected: false, id: 1148 },
      { name: 'Customer Search', selected: false, id: 1141 },
      { name: 'Invoice', selected: false, id: 1144 },
      { name: 'License Key', selected: false, id: 1147 },
      { name: 'Vs Provisioning', selected: false, id: 1151 },
      { name: 'Quotation Search', selected: false, id: 1142 },
      { name: 'Credit Note', selected: false, id: 1145 },
      { name: 'DID Number', selected: false, id: 1149 },
      { name: 'All Page', selected: false, id: 1152 },
      { name: 'Proforma Invoice', selected: false, id: 1143 },
      { name: 'Prepaid Note', selected: false, id: 1146 },
      { name: 'Customer Projects', selected: false, id: 1150 },
      { name: 'VOIP Credit Manager', selected: false, id: 6114 },
      { name: 'VOIP Suspend Account', selected: false, id: 6124 },
      { name: 'VOIP Gateway Settings', selected: false, id: 6134 },
      { name: 'Product Stock Report (Update)', selected: false, id: 8008 },
      { name: 'Current Stock Show', selected: false, id: 7006 },
      { name: 'Rate Catelog Show', selected: false, id: 7007 },
      { name: 'Act Purchase Price Show', selected: false, id: 7008 },
      { name: 'Default Menu Show', selected: false, id: 7009 },
      { name: 'Default Menu Show (low level)', selected: false, id: 7010 },
      { name: 'Calncall Menu Show', selected: false, id: 7028 },
      { name: 'Reseller Shopping Menu', selected: false, id: 7032 },
      { name: 'Public Task Manager', selected: false, id: 7021 },
      { name: 'Personal Task Manager', selected: false, id: 7022 },
      { name: 'Daily Work Report', selected: false, id: 7023 },
      { name: 'Mailer', selected: false, id: 7024 },
      { name: 'Help Desk', selected: false, id: 7025 },
      { name: 'C4C Turn Over(Map)', selected: false, id: 7026 },
      { name: 'Special Login', selected: false, id: 7041 },
      { name: 'Left Side TurnOver Chart', selected: false, id: 7042 },
      { name: 'Individual Petty Cash Credit Person Select', selected: false, id: 7046 },
      { name: 'Approval Delete', selected: false, id: 7045 },
      { name: 'Credit Mgt Details', selected: false, id: 7017 },
      { name: 'Bank Reports', selected: false, id: 8001 },
      { name: 'Ledger Reports', selected: false, id: 8001 },
      { name: 'DashBoard', selected: false, id: 9956 },
      { name: 'Invoice Reports', selected: false, id: 9913 },
      { name: 'Call Log Reports', selected: false, id: 8002 },
      { name: 'Send Mail', selected: false, id: 9911 },
      { name: 'Petty Cash', selected: false, id: 9912 },
      { name: 'Logistics', selected: false, id: 9914 },
    ];

    this.checkboxList = ["Trans Deposit Approval", "	Trans Commission Approval", "Trans Withdrawal Approval", "Trans Purchase Approval", "Trans Petty Cash Approval",
      "Trans Vendor Approval", "Trans Invoice Approval", "Trans Quotation Filter Approval", " 	Invoice individual filter", "	Approval filter", " 	Trans Approval Tab",
      "Trans Approval Main", "Trans Approval Product", "Trans Approval DID Number", "	Trans Approval Small Task", "Trans Approval Inv Payment", "Trans Approval Online Shop",
      "Trans Approval DID Demo", "	Trans Approval RMA Issues", "Trans Approval Other", "Trans Approval HRA", "Trans Approval Data Center", "	Quotation Sent App Name",
      "	Transaction Approval Share", " 	Transaction Approval Individual filter", "	Customer Master Apptoval", "	DID Invoice", "	Write Off Invoice", "CMS Login", "Quotation Template",
      "	Reseller Management", "Call logs	", "	Picture gallery", "	Internal tickets", "	Petty cash report", "Widthdrawl report", " 	Price category", "Enquiry form", "CMS country",
      " DID number catalog", "	DID provider", "DID trunk name", "	Deposit mgt", "Small task", "Product category", "Product quotation	", "	Stock inventory report", "	Rate catelog",
      "Stock inventory Entry", "DID inventory entry", "Sucuri ip Access", "	Mrvoip license key", "Soft Phone License", "API token", "	Purchase entry", " 	Purchase entry yearly",
      "	Purchase entry yearly-Edit", "	Purchase entry - Voip Trend Chart", "Purchase entry - Mrvoip Trend Entry", "Purchase entry - Mrvoip Trend Chart", "	Purchase entry - Call4tel Trend Entry",
      "Purchase entry - Call4tel Trend Chart", "Purchase entry waiting", "Non trade Purchase Entry", "New Customer Approval", "	Reseller Payment Menu", "Reseller Payment All",
      " Mrvoip calncall_callacloud Menu", "Mrvoip package price", "Mrvoip left product menu", "Mrvoip Industries",
      "Mrvoip case studies", "	Mrvoip contact details", "ERP - User Mgt", " 	External Blog", "	Internal Blog", "NX32 Serial Number", "	NX32 Document Upload", "	Dynamic Excel", "	Revenue Report",
      " MG Order List", " 	YG Order List", "Customer invoice share", " 	IP-Allowed Rule", "Renewal Reminder", "	Webrtc-IP", " 	Fgw", "	Attendance Reports", "	CPF Contribution",
      " Website Subscribe Email", "	3cx Buy License Page", " 	3cx Buy permis for user", "Call4tel Address and Logo show in partner",
      "Mrvoip Address and Logo show in partner", "Mconnect Address and Logo show in partner",
    ];
    this.checkboxList2 = ["Staff", "In Probation"];
    this.middlecheckboxList = ["Recurring Checker List", "Enquiry Details", "Overdue Payments Notification", "Cal4Care Pte Ltd Overdue", "DCARE Technologies India Pvt Ltd Overdue", "Recurring Date Update", "Stock Pre Approval", "WebSite Enquiry", "Consolidated Overdue",
      "Payment Follow Invoice", "Transaction Approval", "In-completes Task List", "	Cal4care Sdn. Bhd Overdue", "Marshal System Consultancy Overdue", "Purchase Entry-Trend", "	2ds Verfication", "3cx Enquiry", "Cal4care Sdn Bhd GST Rpt",
      "All Payment Follow Invoice", "Call Log Comments", "Send to Postal", "	Dcare Technologies Pte Ltd Overdue", "Cal4Care Japan Co., Ltd Overdue", "Cloud Renewal Lic Key Popup", "All(M) Enquiry)", "3cx Assigned Enquiry", "Cal4care (Thailand) Co., Ltd. Overdue",
    ];
    this.anothercheckboxList = ["Custom Search Icon show", "Customer Serach", "Invoice", "License Key", "Vs Provisioning",
      "Quotation Serach", "Credit Note", "	DID Number", "All Page", "Proforma Invoice", "Prepaid Note", "Customer Projects",
    ];
    this.checkboxList_3 = ["	VOIP Credit Manager", " 	VOIP Suspend Account", " 	Product Stock Report (Update)", "Currenct Stock Show", "	Rate Catelog Show", "Act Purchase Price Show",
      "	Default Menu Show", "Default Menu Show (low level)", "Calncall Menu Show", "Reseller Shopping Menu", "Public Task Manager",
      "Personal Task Manager", " 	Daily Work Report", "Mailer", "	Help Desk", "C4C Turn Over(Map)", "	Special Login", "	Left Side TurnOver Chart",
      " 	Individual Petty Cash Credit Person Select", "Approval Delete",
    ];
    this.fileList = ["Cal4Care Pte Ltd", "Marshal System Consultancy", "Cal4Care", "Dcare Technologies Pte Ltd", "DCARE Technologies India Pvt Ltd.", "Cal4care Sdn.Bhd.", "CalnCall",
      "IT Care - IT Solutions	", "SeaTech Solutions International (S) Pte Ltd", "Cal4Care Japan Co., Ltd", "Callacloud", "HelpDesk.Guru", "Cal4care (Thailand) Co., Ltd.", "1Msb IT Care Sdn. Bhd.",
      "Mr VOIP", "Mconnects", "CloudNippon", "Callnclear", "Call4tel", "Cal4Care USA LLC", "Virdi", "Cal4care Telecommunication Services (I) PVT LTD",
      "Cal4care International Corporation", "IT Care", "Calncall", "DID Sg", "Callcloud", "Mrvoip"
    ];
    this.checkboxList_5 = ["Credit Mgt Details", "Bank Reports", "Ledger Reports", " DashBoard", "Invoice Reports",
      "Call Log Reports", "Send Mail", "Petty Cash", "Logistics",];


    this.columntest = ["a", "b", "c"];
    this.rowtest = ['{"a1","b1","c1"},{"a1","b1","c1"}'];


    this.addUserFormValidation = new FormGroup({});
    this.addUserForm1 = new FormGroup({
      'displayName': new FormControl('', [Validators.required, Validators.maxLength(45)]),
      'firstName': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'lastName': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'userName': new FormControl(null),
      'password': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'passwordDetails': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'confirmPasswordDetails': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'department': new FormControl(null),
      'designation': new FormControl(null),
      'FIN': new FormControl(null),
      'bankAccountNO': new FormControl(null),
      'address': new FormControl(null),
      'dob': new FormControl(null),
      'age': new FormControl(null),
      'epfcpfStatus': new FormControl(null),
      'sinda': new FormControl(null),
      'socso': new FormControl(null),
      'smsNotif': new FormControl(null),
      'phoneNumber': new FormControl(null),
      // 'phoneNumber': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'emailNotif': new FormControl(null),
      'emailID': new FormControl(null),
      'cmsContactPhone': new FormControl(null),
      'cmsAlternativeContactPhone': new FormControl(null),
      'cmsAlternativeSupportMail': new FormControl(null),
      'cmsAlternativeSupportWebsite': new FormControl(null),
      'bccEmailID': new FormControl(null),
      'pettyCashColorCode': new FormControl(null),
      'Signature': new FormControl(null),
      'Staff': new FormControl(null),
      'ProbationIn': new FormControl(null),
      'permissionAs': new FormControl(null),
      'ExtensionNumber': new FormControl(null),
      'ShortName': new FormControl(null),
      'FriendlyName': new FormControl(null),
      'HRGroup': new FormControl(null),
      'verification2D': new FormControl(null),
      'defaultBillerRadio': new FormControl('', [Validators.required]),

    },
      { validators: [passwordMatchingValidatior, passwordMatchingValidatior123,  identityRevealedValidator] }
    );

    this.addUserForm3 = new FormGroup({

      'oneInputControl': new FormControl(null),


    });
    this.addUserForm4 = new FormGroup({



    });

    this.addUserForm5 = new FormGroup({
      'RecurringCheckerList': new FormControl(null),
      'StockPreApproval': new FormControl(null),

    });

    this.addUserForm7 = new FormGroup({
      'VOIPCreditManager': new FormControl(null),
      'VOIPSuspendAccount': new FormControl(null),
      'ProductStockReportUpdate': new FormControl(null),
      'CurrenctStockShow': new FormControl(null),
      'RateCatelogShow': new FormControl(null),
      'ActPurchasePriceShow': new FormControl(null),
      'DefaultMenuShow': new FormControl(null),
      'DefaultMenuShowLowLevel': new FormControl(null),
      'CalncallMenuShow': new FormControl(null),
      'ResellerShoppingMenu': new FormControl(null),
      'PublicTaskManager': new FormControl(null),
      'PersonalTaskManager': new FormControl(null),
      'DailyWorkReport': new FormControl(null),
      'Mailer': new FormControl(null),
      'HelpDesk': new FormControl(null),
      'C4CTurnOverMap': new FormControl(null),
      'SpecialLogin': new FormControl(null),
      'LeftSideTurnOverChart': new FormControl(null),
      'IndividualPettyCashCreditPersonSelect': new FormControl(null),
      'IndividualPettyCashandFromDate_cb': new FormControl(null),
      'IndividualPettyCashandFromDate_date': new FormControl(null),
      'ApprovalDelete': new FormControl(null),
      'billingFromDt': new FormControl(null),
      'billingToDt': new FormControl(null),
      'billingFilterMonth': new FormControl(null),
      'IndividualPettyCashFromDate_TextBox': new FormControl(null),
      'IndividualPettyCashFromDate_Date': new FormControl(null),
    });
    this.addUserForm8 = new FormGroup({
      'DashBoard': new FormControl(null),
      'defaultBillerRadio': new FormControl('', [Validators.required]),

    });
    

    this.addressControls.controls.forEach((elt, index) => {
      this.test[index] = true;
    });


  }
  blurEvent(event: any) {
    this.birthdate = event.target.value;
    console.log("this.birthdate", this.birthdate)
    if (this.birthdate) {

      const bdate = new Date(this.birthdate);
      const timeDiff = Math.abs(Date.now() - bdate.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log("this.age", this.age)
    }

  }



  get addressControls() {
    return this.addUserForm2.get('addresses') as FormArray
  }

  addAddress(): void {
    this.addresses = this.addUserForm2.get('addresses') as FormArray;
    this.addresses.push(this.createAddress());

    this.itre = this.itre + 1;
    this.addressControls.controls.forEach((elt, index) => {
      this.test[index] = true;

    });
  }

  removeAddress(i: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.addresses.removeAt(i);
      }
    })



  }

  // removeAddress(i: number) {
  //   iziToast.warning({
  //     message: "Deleted ",
  //     position: 'topRight'
  //   });
  //   this.addresses.removeAt(i);
  // }

  createAddress(): FormGroup {
    return this.fb.group({

      MS_designation: '',
      MS_FromDate: '',
      MS_ToDate: '',
      MS_salaryAmt: '',
      MS_perDayAmt: '',
      MS_employerAmt: '',
      MS_employeeAmt: '',
      MS_contribution1: '',
      MS_contribution2: '',
    });

  }
  showPreviewImage(billerid: any, event: any) {
    // this.signature_billerid=billerid;
    // console.log("this.signature_billerid",this.signature_billerid)

    for (let i = 0; i < event.target.files.length; i++) {
      // this.file = event.target.files[i];
      // console.log("krishna test",$("#uploaded-img"+[i]).val());
      // var l = $("#uploaded-img"+[i]).val();

      // console.log("krishna test123",event.target.files[i])
      // this.file.push(event.target.files[i]);
      let bill
      let file = event.target.files[i]
      this.files_Signature.push(file);
      console.log(this.files_Signature);
      this.signature_billerid.push(billerid)
      console.log("push_billerid(signature)", this.signature_billerid);
    }

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  get_b() {

  }
  handleCheckboxChange(event: any) {
    this.checkboxStatus = event.target.checked;
    console.log("this.checkboxStatus", this.checkboxStatus)
  }


  CB_InProbation(event: any) {
    this.checkboxCB_InProbation = event.target.checked;
    console.log(" this.checkboxCB_InProbation", this.checkboxCB_InProbation)
  }
  CB_verification2D(event: any) {
    this.checkboxCB_verification2D = event.target.checked;
    console.log(" this.checkboxCB_verification2D", this.checkboxCB_verification2D)
  }

  CB_EPFCPFStatus(event: any) {
    this.checkboxCB_EPFCPFStatus = event.target.checked;
    console.log("this.checkboxCB_EPFCPFStatus", this.checkboxCB_EPFCPFStatus)
  }

  CB_Sinda(event: any) {
    this.checkboxCB_Sinda = event.target.checked;
    console.log("this.checkboxCB_Sinda", this.checkboxCB_Sinda)
  }

  CB_Socso(event: any) {
    this.checkboxCB_Socso = event.target.checked;
    console.log("this.checkboxCB_Socso", this.checkboxCB_Socso)
  }

  CB_SMSNotification(event: any) {
    this.checkboxCB_SMSNotifications = event.target.checked;
    console.log("this.checkboxCB_SMSNotifications", this.checkboxCB_SMSNotifications)
  }

  CB_EmailNotification(event: any) {
    this.checkboxCB_EmailNotifications = event.target.checked;
    console.log("this.checkboxCB_EmailNotifications", this.checkboxCB_EmailNotifications)
  }

  CB_Staff(event: any) {
    this.checkboxCB_Staff = event.target.checked;
    console.log("this.checkboxCB_Staff ", this.checkboxCB_Staff)
  }
  CB_IndividualPettyCashFromDate(event: any) {
    this.checkboxCB_IndividualPettyCashFromDate = event.target.checked;
    console.log("this.checkboxCB_IndividualPettyCashFromDate ", this.checkboxCB_IndividualPettyCashFromDate)
  }

  EditCHK_quotation_per(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_quotation_per = data;
    this.checkbox_value_quotation_per = event.target.checked;
    console.log(this.checkbox_value_quotation_per)
    if (this.checkbox_value_quotation_per) {

      this.edit_array_quotation_per.push(data);
      this.edit_array_quotation_per.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_quotation_per);
    }
    else {
      const index = this.edit_array_quotation_per.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_quotation_per.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_quotation_per)

    }
  }
  EditCHK_BillerAll(data: any, event: any) {

    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_BillerAll = data;
    this.checkbox_value_BillerAll = event.target.checked;
    console.log(this.checkbox_value_BillerAll)
    if (this.checkbox_value_BillerAll) {

      this.edit_array_BillerAll.push(data);
      this.edit_array_BillerAll.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_BillerAll);
    }
    else {
      const index = this.edit_array_BillerAll.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_BillerAll.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_BillerAll)

    }
  }
  EditCHK_DeliveryChelan(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_DeliveryChelan = data;
    this.checkbox_value_DeliveryChelan = event.target.checked;
    console.log(this.checkbox_value_DeliveryChelan)
    if (this.checkbox_value_DeliveryChelan) {

      this.edit_array_DeliveryChelan.push(data);
      this.edit_array_DeliveryChelan.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_DeliveryChelan);
    }
    else {
      const index = this.edit_array_DeliveryChelan.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_DeliveryChelan.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_DeliveryChelan)

    }
  }
  EditCHK_Quotation(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_Quotation = data;
    this.checkbox_value_Quotation = event.target.checked;
    console.log(this.checkbox_value_Quotation)
    if (this.checkbox_value_Quotation) {

      this.edit_array_Quotation.push(data);
      this.edit_array_Quotation.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_Quotation);
    }
    else {
      const index = this.edit_array_Quotation.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_Quotation.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_Quotation)

    }
  }
  EditCHK_Dashboard(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_Dashboard = data;
    this.checkbox_value_Dashboard = event.target.checked;
    console.log(this.checkbox_value_Dashboard)
    if (this.checkbox_value_Dashboard) {

      this.edit_array_Dashboard.push(data);
      this.edit_array_Dashboard.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_Dashboard);
    }
    else {
      const index = this.edit_array_Dashboard.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_Dashboard.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_Dashboard)

    }
  }


  EditCHK_PurchaseOrder(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_PurchaseOrder = data;
    this.checkbox_value_PurchaseOrder = event.target.checked;
    console.log(this.checkbox_value_PurchaseOrder)
    if (this.checkbox_value_PurchaseOrder) {

      this.edit_array_PurchaseOrder.push(data);
      this.edit_array_PurchaseOrder.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_PurchaseOrder);
    }
    else {
      const index = this.edit_array_PurchaseOrder.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_PurchaseOrder.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_PurchaseOrder)

    }

  }
  EditCHK_CreditNote(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CreditNote = data;
    this.checkbox_value_CreditNote = event.target.checked;
    console.log(this.checkbox_value_CreditNote)
    if (this.checkbox_value_CreditNote) {

      this.edit_array_CreditNote.push(data);
      this.edit_array_CreditNote.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CreditNote);
    }
    else {
      const index = this.edit_array_CreditNote.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CreditNote.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CreditNote)

    }

  }

  EditCHK_PurchaseEntry(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_PurchaseEntry = data;
    this.checkbox_value_PurchaseEntry = event.target.checked;
    console.log(this.checkbox_value_PurchaseEntry)
    if (this.checkbox_value_PurchaseEntry) {

      this.edit_array_PurchaseEntry.push(data);
      this.edit_array_PurchaseEntry.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_PurchaseEntry);
    }
    else {
      const index = this.edit_array_PurchaseEntry.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_PurchaseEntry.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_PurchaseEntry)

    }

  }
  EditCHK_CRMEnquiry(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CRMEnquiry = data;
    this.checkbox_value_CRMEnquiry = event.target.checked;
    console.log(this.checkbox_value_CRMEnquiry)
    if (this.checkbox_value_CRMEnquiry) {

      this.edit_array_CRMEnquiry.push(data);
      this.edit_array_CRMEnquiry.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CRMEnquiry);
    }
    else {
      const index = this.edit_array_CRMEnquiry.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CRMEnquiry.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CRMEnquiry)

    }

  }
  EditCHK_CustomerLeads(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CustomerLeads = data;
    this.checkbox_value_CustomerLeads = event.target.checked;
    console.log(this.checkbox_value_CustomerLeads)
    if (this.checkbox_value_CustomerLeads) {

      this.edit_array_CustomerLeads.push(data);
      this.edit_array_CustomerLeads.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CustomerLeads);
    }
    else {
      const index = this.edit_array_CustomerLeads.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CustomerLeads.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CustomerLeads)

    }

  }
  EditCHK_ContractBiller(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_ContractBiller = data;
    this.checkbox_value_ContractBiller = event.target.checked;
    console.log(this.checkbox_value_ContractBiller)
    if (this.checkbox_value_ContractBiller) {

      this.edit_array_ContractBiller.push(data);
      this.edit_array_ContractBiller.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_ContractBiller);
    }
    else {
      const index = this.edit_array_ContractBiller.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_ContractBiller.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_ContractBiller)

    }

  }
  EditCHK_Deposits(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_Deposits = data;
    this.checkbox_value_Deposits = event.target.checked;
    console.log(this.checkbox_value_Deposits)
    if (this.checkbox_value_Deposits) {

      this.edit_array_Deposits.push(data);
      this.edit_array_Deposits.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_Deposits);
    }
    else {
      const index = this.edit_array_Deposits.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_Deposits.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_Deposits)

    }

  }

  EditCHK_Withdrawal(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_Withdrawal = data;
    this.checkbox_value_Withdrawal = event.target.checked;
    console.log(this.checkbox_value_Withdrawal)
    if (this.checkbox_value_Withdrawal) {

      this.edit_array_Withdrawal.push(data);
      this.edit_array_Withdrawal.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_Withdrawal);
    }
    else {
      const index = this.edit_array_Withdrawal.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_Withdrawal.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_Withdrawal)

    }

  }
  EditCHK_NonTradePurchaseEntry(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_NonTradePurchaseEntry = data;
    this.checkbox_value_NonTradePurchaseEntry = event.target.checked;
    console.log(this.checkbox_value_NonTradePurchaseEntry)
    if (this.checkbox_value_NonTradePurchaseEntry) {

      this.edit_array_NonTradePurchaseEntry.push(data);
      this.edit_array_NonTradePurchaseEntry.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_NonTradePurchaseEntry);
    }
    else {
      const index = this.edit_array_NonTradePurchaseEntry.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_NonTradePurchaseEntry.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_NonTradePurchaseEntry)

    }

  }
  EditCHK_CalendarTemplate(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CalendarTemplate = data;
    this.checkbox_value_CalendarTemplate = event.target.checked;
    console.log(this.checkbox_value_CalendarTemplate)
    if (this.checkbox_value_CalendarTemplate) {

      this.edit_array_CalendarTemplate.push(data);
      this.edit_array_CalendarTemplate.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CalendarTemplate);
    }
    else {
      const index = this.edit_array_CalendarTemplate.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CalendarTemplate.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CalendarTemplate)

    }

  }
  EditCHK_TransactionSalary(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransactionSalary = data;
    this.checkbox_value_TransactionSalary = event.target.checked;
    console.log(this.checkbox_value_TransactionSalary)
    if (this.checkbox_value_TransactionSalary) {

      this.edit_array_TransactionSalary.push(data);
      this.edit_array_TransactionSalary.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransactionSalary);
    }
    else {
      const index = this.edit_array_TransactionSalary.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransactionSalary.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransactionSalary)

    }

  }
  EditCHK_TransactionPettyCash(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransactionPettyCash = data;
    this.checkbox_value_TransactionPettyCash = event.target.checked;
    console.log(this.checkbox_value_TransactionPettyCash)
    if (this.checkbox_value_TransactionPettyCash) {

      this.edit_array_TransactionPettyCash.push(data);
      this.edit_array_TransactionPettyCash.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransactionPettyCash);
    }
    else {
      const index = this.edit_array_TransactionPettyCash.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransactionPettyCash.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransactionPettyCash)

    }

  }
  EditCHK_TransactionEntry(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransactionEntry = data;
    this.checkbox_value_TransactionEntry = event.target.checked;
    console.log(this.checkbox_value_TransactionEntry)
    if (this.checkbox_value_TransactionEntry) {

      this.edit_array_TransactionEntry.push(data);
      this.edit_array_TransactionEntry.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransactionEntry);
    }
    else {
      const index = this.edit_array_TransactionEntry.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransactionEntry.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransactionEntry)

    }

  }
  EditCHK_TransactionApproval(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransactionApproval = data;
    this.checkbox_value_TransactionApproval = event.target.checked;
    console.log(this.checkbox_value_TransactionApproval)
    if (this.checkbox_value_TransactionApproval) {

      this.edit_array_TransactionApproval.push(data);
      this.edit_array_TransactionApproval.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransactionApproval);
    }
    else {
      const index = this.edit_array_TransactionApproval.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransactionApproval.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransactionApproval)

    }

  }
  EditCHK_TransApprovalDataCenter(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransApprovalDataCenter = data;
    this.checkbox_value_TransApprovalDataCenter = event.target.checked;
    console.log(this.checkbox_value_TransApprovalDataCenter)
    if (this.checkbox_value_TransApprovalDataCenter) {

      this.edit_array_TransApprovalDataCenter.push(data);
      this.edit_array_TransApprovalDataCenter.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransApprovalDataCenter);
    }
    else {
      const index = this.edit_array_TransApprovalDataCenter.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransApprovalDataCenter.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransApprovalDataCenter)

    }

  }
  EditCHK_LicenseKey(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_LicenseKey = data;
    this.checkbox_value_LicenseKey = event.target.checked;
    console.log(this.checkbox_value_LicenseKey)
    if (this.checkbox_value_LicenseKey) {

      this.edit_array_LicenseKey.push(data);
      this.edit_array_LicenseKey.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_LicenseKey);
    }
    else {
      const index = this.edit_array_LicenseKey.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_LicenseKey.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_LicenseKey)

    }

  }

  EditCHK_VSProvisioning(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_VSProvisioning = data;
    this.checkbox_value_VSProvisioning = event.target.checked;
    console.log(this.checkbox_value_VSProvisioning)
    if (this.checkbox_value_VSProvisioning) {

      this.edit_array_VSProvisioning.push(data);
      this.edit_array_VSProvisioning.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_VSProvisioning);
    }
    else {
      const index = this.edit_array_VSProvisioning.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_VSProvisioning.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_VSProvisioning)

    }

  }
  EditCHK_ProductStock(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_ProductStock = data;
    this.checkbox_value_ProductStock = event.target.checked;
    console.log(this.checkbox_value_ProductStock)
    if (this.checkbox_value_ProductStock) {

      this.edit_array_ProductStock.push(data);
      this.edit_array_ProductStock.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_ProductStock);
    }
    else {
      const index = this.edit_array_ProductStock.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_ProductStock.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_ProductStock)

    }

  }
  EditCHK_ResellerProduct(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_ResellerProduct = data;
    this.checkbox_value_ResellerProduct = event.target.checked;
    console.log(this.checkbox_value_ResellerProduct)
    if (this.checkbox_value_ResellerProduct) {

      this.edit_array_ResellerProduct.push(data);
      this.edit_array_ResellerProduct.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_ResellerProduct);
    }
    else {
      const index = this.edit_array_ResellerProduct.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_ResellerProduct.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_ResellerProduct)

    }

  }

  EditCHK_ProductStockTransferAlet(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_ProductStockTransferAlet = data;
    this.checkbox_value_ProductStockTransferAlet = event.target.checked;
    console.log(this.checkbox_value_ProductStockTransferAlet)
    if (this.checkbox_value_ProductStockTransferAlet) {

      this.edit_array_ProductStockTransferAlet.push(data);
      this.edit_array_ProductStockTransferAlet.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_ProductStockTransferAlet);
    }
    else {
      const index = this.edit_array_ProductStockTransferAlet.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_ProductStockTransferAlet.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_ProductStockTransferAlet)

    }

  }

  EditCHK_StockPreApproval(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_StockPreApproval = data;
    this.checkbox_value_StockPreApproval = event.target.checked;
    console.log(this.checkbox_value_StockPreApproval)
    if (this.checkbox_value_StockPreApproval) {

      this.edit_array_StockPreApproval.push(data);
      this.edit_array_StockPreApproval.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_StockPreApproval);
    }
    else {
      const index = this.edit_array_StockPreApproval.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_StockPreApproval.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_StockPreApproval)

    }

  }
  EditCHK_DIDInventoryProduct(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_DIDInventoryProduct = data;
    this.checkbox_value_DIDInventoryProduct = event.target.checked;
    console.log(this.checkbox_value_DIDInventoryProduct)
    if (this.checkbox_value_DIDInventoryProduct) {

      this.edit_array_DIDInventoryProduct.push(data);
      this.edit_array_DIDInventoryProduct.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_DIDInventoryProduct);
    }
    else {
      const index = this.edit_array_DIDInventoryProduct.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_DIDInventoryProduct.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_DIDInventoryProduct)

    }

  }
  EditCHK_CustomerProject(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CustomerProject = data;
    this.checkbox_value_CustomerProject = event.target.checked;
    console.log(this.checkbox_value_CustomerProject)
    if (this.checkbox_value_CustomerProject) {

      this.edit_array_CustomerProject.push(data);
      this.edit_array_CustomerProject.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CustomerProject);
    }
    else {
      const index = this.edit_array_CustomerProject.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CustomerProject.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CustomerProject)

    }

  }

  EditCHK_CustomerMaster(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CustomerMaster = data;
    this.checkbox_value_CustomerMaster = event.target.checked;
    console.log(this.checkbox_value_CustomerMaster)
    if (this.checkbox_value_CustomerMaster) {

      this.edit_array_CustomerMaster.push(data);
      this.edit_array_CustomerMaster.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CustomerMaster);
    }
    else {
      const index = this.edit_array_CustomerMaster.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CustomerMaster.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CustomerMaster)

    }

  }

  EditCHK_RecurringCheckerList(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_RecurringCheckerList = data;
    this.checkbox_value_RecurringCheckerList = event.target.checked;
    console.log(this.checkbox_value_RecurringCheckerList)
    if (this.checkbox_value_RecurringCheckerList) {

      this.edit_array_RecurringCheckerList.push(data);
      this.edit_array_RecurringCheckerList.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_RecurringCheckerList);
    }
    else {
      const index = this.edit_array_RecurringCheckerList.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_RecurringCheckerList.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_RecurringCheckerList)

    }

  }

  EditCHK_GuruDetails(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_GuruDetails = data;
    this.checkbox_value_GuruDetails = event.target.checked;
    console.log(this.checkbox_value_GuruDetails)
    if (this.checkbox_value_GuruDetails) {

      this.edit_array_GuruDetails.push(data);
      this.edit_array_GuruDetails.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_GuruDetails);
    }
    else {
      const index = this.edit_array_GuruDetails.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_GuruDetails.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_GuruDetails)

    }

  }
  EditCHK_CallLog(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_CallLog = data;
    this.checkbox_value_CallLog = event.target.checked;
    console.log(this.checkbox_value_CallLog)
    if (this.checkbox_value_CallLog) {

      this.edit_array_CallLog.push(data);
      this.edit_array_CallLog.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_CallLog);
    }
    else {
      const index = this.edit_array_CallLog.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_CallLog.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_CallLog)

    }

  }

  EditCHK_DC(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_DC = data;
    this.checkbox_value_DC = event.target.checked;
    console.log(this.checkbox_value_DC)
    if (this.checkbox_value_DC) {

      this.edit_array_DC.push(data);
      this.edit_array_DC.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_DC);
    }
    else {
      const index = this.edit_array_DC.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_DC.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_DC)

    }

  }

  EditCHK_EmailNotification(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_EmailNotification = data;
    this.checkbox_value_EmailNotification = event.target.checked;
    console.log(this.checkbox_value_EmailNotification)
    if (this.checkbox_value_EmailNotification) {

      this.edit_array_EmailNotification.push(data);
      this.edit_array_EmailNotification.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_EmailNotification);
    }
    else {
      const index = this.edit_array_EmailNotification.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_EmailNotification.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_EmailNotification)

    }

  }

  EditCHK_TimeBooking(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TimeBooking = data;
    this.checkbox_value_TimeBooking = event.target.checked;
    console.log(this.checkbox_value_TimeBooking)
    if (this.checkbox_value_TimeBooking) {

      this.edit_array_TimeBooking.push(data);
      this.edit_array_TimeBooking.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TimeBooking);
    }
    else {
      const index = this.edit_array_TimeBooking.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TimeBooking.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TimeBooking)

    }

  }

  EditCHK_TransApprovalDeposit(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId_TransDepositApproval = data;
    this.checkbox_value_TransDepositApproval = event.target.checked;
    console.log(this.checkbox_value_TransDepositApproval)
    if (this.checkbox_value_TransDepositApproval) {

      this.edit_array_TransDepositApproval.push(data);
      this.edit_array_TransDepositApproval.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array_TransDepositApproval);
    }
    else {
      const index = this.edit_array_TransDepositApproval.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_TransDepositApproval.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array_TransDepositApproval)

    }

  }


  onLoadGet() {
    let api_req: any = new Object();
    let apiLoad_req: any = new Object();
    api_req.moduleType = "quotation";
    api_req.api_url = "admin/user_add_details";
    api_req.api_type = "web";
    api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
    apiLoad_req.action = "user_add_details";
    api_req.element_data = apiLoad_req;

    this.serverService.sendServer(api_req).subscribe((response: any) => {
      // console.log("this.checkboxCB_TransDepositApproval",this.checkboxCB_TransDepositApproval)
      console.log("admin/user_add_details", response)

      if (response.status != '') {
        this.designationDetailsList = response.designation_details;
        this.userDetailsList = response.user_det;
        this.billerDetailsList = response.biller_det;
        this.pettyCashColorList = response.petty_cash_color_arr;
        this.HRGroupList = response.user_hr

      }
      else {

      }


    });
  }
  handleChange(data: any, evt: any) {
    var id = data;
    this.BillerID = id;
    console.log(id, "biller ID");
    var xyz = evt.target.id;
    console.log(xyz, "target");
  }
  mouse() {
    iziToast.warning({
      message: "Check all the mandatory Input Fields before clicking Submit Option",
      position: 'topRight'
    });
  }
  save() {
    //     if($("#HRGroupq").val()==''){
    // this.HRValidation=true;
    // return false;
    //     }
    console.log($("#HRGroupq").val())
    console.log("this.files_Signature;", this.files_Signature)
    console.log("this.signature_billerid;", this.signature_billerid)
    console.log("this.addUserForm2.value.addresses", this.addUserForm2.value.addresses)
    var data = new FormData();

    data.append('firstName', this.addUserForm1.value.displayName);
    data.append('firstName_salary', this.addUserForm1.value.firstName);
    data.append('lastName', this.addUserForm1.value.lastName);
    data.append('userName', this.addUserForm1.value.userName);
    data.append('department', this.addUserForm1.value.department);
    data.append('designation', this.addUserForm1.value.designation);
    data.append('fin_number', this.addUserForm1.value.FIN);
    data.append('bank_acc_no', this.addUserForm1.value.bankAccountNO);
    data.append('emp_address', this.addUserForm1.value.address);
    data.append('dob', this.addUserForm1.value.dob);
    data.append('age', this.addUserForm1.value.age);
    data.append('pf_status', this.addUserForm1.value.epfcpfStatus);
    data.append('con1', this.addUserForm1.value.sinda);
    data.append('con2', this.addUserForm1.value.socso);
    data.append('smsNotification', this.addUserForm1.value.smsNotif);
    data.append('phoneNo', this.addUserForm1.value.phoneNumber);
    data.append('emailNotification', this.addUserForm1.value.emailNotif);
    data.append('emailId', this.addUserForm1.value.emailID);
    data.append('main_contactus', this.addUserForm1.value.cmsContactPhone);
    data.append('alternate_contactus', this.addUserForm1.value.cmsAlternativeContactPhone);
    data.append('alternate_support_mail', this.addUserForm1.value.cmsAlternativeSupportMail);
    data.append('alternate_website', this.addUserForm1.value.cmsAlternativeSupportWebsite);
    data.append('callEmailId', this.addUserForm1.value.bccEmailID);
    data.append('petty_color_code', this.addUserForm1.value.pettyCashColorCode);
    data.append('signatureFilename', this.addUserForm1.value.Signature);

    data.append('monthlySalary', JSON.stringify(this.addUserForm2.value.addresses));

    let signature_billerid_arr = this.signature_billerid;

    signature_billerid_arr.forEach(function (bill_value) {
      data.append('signatureFilename' + bill_value, $("#uploaded-img" + bill_value)[0].files[0]);
    });

    data.append('staffStatus', this.addUserForm1.value.Staff);
    data.append('probation', this.addUserForm1.value.ProbationIn);
    data.append('user_auth', this.addUserForm1.value.verification2D);
    data.append('ext_no', this.addUserForm1.value.ExtensionNumber);
    data.append('short_name', this.addUserForm1.value.ShortName);
    data.append('friendly_name', this.addUserForm1.value.FriendlyName);
    data.append('hr_group_id', this.addUserForm1.value.HRGroup);
    data.append('billerSignature_billerId', this.signature_billerid);
    data.append('from_dt_bill', this.addUserForm7.value.billingFromDt);
    data.append('to_dt_bill', this.addUserForm7.value.billingToDt);
    data.append('filter_month_val', this.addUserForm7.value.billingFilterMonth);
    data.append('ind_petty_cash', this.addUserForm7.value.IndividualPettyCashFromDate_TextBox);

    //permission starts
    data.append('biller_per', this.edit_array_BillerAll);
    data.append('quotation_per', this.edit_array_quotation_per);
    data.append('quotation_per_old', this.edit_array_Quotation);
    data.append('purchaseOrder_per', this.edit_array_PurchaseOrder);
    data.append('creditNote_per', this.edit_array_CreditNote);
    data.append('purchaseEntry_per', this.edit_array_PurchaseEntry);
    data.append('dc_per', this.edit_array_DeliveryChelan);
    data.append('dash_per', this.edit_array_Dashboard);
    data.append('crmEnquiry_per', this.edit_array_CRMEnquiry);
    data.append('customer_leads_per', this.edit_array_CustomerLeads);
    data.append('contract_per', this.edit_array_ContractBiller);
    data.append('deposit_per', this.edit_array_Deposits);
    data.append('withdrawal_per', this.edit_array_Withdrawal);
    data.append('nontrade_purchase_per', this.edit_array_NonTradePurchaseEntry);
    data.append('salary_per', this.edit_array_TransactionSalary);
    data.append('pettycash_per', this.edit_array_TransactionPettyCash);
    data.append('trans_entry_per', this.edit_array_TransactionEntry);
    data.append('trans_approve_per', this.edit_array_TransactionApproval);
    data.append('trans_approve_data_center_per', this.edit_array_TransApprovalDataCenter);
    data.append('license_key_per', this.edit_array_LicenseKey);
    data.append('vs_provisioning_per', this.edit_array_VSProvisioning);
    data.append('product_stock_per', this.edit_array_ProductStock);
    data.append('reseller_prod_price_per', this.edit_array_ResellerProduct);
    data.append('product_transfer_per', this.edit_array_ProductStockTransferAlet);
    data.append('stock_pre_approval_per', this.edit_array_StockPreApproval);
    data.append('did_product_per', this.edit_array_DIDInventoryProduct);
    data.append('customer_projects_per', this.edit_array_CustomerProject);
    data.append('recurring_date_per', this.edit_array_RecurringCheckerList);
    data.append('customer_mst_per', this.edit_array_CustomerMaster);
    data.append('calendar_template_per', this.edit_array_CalendarTemplate);
    data.append('guru_details_biller', this.edit_array_GuruDetails);
    
    //permission end


    data.append('defaults_biller_id', this.BillerID);
    data.append('probation', this.addUserForm1.value.ProbationIn);
    data.append('role_check', this.edit_array_Check);
    data.append('role_drop', this.role_drop_val);
    data.append('ind_petty_dt', this.addUserForm7.value.IndividualPettyCashandFromDate_date);
    var self = this;
    $.ajax({
      type: 'POST',
      url: 'https://erp1.cal4care.com/api/admin/user_details_save',
      cache: false,
      contentType: false,
      processData: false,
      data: data,
      success: function (result: any) {
        if (result.status == true) {
          self.router.navigate(['/usermanagement']);
          iziToast.success({
            message: "User insert successfully",
            position: 'topRight'
          }, 5000);

        }

        else {
          iziToast.warning({
            message: "Not Saved. Check the Input",
            position: 'topRight'
          });
        }
        // self.onLoadGet();
      },
      error: function (err: any) {
        console.log(err);
        iziToast.error({
          message:"Check the Input Give Input for all mandatory fields like Display Name, First Name,Last Name,User Name, Password, HR Group, Default Biller",
          position: 'topRight'
        });
      }
    })


  }

  Edit_CheckboxValues(data: any, event: any) {
    console.log("List - Checkbox ID", data);
    this.groupSelectCheckCommonId = data;
    this.Checkbox_value = event.target.checked;
    console.log(this.Checkbox_value)
    if (this.Checkbox_value) {

      this.edit_array_Check.push(data);
      this.edit_array_Check.join(',');
      console.log("Final check After checkbox selected list", this.edit_array_Check);
    }
    else {
      const index = this.edit_array_Check.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array_Check.splice(index, 1);
      }
      console.log("Final check After Deselected selected list", this.edit_array_Check)

    }

  }


}

export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };

};
export const passwordMatchingValidatior123: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordDetails = control.get('passwordDetails');
  const confirmPasswordDetails = control.get('confirmPasswordDetails');

  return passwordDetails?.value === confirmPasswordDetails?.value ? null : { notmatched1: true };

};

// export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const displayName = control.get('displayName');
//   const firstName = control.get('firstName');
 

//   return displayName && firstName && displayName.value === firstName.value ? { identityRevealed: true } : null;

//   // return passwordDetails?.value === confirmPasswordDetails?.value ? null : { notmatched1: true };

// };

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const displayName = control.get('displayName');
  const firstName = control.get('firstName');

  return displayName && firstName && displayName.value === firstName.value ? { identityRevealed: true } : null;
};


