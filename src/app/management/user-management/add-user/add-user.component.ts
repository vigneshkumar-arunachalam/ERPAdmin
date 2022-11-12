import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
//Permission -checkbox-Quotation New
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





  //Transaction
  Transaction_left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Show All'];
  Transaction_Right = [];
  //TransactionApproval
  TransactionApproval_Left = ['Reject', 'Task Approval', 'List', 'Quotation', 'Approval'];
  TransactionApproval_Right = [];
  //TransactionDeposit
  TransactionDeposit_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionDeposit_Right = [];
  //TransactionCommission
  TransactionCommission_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionCommission_Right = [];
  //TransactionWithdrawal
  TransactionWithdrawal_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionWithdrawal_Right = [];
  //TransactionPurchaseEntry
  TransactionPurchaseEntry_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionPurchaseEntry_Right = [];
  //Transactionsalary
  Transactionsalary_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  Transactionsalary_Right = [];
  //TransactionPettyCash
  TransactionPettyCash_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Credit'];
  TransactionPettyCash_Right = [];
  //Transaction Vendor Order
  TransactionVendorOrder_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionVendorOrder_Right = [];
  //Transaction invoice Payment
  TransactionInvoicePayment_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionInvoicePayment_Right = [];
  //Transaction Others
  TransactionOthers_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  TransactionOthers_Right = [];
  //bottom
  //Deposits
  Deposits_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  Deposits_Right = [];

  //issue
  Issues_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  Issues_Right = [];
  //Customer
  Customer_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Show All', 'Share', 'Cut Mail', 'Spl Edit', 'Cust Details', 'Bill code'];
  Customer_Right = [];
  //Customer Contract
  CustomerContract_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'User Att', 'Oth Att', 'Inv Show', 'Biller Show'];
  CustomerContract_Right = [];
  //Contract Name Management
  CustomerNameMgmt_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CustomerNameMgmt_Right = [];
  //Contract Classification
  ContractClassification_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  ContractClassification_Right = [];
  //Customer Leads
  CustomerLeads_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Lead Conv', 'Main Tab'];
  CustomerLeads_Right = [];
  //3cx CRM Admin
  c3xCRMAdmin_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  c3xCRMAdmin_Right = [];
  //Mrvoip Package
  MrvoipPackage_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  MrvoipPackage_Right = [];
  //CRM(Enquiry)
  CRMEnquiry_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Cmts', 'Send Mail', 'Mail View', 'CSV Export', 'Spec Per View',
    'Spec Per Filter', '3cx', 'Reseller', 'Nx32', 'User Ass'];
  CRMEnquiry_Right = [];
  //	CRM Template
  CRMTemplate_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CRMTemplate_Right = [];
  //	Calendar Template
  CalendarTemplate_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CalendarTemplate_Right = [];
  //	Vendor
  vendor_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  vendor_Right = [];
  //Product Category
  ProductCategory_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Pur % Update'];
  ProductCategory_Right = [];
  //Reseller Product Category
  ResellerProductCategory_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  ResellerProductCategory_Right = [];
  //	Product 
  Product_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  Product_Right = [];
  //	Reseller Product 
  ResellerProduct_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  ResellerProduct_Right = [];
  //	Product Stock(Stock Menu)
  ProductStock_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'P-->Tran', 'A<--P', 'P-->I', 'P <--I', 'Reset', 'RMA Re-Iss', '	Pri Upd'];
  ProductStock_Right = [];
  //	DID Inventory
  DIDInventory_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'P-->Tran', 'A<--P', 'P-->I', 'P <--I'];
  DIDInventory_Right = [];
  //3cx API Credit Report
  API3cxCreditReport_Left = ['List', 'Cal4care', 'Dcare'];
  API3cxCreditReport_Right = [];
  //Recurring Date List
  RecurringDateList_Left = ['View', 'Update'];
  RecurringDateList_Right = [];
  //	Individual Petty Cash and From Date
  IndividualPettyCashandFromDate_Left = ['View'];
  IndividualPettyCashandFromDate_Right = [];


  //License Category
  LicenseCategory_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  LicenseCategory_Right = [];
  //License Product
  LicenseProduct_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  LicenseProduct_Right = [];
  //License Key
  LicenseKey_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search',
    'Send Mail', 'Issue Key', 'Exp Date', 'Buy Lic', 'AV <- P', 'P -> AS', 'P <- AS', 'Lic Grp Del', 'AV Tab', 'Pool Tab', 'Ass Tab', 'Cld Tab', 'Res Tab'];
  LicenseKey_Right = [];

  //Customer Projects Details
  CustomerProjectsDetails_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search',
    'Send Mail', 'Team Pwd', 'Back Upload', 'Back Down', 'Back Delete', 'Show All'];
  CustomerProjectsDetails_Right = [];
  //Vendor Product
  VendorProduct_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  VendorProduct_Right = [];
  //Courier
  Courier_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  Courier_Right = [];

  // Password Mgt Details
  PasswordMgtDetails_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Spec Per View'];
  PasswordMgtDetails_Right = [];
  // PurchaseEntry
  PurchaseEntry_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  PurchaseEntry_Right = [];
  // Non Trade Purchase Entry
  NonTradePurchaseEntry_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  NonTradePurchaseEntry_Right = [];
  // Stock Entry
  StockEntry_Left = ['Add New', 'Edit', 'Delete', 'List'];
  StockEntry_Right = [];
  // Salary Entry
  SalaryEntry_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  SalaryEntry_Right = [];

  // Billing
  Billing_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search',
    'Mail', 'Pay', ' View', 'Pay Link', 'Land View', 'All Bills', 'Sp Per',
    'Rec', 'Sale Rep', 'Alert', 'Spl Edit', ' P.I', 'Gr.Del', ' S->PI', 'R Comm',
    'F Attch', 'T Chart', 'Act-Pri Share', '1-10 Edit Per', 'All Tax', 'Duplicate',
    'Send PO', 'Term Con', 'Inv RV', 'Inv Type', 'Quot Conv', 'Shared', 'Inv to DID Conv',
    'Coupon', 'DO Conv', 'Set Previous', ' Sus-Inv-List', 'Export-local',
    '[From-to Date Filter] From dt', 'To dt', ' Filter Month'];
  Billing_Right = [];

  // Profama Invoice
  ProfamaInvoice_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search',
    'Mail', 'Pay', 'View', 'Land Mail', 'Land View', 'All Bills', 'Sp Per', 'Rec', 'Sale Rep', 'Alert', 'Spl Edit',
    'P.I Gr.Del', 'PI->S', 'I->D'];
  ProfamaInvoice_Right = [];

  // Quotation
  Quotation_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Mail', 'View'];
  Quotation_Right = [];

  // Quotation New
  QuotationNew_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Mail', 'View',
    'Sales Rep', 'Show All User', 'Share Per', 'Act-Pri Share'];
  QuotationNew_Right = [];

  // Purchase Order
  PurchaseOrder_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  PurchaseOrder_Right = [];

  // Credit Note
  CreditNote_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CreditNote_Right = [];
  // 	Delivery Challan
  DeliveryChallan_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  DeliveryChallan_Right = [];
  // Delivery Order
  DeliveryOrder_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  DeliveryOrder_Right = [];
  // VS Provisioning
  VSProvisioning_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  VSProvisioning_Right = [];
  // 	Rate File Upload
  RateFileUpload_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  RateFileUpload_Right = [];
  // 	Coupon Details
  CouponDetails_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CouponDetails_Right = [];

  // 		Calncall Shopping Master
  CalncallShoppingMaster_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  CalncallShoppingMaster_Right = [];
  // 	Reseller Shopping Master
  ResellerShoppingMaster_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  ResellerShoppingMaster_Right = [];
  // 		Document Preparation list
  DocumentPreparationlist_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  DocumentPreparationlist_Right = [];
  // 	Payment Link Access list
  PaymentLinkAccessList_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  PaymentLinkAccessList_Right = [];
  // 	Data Center Request
  DataCenterRequest_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search'];
  DataCenterRequest_Right = [];
  // 	Data Center Masters
  DataCenterMasters_Left = ['Delete', 'List', 'Approve'];
  DataCenterMasters_Right = [];
  // 	Dynamic Excel
  DynamicExcel_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'History', 'Share'];
  DynamicExcel_Right = [];
  // 		Price List
  PriceList_Left = ['Add New', 'Edit', 'Delete', 'List', 'Search', 'Share', 'History'];
  PriceList_Right = [];
  // 		Call Logs
  CallLogs_Left = ['Add New', 'Rating', 'Call Assigned By Me', 'Comments'];
  CallLogs_Right = [];













  drop(event: CdkDragDrop<string[]>) {
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
  }
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
  columntest:any;
  rowtest:any;

  addUserForm1: FormGroup;
  addUserForm2: FormGroup;
  addUserForm3: FormGroup;
  addUserForm4: FormGroup;
  addUserForm5: FormGroup;
  addUserForm6: FormGroup;
  addUserForm7: FormGroup;
  addUserForm8: FormGroup;
  addUserFormTableData: FormGroup;

  constructor(private serverService: ServerService, private fb: FormBuilder, private router: Router) {
    this.addUserForm2 = this.fb.group({
      addresses: this.fb.array([this.createAddress()])
    });
  }

  ngOnInit(): void {
    this.onLoadGet();
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


      this.columntest=["a","b","c"];
      this.rowtest=['{"a1","b1","c1"},{"a1","b1","c1"}'];



    this.addUserForm1 = new FormGroup({
      'displayName': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'passwordDetails': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPasswordDetails': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'department': new FormControl('', [Validators.required]),
      'designation': new FormControl('', [Validators.required]),
      'FIN': new FormControl('', [Validators.required]),
      'bankAccountNO': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'dob': new FormControl,
      'age': new FormControl,
      'epfcpfStatus': new FormControl,
      'sinda': new FormControl,
      'socso': new FormControl


    },
      { validators: [passwordMatchingValidatior, passwordMatchingValidatior123] }
    );

    this.addUserForm3 = new FormGroup({
      'smsNotif': new FormControl,
      'phoneNumber': new FormControl,
      'emailNotif': new FormControl,
      'emailID': new FormControl,
      'cmsContactPhone': new FormControl,
      'cmsAlternativeContactPhone': new FormControl,
      'cmsAlternativeSupportMail': new FormControl,
      'cmsAlternativeSupportWebsite': new FormControl,
      'bccEmailID': new FormControl,
      'pettyCashColorCode': new FormControl,
      'Staff': new FormControl,
      'ProbationIn': new FormControl,
      'permissionAs': new FormControl,


    });
    this.addUserForm4 = new FormGroup({

      'TransDepositApproval': new FormControl,
      'TransCommissionApproval': new FormControl,
      'TransWithdrawalApproval': new FormControl,
      'TransPurchaseApproval': new FormControl,
      'TransPettyCashApproval': new FormControl,
      'TransVendorApproval': new FormControl,
      'TransInvoiceApproval': new FormControl,
      'TransQuotationFilterApproval': new FormControl,
      'InvoiceIndividualFilter': new FormControl,
      'ApprovalFilter': new FormControl,
      'TransApprovalTab': new FormControl,
      'TransApprovalMain': new FormControl,
      'TransApprovalProduct': new FormControl,
      'TransApprovalDIDNumber': new FormControl,
      'TransApprovalSmallTask': new FormControl,
      'TransApprovalInvPayment': new FormControl,
      'TransApprovalOnlineShop': new FormControl,
      'TransApprovalDIDDemo': new FormControl,
      'TransApprovalRMAIssues': new FormControl,
      'TransApprovalOther': new FormControl,
      'TransApprovalHRA': new FormControl,
      'TransApprovalDataCenter': new FormControl,
      'QuotationSentAppName': new FormControl,
      'TransactionApprovalShare': new FormControl,
      'TransactionApprovalIndividualFilter': new FormControl,
      'CustomerMasterApptoval': new FormControl,
      'DIDInvoice': new FormControl,
      'WriteOffInvoice': new FormControl,
      'CMSLogin': new FormControl,
      'QuotationTemplate': new FormControl,
      'ResellerManagement': new FormControl,
      'CallLogs': new FormControl,
      'PictureGallery': new FormControl,
      'InternalTickets': new FormControl,
      'PettyCashReport': new FormControl,
      'WidthdrawlReport': new FormControl,
      'PriceCategory': new FormControl,
      'EnquiryForm': new FormControl,
      'CMSCountry': new FormControl,
      'DIDNumberCatalog': new FormControl,
      'DIDProvider': new FormControl,
      'DIDTrunkName': new FormControl,
      'DepositMgt': new FormControl,
      'SmallTask': new FormControl,
      'ProductCategory': new FormControl,
      'ProductQuotation': new FormControl,
      'StockInventoryReport': new FormControl,
      'RateCatelog': new FormControl,
      'StockinventoryEntry': new FormControl,
      'DIDInventoryEntry': new FormControl,
      'SucuriipAccess': new FormControl,
      'MrvoipLicenseKey': new FormControl,
      'SoftPhoneLicense': new FormControl,
      'APIToken': new FormControl,
      'PurchaseEntry': new FormControl,
      'PurchaseEntryYearly': new FormControl,
      'PurchaseEntryyearlyEdit': new FormControl,
      'PurchaseEntryVoipTrendChart': new FormControl,
      'PurchaseentryMrvoipTrendEntry': new FormControl,
      'PurchaseentryMrvoipTrendChart': new FormControl,
      'PurchaseentryCall4telTrendEntry': new FormControl,
      'PurchaseentryCall4telTrendChart': new FormControl,
      'PurchaseEntryWaiting': new FormControl,
      'NonTradePurchaseEntry': new FormControl,
      'NewCustomerApproval': new FormControl,
      'ResellerPaymentMenu': new FormControl,
      'ResellerPaymentAll': new FormControl,
      'MrvoipCalncall_callacloudMenu': new FormControl,
      'MrvoipPackagePrice': new FormControl,
      'MrvoipLeftProductMenu': new FormControl,
      'MrvoipIndustries': new FormControl,
      'MrvoipCaseStudies': new FormControl,
      'MrvoipContactDetails': new FormControl,
      'ERPUserMgt': new FormControl,
      'ExternalBlog': new FormControl,
      'InternalBlog': new FormControl,
      'NX32SerialNumber': new FormControl,
      'NX32DocumentUpload': new FormControl,
      'DynamicExcel': new FormControl,
      'RevenueReport': new FormControl,
      'MGOrderList': new FormControl,
      'YGOrderList': new FormControl,
      'CustomerInvoiceShare': new FormControl,
      'IPAllowedRule': new FormControl,
      'RenewalReminder': new FormControl,
      'WebrtcIP': new FormControl,
      'AttendanceReports': new FormControl,
      'CPFContribution': new FormControl,
      'WebsiteSubscribeEmail': new FormControl,
      'Buy3cxLicensePage': new FormControl,
      'Buy3cxpermisUser': new FormControl,
      'Call4telAddressLogoshowPartner': new FormControl,
      'MrvoipAddressLogoshowPartner': new FormControl,
      'MconnectAddressLogoshowPartner': new FormControl,



    });
    this.addUserForm5 = new FormGroup({
      'RecurringCheckerList': new FormControl,
      'EnquiryDetails': new FormControl,
      'OverduePaymentsNotification': new FormControl,
      'Cal4CarePteLtdOverdue': new FormControl,
      'DCARETechnologiesIndiaPvtLtdOverdue': new FormControl,
      'RecurringDateUpdate': new FormControl,
      'StockPreApproval': new FormControl,
      'WebSiteEnquiry': new FormControl,
      'ConsolidatedOverdue': new FormControl,
      'PaymentFollowInvoice': new FormControl,
      'TransactionApproval': new FormControl,
      'InCompletesTaskList': new FormControl,
      'Cal4careSdnBhdOverdue': new FormControl,
      'MarshalSystemConsultancyOverdue': new FormControl,
      'PurchaseEntryTrend': new FormControl,
      'Verfication2ds': new FormControl,
      'Enquiry3cx': new FormControl,
      'Cal4careSdnBhdGSTRpt': new FormControl,
      'AllPaymentFollowInvoice': new FormControl,
      'SendtoPostal': new FormControl,
      'DcareTechnologiesPteLtdOverdue': new FormControl,
      'Cal4CareJapanCoLtdOverdue': new FormControl,
      'CloudRenewalLicKeyPopup': new FormControl,
      'AllMEnquiry': new FormControl,
      'Assigned3cxEnquiry': new FormControl,
      'Cal4careThailandCoLtdOverdue': new FormControl
    });
    this.addUserForm6 = new FormGroup({
      'CustomSearchIconshow': new FormControl,
      'CustomerSerach': new FormControl,
      'Invoice': new FormControl,
      'LicenseKey': new FormControl,
      'VsProvisioning': new FormControl,
      'QuotationSerach': new FormControl,
      'CreditNote': new FormControl,
      'DIDNumber': new FormControl,
      'AllPage': new FormControl,
      'ProformaInvoice': new FormControl,
      'PrepaidNote': new FormControl,
      'CustomerProjects': new FormControl

    });
    this.addUserForm7 = new FormGroup({
      'VOIPCreditManager': new FormControl,
      'VOIPSuspendAccount': new FormControl,
      'ProductStockReportUpdate': new FormControl,
      'CurrenctStockShow': new FormControl,
      'RateCatelogShow': new FormControl,
      'ActPurchasePriceShow': new FormControl,
      'DefaultMenuShow': new FormControl,
      'DefaultMenuShowLowLevel': new FormControl,
      'CalncallMenuShow': new FormControl,
      'ResellerShoppingMenu': new FormControl,
      'PublicTaskManager': new FormControl,
      'PersonalTaskManager': new FormControl,
      'DailyWorkReport': new FormControl,
      'Mailer': new FormControl,
      'HelpDesk': new FormControl,
      'C4CTurnOverMap': new FormControl,
      'SpecialLogin': new FormControl,
      'LeftSideTurnOverChart': new FormControl,
      'IndividualPettyCashCreditPersonSelect': new FormControl,
      'ApprovalDelete': new FormControl,

    });
    this.addUserForm8 = new FormGroup({
      'CreditMgtDetails': new FormControl,
      'BankReports': new FormControl,
      'LedgerReports': new FormControl,
      'DashBoard': new FormControl,
      'InvoiceReports': new FormControl,
      'CallLogReports': new FormControl,
      'SendMail': new FormControl,
      'PettyCash': new FormControl,
      'Logistics': new FormControl,



    });
    this.addUserFormTableData = new FormGroup({
      'billerAll_Cal4CareSG': new FormControl,
      'billerAll_MARSHAL': new FormControl,
      'billerAll_CC': new FormControl,
      'billerAll_DCSG': new FormControl,
      'billerAll_DCCBE': new FormControl,
      'billerAll_Cal4CareJB': new FormControl,
      'billerAll_CALNCALL': new FormControl,
      'billerAll_ITCare': new FormControl,
      'billerAll_Seatech': new FormControl,
      'billerAll_Cal4CareJP': new FormControl,
      'billerAll_CCLOUD': new FormControl,
      'billerAll_HelpDeskGuru': new FormControl,
      'billerAll_Cal4careTH': new FormControl,
      'billerAll_1MSBMY': new FormControl,
      'billerAll_MRVOIP': new FormControl,
      'billerAll_Mconnects': new FormControl,
      'billerAll_CloudNippon': new FormControl,
      'billerAll_CCLEAR': new FormControl,
      'billerAll_C4TEL': new FormControl,
      'billerAll_Cal4careUSA': new FormControl,
      'billerAll_Virditech': new FormControl,
      'billerAll_Cloudbharat': new FormControl,
      'billerAll_connectviet': new FormControl,

    });
    this.addressControls.controls.forEach((elt, index) => {
      this.test[index] = true;
    });


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
  handleCheckboxChange(event: any) {
    this.checkboxStatus = event.target.checked;
    console.log("this.checkboxStatus", this.checkboxStatus)
  }
  checkboxCB_InProbation: any;
  CB_InProbation(event: any) {
    this.checkboxCB_InProbation = event.target.checked;
    console.log(" this.checkboxCB_InProbation", this.checkboxCB_InProbation)
  }
  checkboxCB_EPFCPFStatus: any;
  CB_EPFCPFStatus(event: any) {
    this.checkboxCB_EPFCPFStatus = event.target.checked;
    console.log("this.checkboxCB_EPFCPFStatus", this.checkboxCB_EPFCPFStatus)
  }
  checkboxCB_Sinda: any;
  CB_Sinda(event: any) {
    this.checkboxCB_Sinda = event.target.checked;
    console.log("this.checkboxCB_Sinda", this.checkboxCB_Sinda)
  }
  checkboxCB_Socso: any;
  CB_Socso(event: any) {
    this.checkboxCB_Socso = event.target.checked;
    console.log("this.checkboxCB_Socso", this.checkboxCB_Socso)
  }
  checkboxCB_SMSNotifications: any;
  CB_SMSNotification(event: any) {
    this.checkboxCB_SMSNotifications = event.target.checked;
    console.log("this.checkboxCB_SMSNotifications", this.checkboxCB_SMSNotifications)
  }
  checkboxCB_EmailNotifications: any;
  CB_EmailNotification(event: any) {
    this.checkboxCB_EmailNotifications = event.target.checked;
    console.log("this.checkboxCB_EmailNotifications", this.checkboxCB_EmailNotifications)
  }
  checkboxCB_Staff: any;
  CB_Staff(event: any) {
    this.checkboxCB_Staff = event.target.checked;
    console.log("this.checkboxCB_Staff ", this.checkboxCB_Staff)
  }
  checkboxCB_TransDepositApproval: any;
  CB_TransDepositApproval(event: any) {
    this.checkboxCB_TransDepositApproval = event.target.checked;
    console.log("this.checkboxCB_TransDepositApproval", this.checkboxCB_TransDepositApproval)
  }
  checkboxCB_TransCommissionApproval: any;
  CB_TransCommissionApproval(event: any) {
    this.checkboxCB_TransCommissionApproval = event.target.checked;
    console.log("this.checkboxCB_TransCommissionApproval", this.checkboxCB_TransCommissionApproval)
  }
  checkboxCB_TransWithdrawalApproval: any;
  CB_TransWithdrawalApproval(event: any) {
    this.checkboxCB_TransWithdrawalApproval = event.target.checked;
    console.log("this.checkboxCB_TransWithdrawalApproval", this.checkboxCB_TransWithdrawalApproval)
  }
  checkboxCB_TransPurchaseApproval: any;
  CB_TransPurchaseApproval(event: any) {
    this.checkboxCB_TransPurchaseApproval = event.target.checked;
    console.log(" this.checkboxCB_TransPurchaseApproval ", this.checkboxCB_TransPurchaseApproval)
  }
  checkboxCB_TransPettyCashApproval: any;
  CB_TransPettyCashApproval(event: any) {
    this.checkboxCB_TransPettyCashApproval = event.target.checked;
    console.log("this.checkboxCB_TransPettyCashApproval", this.checkboxCB_TransPettyCashApproval)
  }
  checkboxCB_TransVendorApproval: any;
  CB_TransVendorApproval(event: any) {
    this.checkboxCB_TransVendorApproval = event.target.checked;
    console.log("this.checkboxCB_TransVendorApproval", this.checkboxCB_TransVendorApproval)
  }
  checkboxCB_TransInvoiceApproval: any;
  CB_TransInvoiceApproval(event: any) {
    this.checkboxCB_TransInvoiceApproval = event.target.checked;
    console.log("this.checkboxCB_TransInvoiceApproval", this.checkboxCB_TransInvoiceApproval)
  }
  checkboxCB_TransQuotationFilterApproval: any;
  CB_TransQuotationFilterApproval(event: any) {
    this.checkboxCB_TransQuotationFilterApproval = event.target.checked;
    console.log("this.checkboxCB_TransQuotationFilterApproval", this.checkboxCB_TransQuotationFilterApproval)
  }
  checkboxCB_ApprovalFilter: any;
  CB_ApprovalFilter(event: any) {
    this.checkboxCB_ApprovalFilter = event.target.checked;
    console.log(" this.checkboxCB_ApprovalFilter", this.checkboxCB_ApprovalFilter)
  }
  checkboxCB_InvoiceIndividualFilter: any;
  CB_InvoiceIndividualFilter(event: any) {
    this.checkboxCB_InvoiceIndividualFilter = event.target.checked;
    console.log("this.checkboxCB_InvoiceIndividualFilter ", this.checkboxCB_InvoiceIndividualFilter)
  }
  checkboxCB_TransApprovalTab: any;
  CB_TransApprovalTab(event: any) {
    this.checkboxCB_TransApprovalTab = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalTab", this.checkboxCB_TransApprovalTab)
  }
  checkboxCB_TransApprovalMain: any;
  CB_TransApprovalMain(event: any) {
    this.checkboxCB_TransApprovalMain = event.target.checked;
    console.log("this.checkboxCB_TransApprovalMain", this.checkboxCB_TransApprovalMain)
  }
  checkboxCB_TransApprovalProduct: any;
  CB_TransApprovalProduct(event: any) {
    this.checkboxCB_TransApprovalProduct = event.target.checked;
    console.log("this.checkboxCB_TransApprovalProduct", this.checkboxCB_TransApprovalProduct)
  }
  checkboxCB_TransApprovalDIDNumber: any;
  CB_TransApprovalDIDNumber(event: any) {
    this.checkboxCB_TransApprovalDIDNumber = event.target.checked;
    console.log("this.checkboxCB_TransApprovalDIDNumber", this.checkboxCB_TransApprovalDIDNumber)
  }
  checkboxCB_TransApprovalSmallTask: any;
  CB_TransApprovalSmallTask(event: any) {
    this.checkboxCB_TransApprovalSmallTask = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalSmallTask", this.checkboxCB_TransApprovalSmallTask)
  }
  checkboxCB_TransApprovalInvPayment: any;
  CB_TransApprovalInvPayment(event: any) {
    this.checkboxCB_TransApprovalInvPayment = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalInvPayment", this.checkboxCB_TransApprovalInvPayment)
  }
  checkboxCB_TransApprovalOnlineShop: any;
  CB_TransApprovalOnlineShop(event: any) {
    this.checkboxCB_TransApprovalOnlineShop = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalOnlineShop", this.checkboxCB_TransApprovalOnlineShop)
  }
  checkboxCB_TransApprovalDIDDemo: any;
  CB_TransApprovalDIDDemo(event: any) {
    this.checkboxCB_TransApprovalDIDDemo = event.target.checked;
    console.log("this.checkboxCB_TransApprovalDIDDemo", this.checkboxCB_TransApprovalDIDDemo)
  }
  checkboxCB_TransApprovalRMAIssues: any;
  CB_TransApprovalRMAIssues(event: any) {
    this.checkboxCB_TransApprovalRMAIssues = event.target.checked;
    console.log("this.checkboxCB_TransApprovalRMAIssues", this.checkboxCB_TransApprovalRMAIssues)
  }
  checkboxCB_TransApprovalOther: any;
  CB_TransApprovalOther(event: any) {
    this.checkboxCB_TransApprovalOther = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalOther", this.checkboxCB_TransApprovalOther)
  }
  checkboxCB_TransApprovalHRA: any;
  CB_TransApprovalHRA(event: any) {
    this.checkboxCB_TransApprovalHRA = event.target.checked;
    console.log("this.checkboxCB_TransApprovalHRA", this.checkboxCB_TransApprovalHRA)
  }
  checkboxCB_TransApprovalDataCenter: any;
  CB_TransApprovalDataCenter(event: any) {
    this.checkboxCB_TransApprovalDataCenter = event.target.checked;
    console.log(" this.checkboxCB_TransApprovalDataCenter ", this.checkboxCB_TransApprovalDataCenter)
  }
  checkboxCB_QuotationSentAppName: any;
  CB_QuotationSentAppName(event: any) {
    this.checkboxCB_QuotationSentAppName = event.target.checked;
    console.log(" this.checkboxCB_QuotationSentAppNam", this.checkboxCB_QuotationSentAppName)
  }
  checkboxCB_TransactionApprovalShare: any;
  CB_TransactionApprovalShare(event: any) {
    this.checkboxCB_TransactionApprovalShare = event.target.checked;
    console.log("  this.checkboxCB_TransactionApprovalShare", this.checkboxCB_TransactionApprovalShare)
  }
  checkboxCB_TransactionApprovalIndividualFilter: any;
  CB_TransactionApprovalIndividualFilter(event: any) {
    this.checkboxCB_TransactionApprovalIndividualFilter = event.target.checked;
    console.log("this.checkboxCB_TransactionApprovalIndividualFilter", this.checkboxCB_TransactionApprovalIndividualFilter)
  }
  checkboxCB_CustomerMasterApptoval: any;
  CB_CustomerMasterApptoval(event: any) {
    this.checkboxCB_CustomerMasterApptoval = event.target.checked;
    console.log(" this.checkboxCB_CustomerMasterApptoval", this.checkboxCB_CustomerMasterApptoval)
  }
  checkboxCB_DIDInvoice: any;
  CB_DIDInvoice(event: any) {
    this.checkboxCB_DIDInvoice = event.target.checked;
    console.log("this.checkboxCB_DIDInvoice", this.checkboxCB_DIDInvoice)
  }
  checkboxCB_WriteOffInvoice: any;
  CB_WriteOffInvoice(event: any) {
    this.checkboxCB_WriteOffInvoice = event.target.checked;
    console.log("this.checkboxCB_WriteOffInvoice ", this.checkboxCB_WriteOffInvoice)
  }
  checkboxCB_CMSLogin: any;
  CB_CMSLogin(event: any) {
    this.checkboxCB_CMSLogin = event.target.checked;
    console.log(" this.checkboxCB_CMSLogin", this.checkboxCB_CMSLogin)
  }
  checkboxCB_QuotationTemplate: any;
  CB_QuotationTemplate(event: any) {
    this.checkboxCB_QuotationTemplate = event.target.checked;
    console.log("this.checkboxCB_QuotationTemplate", this.checkboxCB_QuotationTemplate)
  }
  checkboxCB_ResellerManagement: any;

  CB_ResellerManagement(event: any) {
    this.checkboxCB_ResellerManagement = event.target.checked;
    console.log("this.checkboxCB_ResellerManagement", this.checkboxCB_ResellerManagement)
  }
  checkboxCB_CallLogs: any;
  CB_CallLogs(event: any) {
    this.checkboxCB_CallLogs = event.target.checked;
    console.log("this.checkboxCB_CallLogs", this.checkboxCB_CallLogs)
  }
  checkboxCB_PictureGallery: any;
  CB_PictureGallery(event: any) {
    this.checkboxCB_PictureGallery = event.target.checked;
    console.log(" this.checkboxCB_PictureGallery", this.checkboxCB_PictureGallery)
  }
  checkboxCB_InternalTickets: any;
  CB_InternalTickets(event: any) {
    this.checkboxCB_InternalTickets = event.target.checked;
    console.log("this.checkboxCB_InternalTickets", this.checkboxCB_InternalTickets)
  }
  checkboxCB_PettyCashReport: any;
  CB_PettyCashReport(event: any) {
    this.checkboxCB_PettyCashReport = event.target.checked;
    console.log("this.checkboxCB_PettyCashReport", this.checkboxCB_PettyCashReport)
  }
  checkboxCB_WidthdrawlReport: any;
  CB_WidthdrawlReport(event: any) {
    this.checkboxCB_WidthdrawlReport = event.target.checked;
    console.log("this.checkboxCB_WidthdrawlReport ", this.checkboxCB_WidthdrawlReport)
  }
  checkboxCB_PriceCategory: any;

  CB_PriceCategory(event: any) {
    this.checkboxCB_PriceCategory = event.target.checked;
    console.log("this.checkboxCB_PriceCategory", this.checkboxCB_PriceCategory)
  }
  checkboxCB_EnquiryForm: any;
  CB_EnquiryForm(event: any) {
    this.checkboxCB_EnquiryForm = event.target.checked;
    console.log(" this.checkboxCB_EnquiryForm", this.checkboxCB_EnquiryForm)
  }
  checkboxCB_CMSCountry: any;
  CB_CMSCountry(event: any) {
    this.checkboxCB_CMSCountry = event.target.checked;
    console.log("this.checkboxCB_CMSCountry", this.checkboxCB_CMSCountry)
  }
  checkboxCB_DIDNumberCatalog: any;
  CB_DIDNumberCatalog(event: any) {
    this.checkboxCB_DIDNumberCatalog = event.target.checked;
    console.log(" this.checkboxCB_DIDNumberCatalog", this.checkboxCB_DIDNumberCatalog)
  }
  checkboxCB_DIDProvider: any;
  CB_DIDProvider(event: any) {
    this.checkboxCB_DIDProvider = event.target.checked;
    console.log("this.checkboxCB_DIDProvider", this.checkboxCB_DIDProvider)
  }
  checkboxCB_DIDTrunkName: any;
  CB_DIDTrunkName(event: any) {
    this.checkboxCB_DIDTrunkName = event.target.checked;
    console.log("this.checkboxCB_DIDTrunkName", this.checkboxCB_DIDTrunkName)
  }
  checkboxCB_DepositMgt: any;
  CB_DepositMgt(event: any) {
    this.checkboxCB_DepositMgt = event.target.checked;
    console.log(" this.checkboxCB_DepositMgt", this.checkboxCB_DepositMgt)
  }
  checkboxCB_SmallTask: any;
  CB_SmallTask(event: any) {
    this.checkboxCB_SmallTask = event.target.checked;
    console.log("this.checkboxCB_SmallTask ", this.checkboxCB_SmallTask)
  }
  checkboxCB_ProductCategory: any;
  CB_ProductCategory(event: any) {
    this.checkboxCB_ProductCategory = event.target.checked;
    console.log("this.checkboxCB_ProductCategory", this.checkboxCB_ProductCategory)
  }
  checkboxCB_ProductQuotation: any;
  CB_ProductQuotation(event: any) {
    this.checkboxCB_ProductQuotation = event.target.checked;
    console.log("this.checkboxCB_ProductQuotation", this.checkboxCB_ProductQuotation)
  }
  checkboxCB_StockInventoryReport: any;
  CB_StockInventoryReport(event: any) {
    this.checkboxCB_StockInventoryReport = event.target.checked;
    console.log("this.checkboxCB_StockInventoryReport", this.checkboxCB_StockInventoryReport)
  }
  checkboxCB_RateCatelog: any;
  CB_RateCatelog(event: any) {
    this.checkboxCB_RateCatelog = event.target.checked;
    console.log("this.checkboxCB_RateCatelog", this.checkboxCB_RateCatelog)
  }
  checkboxCB_StockinventoryEntry: any;
  CB_StockinventoryEntry(event: any) {
    this.checkboxCB_StockinventoryEntry = event.target.checked;
    console.log("this.checkboxCB_StockinventoryEntry", this.checkboxCB_StockinventoryEntry)
  }
  checkboxCB_DIDInventoryEntry: any;
  CB_DIDInventoryEntry(event: any) {
    this.checkboxCB_DIDInventoryEntry = event.target.checked;
    console.log(" this.checkboxCB_DIDInventoryEntry", this.checkboxCB_DIDInventoryEntry)
  }
  checkboxCB_SucuriipAccess: any;
  CB_SucuriipAccess(event: any) {
    this.checkboxCB_SucuriipAccess = event.target.checked;
    console.log("this.checkboxCB_SucuriipAccess", this.checkboxCB_SucuriipAccess)
  }
  checkboxCB_MrvoipLicenseKey: any;
  CB_MrvoipLicenseKey(event: any) {
    this.checkboxCB_MrvoipLicenseKey = event.target.checked;
    console.log("  this.checkboxCB_MrvoipLicenseKey", this.checkboxCB_MrvoipLicenseKey)
  }
  checkboxCB_SoftPhoneLicense: any;
  CB_SoftPhoneLicense(event: any) {
    this.checkboxCB_SoftPhoneLicense = event.target.checked;
    console.log("this.checkboxCB_SoftPhoneLicense", this.checkboxCB_SoftPhoneLicense)
  }
  checkboxCB_APIToken: any;
  CB_APIToken(event: any) {
    this.checkboxCB_APIToken = event.target.checked;
    console.log("this.checkboxCB_APIToken", this.checkboxCB_APIToken)
  }
  checkboxCB_PurchaseEntry: any;
  CB_PurchaseEntry(event: any) {
    this.checkboxCB_PurchaseEntry = event.target.checked;
    console.log("this.checkboxCB_PurchaseEntry", this.checkboxCB_PurchaseEntry)
  }
  checkboxCB_PurchaseEntryYearly: any;
  CB_PurchaseEntryYearly(event: any) {
    this.checkboxCB_PurchaseEntryYearly = event.target.checked;
    console.log(" this.checkboxCB_PurchaseEntryYearly", this.checkboxCB_PurchaseEntryYearly)
  }
  checkboxCB_PurchaseEntryyearlyEdit: any;
  CB_PurchaseEntryyearlyEdit(event: any) {
    this.checkboxCB_PurchaseEntryyearlyEdit = event.target.checked;
    console.log("this.checkboxCB_PurchaseEntryyearlyEdit", this.checkboxCB_PurchaseEntryyearlyEdit)
  }
  checkboxCB_PurchaseEntryVoipTrendChart: any;
  CB_PurchaseEntryVoipTrendChart(event: any) {
    this.checkboxCB_PurchaseEntryVoipTrendChart = event.target.checked;
    console.log("this.checkboxCB_PurchaseEntryVoipTrendChar", this.checkboxCB_PurchaseEntryVoipTrendChart)
  }
  checkboxCB_PurchaseentryMrvoipTrendEntry: any;
  CB_PurchaseentryMrvoipTrendEntry(event: any) {
    this.checkboxCB_PurchaseentryMrvoipTrendEntry = event.target.checked;
    console.log(" this.checkboxCB_PurchaseentryMrvoipTrendEntry", this.checkboxCB_PurchaseentryMrvoipTrendEntry)
  }
  checkboxCB_PurchaseentryMrvoipTrendChart: any;
  CB_PurchaseentryMrvoipTrendChart(event: any) {
    this.checkboxCB_PurchaseentryMrvoipTrendChart = event.target.checked;
    console.log(" this.checkboxCB_PurchaseentryMrvoipTrendChart", this.checkboxCB_PurchaseentryMrvoipTrendChart)
  }
  checkboxCB_PurchaseentryCall4telTrendEntry: any;
  CB_PurchaseentryCall4telTrendEntry(event: any) {
    this.checkboxCB_PurchaseentryCall4telTrendEntry = event.target.checked;
    console.log("this.checkboxCB_PurchaseentryCall4telTrendEntry", this.checkboxCB_PurchaseentryCall4telTrendEntry)
  }
  checkboxCB_PurchaseentryCall4telTrendChart: any;
  CB_PurchaseentryCall4telTrendChart(event: any) {
    this.checkboxCB_PurchaseentryCall4telTrendChart = event.target.checked;
    console.log("this.checkboxCB_PurchaseentryCall4telTrendChart", this.checkboxCB_PurchaseentryCall4telTrendChart)
  }
  checkboxCB_PurchaseEntryWaiting: any;
  CB_PurchaseEntryWaiting(event: any) {
    this.checkboxCB_PurchaseEntryWaiting = event.target.checked;
    console.log("this.checkboxCB_PurchaseEntryWaiting", this.checkboxCB_PurchaseEntryWaiting)
  }
  checkboxCB_NonTradePurchaseEntry: any;
  CB_NonTradePurchaseEntry(event: any) {
    this.checkboxCB_NonTradePurchaseEntry = event.target.checked;
    console.log("this.checkboxCB_NonTradePurchaseEntry", this.checkboxCB_NonTradePurchaseEntry)
  }
  checkboxCB_NewCustomerApproval: any;
  CB_NewCustomerApproval(event: any) {
    this.checkboxCB_NewCustomerApproval = event.target.checked;
    console.log("this.checkboxCB_NewCustomerApproval", this.checkboxCB_NewCustomerApproval)
  }
  checkboxCB_ResellerPaymentMenu: any;
  CB_ResellerPaymentMenu(event: any) {
    this.checkboxCB_ResellerPaymentMenu = event.target.checked;
    console.log("this.checkboxCB_ResellerPaymentMenu", this.checkboxCB_ResellerPaymentMenu)
  }
  checkboxCB_ResellerPaymentAll: any;
  CB_ResellerPaymentAll(event: any) {
    this.checkboxCB_ResellerPaymentAll = event.target.checked;
    console.log(" this.checkboxCB_ResellerPaymentAll", this.checkboxCB_ResellerPaymentAll)
  }
  checkboxCB_MrvoipCalncall_callacloudMenu: any;
  CB_MrvoipCalncall_callacloudMenu(event: any) {
    this.checkboxCB_MrvoipCalncall_callacloudMenu = event.target.checked;
    console.log("this.checkboxCB_MrvoipCalncall_callacloudMenu ", this.checkboxCB_MrvoipCalncall_callacloudMenu)
  }
  checkboxCB_MrvoipPackagePrice: any;
  CB_MrvoipPackagePrice(event: any) {
    this.checkboxCB_MrvoipPackagePrice = event.target.checked;
    console.log(" this.checkboxCB_MrvoipPackagePrice", this.checkboxCB_MrvoipPackagePrice)
  }
  checkboxCB_MrvoipLeftProductMenu: any;
  CB_MrvoipLeftProductMenu(event: any) {
    this.checkboxCB_MrvoipLeftProductMenu = event.target.checked;
    console.log("this.checkboxCB_MrvoipLeftProductMenu", this.checkboxCB_MrvoipLeftProductMenu)
  }
  checkboxCB_MrvoipIndustries: any;
  CB_MrvoipIndustries(event: any) {
    this.checkboxCB_MrvoipIndustries = event.target.checked;
    console.log(" this.checkboxCB_MrvoipIndustries", this.checkboxCB_MrvoipIndustries)
  }
  checkboxCB_MrvoipCaseStudies: any;
  CB_MrvoipCaseStudies(event: any) {
    this.checkboxCB_MrvoipCaseStudies = event.target.checked;
    console.log(" this.checkboxCB_MrvoipCaseStudies", this.checkboxCB_MrvoipCaseStudies)
  }
  checkboxCB_MrvoipContactDetails: any;
  CB_MrvoipContactDetails(event: any) {
    this.checkboxCB_MrvoipContactDetails = event.target.checked;
    console.log("this.checkboxCB_MrvoipContactDetails ", this.checkboxCB_MrvoipContactDetails)
  }
  checkboxCB_ERPUserMgt: any;
  CB_ERPUserMgt(event: any) {
    this.checkboxCB_ERPUserMgt = event.target.checked;
    console.log("this.checkboxCB_ERPUserMgt ", this.checkboxCB_ERPUserMgt)
  }
  checkboxCB_ExternalBlog: any;
  CB_ExternalBlog(event: any) {
    this.checkboxCB_ExternalBlog = event.target.checked;
    console.log("this.checkboxCB_ExternalBlog", this.checkboxCB_ExternalBlog)
  }
  checkboxCB_InternalBlog: any;
  CB_InternalBlog(event: any) {
    this.checkboxCB_InternalBlog = event.target.checked;
    console.log(" this.checkboxCB_InternalBlog ", this.checkboxCB_InternalBlog)
  }
  checkboxCB_NX32SerialNumber: any;
  CB_NX32SerialNumber(event: any) {
    this.checkboxCB_NX32SerialNumber = event.target.checked;
    console.log("this.checkboxCB_NX32SerialNumber", this.checkboxCB_NX32SerialNumber)
  }
  checkboxCB_NX32DocumentUpload: any;
  CB_NX32DocumentUpload(event: any) {
    this.checkboxCB_NX32DocumentUpload = event.target.checked;
    console.log("this.checkboxCB_NX32DocumentUpload", this.checkboxCB_NX32DocumentUpload)
  }
  checkboxCB_DynamicExcel: any;
  CB_DynamicExcel(event: any) {
    this.checkboxCB_DynamicExcel = event.target.checked;
    console.log(" this.checkboxCB_DynamicExcel ", this.checkboxCB_DynamicExcel)
  }
  checkboxCB_RevenueReport: any;
  CB_RevenueReport(event: any) {
    this.checkboxCB_RevenueReport = event.target.checked;
    console.log("this.checkboxCB_RevenueReport ", this.checkboxCB_RevenueReport)
  }
  checkboxCB_MGOrderList: any;
  CB_MGOrderList(event: any) {
    this.checkboxCB_MGOrderList = event.target.checked;
    console.log("this.checkboxCB_MGOrderList", this.checkboxCB_MGOrderList)
  }
  checkboxCB_YGOrderList: any;
  CB_YGOrderList(event: any) {
    this.checkboxCB_YGOrderList = event.target.checked;
    console.log(" this.checkboxCB_YGOrderList", this.checkboxCB_YGOrderList)
  }
  checkboxCB_CustomerInvoiceShare: any;
  CB_CustomerInvoiceShare(event: any) {
    this.checkboxCB_CustomerInvoiceShare = event.target.checked;
    console.log("this.checkboxCB_CustomerInvoiceShare", this.checkboxCB_CustomerInvoiceShare)
  }
  checkboxCB_IPAllowedRule: any;
  CB_IPAllowedRule(event: any) {
    this.checkboxCB_IPAllowedRule = event.target.checked;
    console.log("this.checkboxCB_IPAllowedRule", this.checkboxCB_IPAllowedRule)
  }
  checkboxCB_RenewalReminder: any;
  CB_RenewalReminder(event: any) {
    this.checkboxCB_RenewalReminder = event.target.checked;
    console.log("this.checkboxCB_RenewalReminder", this.checkboxCB_RenewalReminder)
  }
  checkboxCB_WebrtcIP: any;
  CB_WebrtcIP(event: any) {
    this.checkboxCB_WebrtcIP = event.target.checked;
    console.log("this.checkboxCB_WebrtcIP ", this.checkboxCB_WebrtcIP)
  }
  checkboxCB_AttendanceReports: any;
  CB_AttendanceReports(event: any) {
    this.checkboxCB_AttendanceReports = event.target.checked;
    console.log("this.checkboxCB_AttendanceReports", this.checkboxCB_AttendanceReports)
  }
  checkboxCB_CPFContribution: any;
  CB_CPFContribution(event: any) {
    this.checkboxCB_CPFContribution = event.target.checked;
    console.log("this.checkboxCB_CPFContribution", this.checkboxCB_CPFContribution)
  }
  checkboxCB_WebsiteSubscribeEmail: any;
  CB_WebsiteSubscribeEmail(event: any) {
    this.checkboxCB_WebsiteSubscribeEmail = event.target.checked;
    console.log("this.checkboxCB_WebsiteSubscribeEmail", this.checkboxCB_WebsiteSubscribeEmail)
  }
  checkboxCB_Buy3cxLicensePage: any;
  CB_Buy3cxLicensePage(event: any) {
    this.checkboxCB_Buy3cxLicensePage = event.target.checked;
    console.log("this.checkboxCB_Buy3cxLicensePage", this.checkboxCB_Buy3cxLicensePage)
  }
  checkboxCB_Buy3cxpermisUser: any;
  CB_Buy3cxpermisUser(event: any) {
    this.checkboxCB_Buy3cxpermisUser = event.target.checked;
    console.log("this.checkboxCB_Buy3cxpermisUser", this.checkboxCB_Buy3cxpermisUser)
  }
  checkboxCB_Call4telAddressLogoshowPartner: any;
  CB_Call4telAddressLogoshowPartner(event: any) {
    this.checkboxCB_Call4telAddressLogoshowPartner = event.target.checked;
    console.log(" this.checkboxCB_Call4telAddressLogoshowPartner", this.checkboxCB_Call4telAddressLogoshowPartner)
  }
  checkboxCB_MrvoipAddressLogoshowPartner: any;
  CB_MrvoipAddressLogoshowPartner(event: any) {
    this.checkboxCB_MrvoipAddressLogoshowPartner = event.target.checked;
    console.log(" this.checkboxCB_MrvoipAddressLogoshowPartner", this.checkboxCB_MrvoipAddressLogoshowPartner)
  }
  checkboxCB_MconnectAddressLogoshowPartner: any;
  CB_MconnectAddressLogoshowPartner(event: any) {
    this.checkboxCB_MconnectAddressLogoshowPartner = event.target.checked;
    console.log("this.checkboxCB_MconnectAddressLogoshowPartner", this.checkboxCB_MconnectAddressLogoshowPartner)
  }
  checkboxCB_RecurringCheckerList: any;

  CB_RecurringCheckerList(event: any) {
    this.checkboxCB_RecurringCheckerList = event.target.checked;
    console.log("this.checkboxCB_RecurringCheckerList", this.checkboxCB_RecurringCheckerList)
  }
  checkboxCB_EnquiryDetails: any;
  CB_EnquiryDetails(event: any) {
    this.checkboxCB_EnquiryDetails = event.target.checked;
    console.log("this.checkboxCB_EnquiryDetails", this.checkboxCB_EnquiryDetails)
  }
  checkboxCB_OverduePaymentsNotification: any;
  CB_OverduePaymentsNotification(event: any) {
    this.checkboxCB_OverduePaymentsNotification = event.target.checked;
    console.log("this.checkboxCB_OverduePaymentsNotification", this.checkboxCB_OverduePaymentsNotification)
  }
  checkboxCB_Cal4CarePteLtdOverdue: any;
  CB_Cal4CarePteLtdOverdue(event: any) {
    this.checkboxCB_Cal4CarePteLtdOverdue = event.target.checked;
    console.log(" this.checkboxCB_Cal4CarePteLtdOverdue", this.checkboxCB_Cal4CarePteLtdOverdue)
  }
  checkboxCB_DCARETechnologiesIndiaPvtLtdOverdue: any;
  CB_DCARETechnologiesIndiaPvtLtdOverdue(event: any) {
    this.checkboxCB_DCARETechnologiesIndiaPvtLtdOverdue = event.target.checked;
    console.log("this.checkboxCB_DCARETechnologiesIndiaPvtLtdOverdue", this.checkboxCB_DCARETechnologiesIndiaPvtLtdOverdue)
  }
  checkboxCB_RecurringDateUpdate: any;
  CB_RecurringDateUpdate(event: any) {
    this.checkboxCB_RecurringDateUpdate = event.target.checked;
    console.log("this.checkboxCB_RecurringDateUpdate", this.checkboxCB_RecurringDateUpdate)
  }
  checkboxCB_StockPreApproval: any;
  CB_StockPreApproval(event: any) {
    this.checkboxCB_StockPreApproval = event.target.checked;
    console.log("this.checkboxCB_StockPreApproval", this.checkboxCB_StockPreApproval)
  }
  checkboxCB_WebSiteEnquiry: any;
  CB_WebSiteEnquiry(event: any) {
    this.checkboxCB_WebSiteEnquiry = event.target.checked;
    console.log("this.checkboxCB_WebSiteEnquiry ", this.checkboxCB_WebSiteEnquiry)
  }
  checkboxCB_ConsolidatedOverdue: any;
  CB_ConsolidatedOverdue(event: any) {
    this.checkboxCB_ConsolidatedOverdue = event.target.checked;
    console.log("this.checkboxCB_ConsolidatedOverdue", this.checkboxCB_ConsolidatedOverdue)
  }
  checkboxCB_PaymentFollowInvoice: any;

  CB_PaymentFollowInvoice(event: any) {
    this.checkboxCB_PaymentFollowInvoice = event.target.checked;
    console.log(" this.checkboxCB_PaymentFollowInvoice", this.checkboxCB_PaymentFollowInvoice)
  }
  checkboxCB_TransactionApproval: any;
  CB_TransactionApproval(event: any) {
    this.checkboxCB_TransactionApproval = event.target.checked;
    console.log("this.checkboxCB_TransactionApproval", this.checkboxCB_TransactionApproval)
  }
  checkboxCB_InCompletesTaskList: any;
  CB_InCompletesTaskList(event: any) {
    this.checkboxCB_InCompletesTaskList = event.target.checked;
    console.log("this.checkboxCB_InCompletesTaskList", this.checkboxCB_InCompletesTaskList)
  }
  checkboxCB_Cal4careSdnBhdOverdue: any;
  CB_Cal4careSdnBhdOverdue(event: any) {
    this.checkboxCB_Cal4careSdnBhdOverdue = event.target.checked;
    console.log("this.checkboxCB_Cal4careSdnBhdOverdue", this.checkboxCB_Cal4careSdnBhdOverdue)
  }
  checkboxCB_MarshalSystemConsultancyOverdue: any;
  CB_MarshalSystemConsultancyOverdue(event: any) {
    this.checkboxCB_MarshalSystemConsultancyOverdue = event.target.checked;
    console.log("this.checkboxCB_MarshalSystemConsultancyOverdue", this.checkboxCB_MarshalSystemConsultancyOverdue)
  }
  checkboxCB_PurchaseEntryTrend: any;
  CB_PurchaseEntryTrend(event: any) {
    this.checkboxCB_PurchaseEntryTrend = event.target.checked;
    console.log("this.checkboxCB_PurchaseEntryTrend", this.checkboxCB_PurchaseEntryTrend)
  }
  checkboxCB_Verfication2ds: any;
  CB_Verfication2ds(event: any) {
    this.checkboxCB_Verfication2ds = event.target.checked;
    console.log("this.checkboxCB_Verfication2ds", this.checkboxCB_Verfication2ds)
  }
  checkboxcheckboxStatus: any;

  CB_Enquiry3cx(event: any) {
    this.checkboxcheckboxStatus = event.target.checked;
    console.log("this.checkboxcheckboxStatus", this.checkboxcheckboxStatus)
  }
  checkboxCB_Cal4careSdnBhdGSTRpt: any;
  CB_Cal4careSdnBhdGSTRpt(event: any) {
    this.checkboxCB_Cal4careSdnBhdGSTRpt = event.target.checked;
    console.log("this.checkboxCB_Cal4careSdnBhdGSTRpt", this.checkboxCB_Cal4careSdnBhdGSTRpt)
  }
  checkboxCB_AllPaymentFollowInvoice: any;
  CB_AllPaymentFollowInvoice(event: any) {
    this.checkboxCB_AllPaymentFollowInvoice = event.target.checked;
    console.log("this.checkboxCB_AllPaymentFollowInvoice", this.checkboxCB_AllPaymentFollowInvoice)
  }
  checkboxCB_SendtoPostal: any;
  CB_SendtoPostal(event: any) {
    this.checkboxCB_SendtoPostal = event.target.checked;
    console.log("this.checkboxCB_SendtoPostal", this.checkboxCB_SendtoPostal)
  }
  checkboxCB_DcareTechnologiesPteLtdOverdue: any;
  CB_DcareTechnologiesPteLtdOverdue(event: any) {
    this.checkboxCB_DcareTechnologiesPteLtdOverdue = event.target.checked;
    console.log("this.checkboxCB_DcareTechnologiesPteLtdOverdue", this.checkboxCB_DcareTechnologiesPteLtdOverdue)
  }
  checkboxCB_Cal4CareJapanCoLtdOverdue: any;
  CB_Cal4CareJapanCoLtdOverdue(event: any) {
    this.checkboxCB_Cal4CareJapanCoLtdOverdue = event.target.checked;
    console.log("this.checkboxCB_Cal4CareJapanCoLtdOverdue", this.checkboxCB_Cal4CareJapanCoLtdOverdue)
  }
  checkboxCB_CloudRenewalLicKeyPopup: any;
  CB_CloudRenewalLicKeyPopup(event: any) {
    this.checkboxCB_CloudRenewalLicKeyPopup = event.target.checked;
    console.log("this.checkboxCB_CloudRenewalLicKeyPopup", this.checkboxCB_CloudRenewalLicKeyPopup)
  }
  checkboxCB_AllMEnquiry: any;
  CB_AllMEnquiry(event: any) {
    this.checkboxStatus = event.target.checked;
    console.log("this.checkboxCB_AllMEnquiry", this.checkboxCB_AllMEnquiry)
  }
  checkboxCB_Assigned3cxEnquiry: any;
  CB_Assigned3cxEnquiry(event: any) {
    this.checkboxStatus = event.target.checked;
    console.log("this.checkboxCB_Assigned3cxEnquiry", this.checkboxCB_Assigned3cxEnquiry)
  }
  checkboxCB_Cal4careThailandCoLtdOverdue: any;
  CB_Cal4careThailandCoLtdOverdue(event: any) {
    this.checkboxCB_Cal4careThailandCoLtdOverdue = event.target.checked;
    console.log("this.checkboxCB_Cal4careThailandCoLtdOverdue", this.checkboxCB_Cal4careThailandCoLtdOverdue)
  }
  checkboxCB_CustomSearchIconshow: any;
  CB_CustomSearchIconshow(event: any) {
    this.checkboxCB_CustomSearchIconshow = event.target.checked;
    console.log(" this.checkboxCB_CustomSearchIconshow", this.checkboxCB_CustomSearchIconshow)
  }
  checkboxCB_CustomerSerach: any;
  CB_CustomerSerach(event: any) {
    this.checkboxCB_CustomerSerach = event.target.checked;
    console.log(" this.checkboxCB_CustomerSerach ", this.checkboxCB_CustomerSerach)
  }
  checkboxCB_Invoice: any;
  CB_Invoice(event: any) {
    this.checkboxCB_Invoice = event.target.checked;
    console.log("this.checkboxCB_Invoice ", this.checkboxCB_Invoice)
  }
  checkboxCB_LicenseKey: any;
  CB_LicenseKey(event: any) {
    this.checkboxCB_LicenseKey = event.target.checked;
    console.log("this.checkboxCB_LicenseKey", this.checkboxCB_LicenseKey)
  }
  checkboxCB_VsProvisioning: any;
  CB_VsProvisioning(event: any) {
    this.checkboxCB_VsProvisioning = event.target.checked;
    console.log(" this.checkboxCB_VsProvisioning ", this.checkboxCB_VsProvisioning)
  }
  checkboxCB_QuotationSerach: any;
  CB_QuotationSerach(event: any) {
    this.checkboxCB_QuotationSerach = event.target.checked;
    console.log("this.checkboxCB_QuotationSerach", this.checkboxCB_QuotationSerach)
  }
  checkboxCB_CreditNote: any;
  CB_CreditNote(event: any) {
    this.checkboxCB_CreditNote = event.target.checked;
    console.log("this.checkboxCB_CreditNote", this.checkboxCB_CreditNote)
  }
  checkboxCB_DIDNumber: any;
  CB_DIDNumber(event: any) {
    this.checkboxCB_DIDNumber = event.target.checked;
    console.log("this.checkboxCB_DIDNumber", this.checkboxCB_DIDNumber)
  }
  checkboxCB_AllPage: any;
  CB_AllPage(event: any) {
    this.checkboxCB_AllPage = event.target.checked;
    console.log("this.checkboxCB_AllPage", this.checkboxCB_AllPage)
  }
  checkboxCB_ProformaInvoice: any;
  CB_ProformaInvoice(event: any) {
    this.checkboxCB_ProformaInvoice = event.target.checked;
    console.log("this.checkboxStatus", this.checkboxStatus)
  }
  checkboxCB_PrepaidNote: any;
  CB_PrepaidNote(event: any) {
    this.checkboxCB_PrepaidNote = event.target.checked;
    console.log("this.checkboxCB_PrepaidNote", this.checkboxCB_PrepaidNote)
  }
  checkboxCB_CustomerProjects: any;
  CB_CustomerProjects(event: any) {
    this.checkboxCB_CustomerProjects = event.target.checked;
    console.log("this.checkboxCB_CustomerProjects", this.checkboxCB_CustomerProjects)
  }
  checkboxCB_VOIPCreditManager: any;
  CB_VOIPCreditManager(event: any) {
    this.checkboxCB_VOIPCreditManager = event.target.checked;
    console.log("this.checkboxCB_VOIPCreditManager", this.checkboxCB_VOIPCreditManager)
  }
  checkboxCB_VOIPSuspendAccount: any;
  CB_VOIPSuspendAccount(event: any) {
    this.checkboxCB_VOIPSuspendAccount = event.target.checked;
    console.log("this.checkboxCB_VOIPSuspendAccount", this.checkboxCB_VOIPSuspendAccount)
  }
  checkboxCB_ProductStockReportUpdate: any;
  CB_ProductStockReportUpdate(event: any) {
    this.checkboxCB_ProductStockReportUpdate = event.target.checked;
    console.log("this.checkboxCB_ProductStockReportUpdate", this.checkboxCB_ProductStockReportUpdate)
  }
  checkboxCB_CurrenctStockShow: any;
  CB_CurrenctStockShow(event: any) {
    this.checkboxCB_CurrenctStockShow = event.target.checked;
    console.log("this.checkboxCB_CurrenctStockShow", this.checkboxCB_CurrenctStockShow)
  }
  checkboxCB_RateCatelogShow: any;
  CB_RateCatelogShow(event: any) {
    this.checkboxCB_RateCatelogShow = event.target.checked;
    console.log("this.checkboxCB_RateCatelogShow", this.checkboxCB_RateCatelogShow)
  }
  checkboxCB_ActPurchasePriceShow: any;
  CB_ActPurchasePriceShow(event: any) {
    this.checkboxCB_ActPurchasePriceShow = event.target.checked;
    console.log("this.checkboxCB_ActPurchasePriceShow ", this.checkboxCB_ActPurchasePriceShow)
  }
  checkboxCB_DefaultMenuShow: any;
  CB_DefaultMenuShow(event: any) {
    this.checkboxCB_DefaultMenuShow = event.target.checked;
    console.log("this.checkboxCB_DefaultMenuShow ", this.checkboxCB_DefaultMenuShow)
  }
  checkboxCB_DefaultMenuShowLowLevel: any;
  CB_DefaultMenuShowLowLevel(event: any) {
    this.checkboxCB_DefaultMenuShowLowLevel = event.target.checked;
    console.log("this.checkboxCB_DefaultMenuShowLowLevel", this.checkboxCB_DefaultMenuShowLowLevel)
  }
  checkboxCB_CalncallMenuShow: any;
  CB_CalncallMenuShow(event: any) {
    this.checkboxCB_CalncallMenuShow = event.target.checked;
    console.log("this.checkboxCB_CalncallMenuShow", this.checkboxCB_CalncallMenuShow)
  }
  checkboxCB_ResellerShoppingMenu: any;
  CB_ResellerShoppingMenu(event: any) {
    this.checkboxCB_ResellerShoppingMenu = event.target.checked;
    console.log("this.checkboxCB_ResellerShoppingMenu", this.checkboxCB_ResellerShoppingMenu)
  }
  checkboxCB_PublicTaskManager: any;
  CB_PublicTaskManager(event: any) {
    this.checkboxCB_PublicTaskManager = event.target.checked;
    console.log("this.checkboxCB_PublicTaskManager ", this.checkboxCB_PublicTaskManager)
  }
  checkboxCB_PersonalTaskManager: any;
  CB_PersonalTaskManager(event: any) {
    this.checkboxCB_PersonalTaskManager = event.target.checked;
    console.log(" this.checkboxCB_PersonalTaskManager ", this.checkboxCB_PersonalTaskManager)
  }
  checkboxCB_DailyWorkReport: any;
  CB_DailyWorkReport(event: any) {
    this.checkboxCB_DailyWorkReport = event.target.checked;
    console.log("this.checkboxCB_DailyWorkReport ", this.checkboxCB_DailyWorkReport)
  }
  checkboxCB_Mailer: any;
  CB_Mailer(event: any) {
    this.checkboxCB_Mailer = event.target.checked;
    console.log("this.checkboxCB_Mailer", this.checkboxCB_Mailer)
  }
  checkboxCB_HelpDesk: any;
  CB_HelpDesk(event: any) {
    this.checkboxCB_HelpDesk = event.target.checked;
    console.log("this.checkboxCB_HelpDesk", this.checkboxCB_HelpDesk)
  }
  checkboxCB_C4CTurnOverMap: any;
  CB_C4CTurnOverMap(event: any) {
    this.checkboxCB_C4CTurnOverMap = event.target.checked;
    console.log(" this.checkboxCB_C4CTurnOverMap", this.checkboxCB_C4CTurnOverMap)
  }
  checkboxCB_SpecialLogin: any;
  CB_SpecialLogin(event: any) {
    this.checkboxCB_SpecialLogin = event.target.checked;
    console.log("this.checkboxCB_SpecialLogin", this.checkboxCB_SpecialLogin)
  }
  checkboxCB_LeftSideTurnOverChart: any;
  CB_LeftSideTurnOverChart(event: any) {
    this.checkboxCB_LeftSideTurnOverChart = event.target.checked;
    console.log("this.checkboxCB_LeftSideTurnOverChart", this.checkboxCB_LeftSideTurnOverChart)
  }
  checkboxCB_IndividualPettyCashCreditPersonSelect: any;
  CB_IndividualPettyCashCreditPersonSelect(event: any) {
    this.checkboxCB_IndividualPettyCashCreditPersonSelect = event.target.checked;
    console.log("this.checkboxCB_IndividualPettyCashCreditPersonSelect", this.checkboxCB_IndividualPettyCashCreditPersonSelect)
  }
  checkboxCB_ApprovalDelete: any;
  CB_ApprovalDelete(event: any) {
    this.checkboxCB_ApprovalDelete = event.target.checked;
    console.log("this.checkboxCB_ApprovalDelete", this.checkboxCB_ApprovalDelete)
  }
  checkboxCB_CreditMgtDetails: any;
  CB_CreditMgtDetails(event: any) {
    this.checkboxCB_CreditMgtDetails = event.target.checked;
    console.log("this.checkboxCB_CreditMgtDetails", this.checkboxCB_CreditMgtDetails)
  }
  checkboxCB_BankReports: any;

  CB_BankReports(event: any) {
    this.checkboxCB_BankReports = event.target.checked;
    console.log(" this.checkboxCB_BankReports ", this.checkboxCB_BankReports)
  }
  checkboxCB_LedgerReports: any;
  CB_LedgerReports(event: any) {
    this.checkboxCB_LedgerReports = event.target.checked;
    console.log("this.checkboxCB_LedgerReports ", this.checkboxCB_LedgerReports)
  }
  checkboxCB_DashBoard: any;
  CB_DashBoard(event: any) {
    this.checkboxCB_DashBoard = event.target.checked;
    console.log("this.checkboxCB_DashBoard", this.checkboxCB_DashBoard)
  }
  checkboxCB_InvoiceReports: any;
  CB_InvoiceReports(event: any) {
    this.checkboxCB_InvoiceReports = event.target.checked;
    console.log(" this.checkboxCB_InvoiceReports", this.checkboxCB_InvoiceReports)
  }
  checkboxCB_CallLogReports: any;
  CB_CallLogReports(event: any) {
    this.checkboxCB_CallLogReports = event.target.checked;
    console.log("this.checkboxCB_CallLogReports", this.checkboxCB_CallLogReports)
  }
  checkboxCB_SendMail: any;
  CB_SendMail(event: any) {
    this.checkboxCB_SendMail = event.target.checked;
    console.log("this.checkboxCB_SendMail", this.checkboxCB_SendMail)
  }
  checkboxCB_PettyCash: any;
  CB_PettyCash(event: any) {
    this.checkboxCB_PettyCash = event.target.checked;
    console.log("this.checkboxCB_PettyCash", this.checkboxCB_PettyCash)
  }
  checkboxCB_Logistics: any;

  CB_Logistics(event: any) {
    this.checkboxStatus = event.target.checked;
    console.log("this.checkboxStatus", this.checkboxStatus)
  }
  checkboxCB_test: any;
  getChekboxVal(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_Cal4CareSG(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }
  CB_billerAll_MARSHAL(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }
  CB_billerAll_CC(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_DCSG(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  billerAll_DCCBE(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_Cal4CareJB(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_CALNCALL(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_ITCare(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_Seatech(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }
  CB_billerAll_Cal4CareJP(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_CCLOUD(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_HelpDeskGuru(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }


  CB_billerAll_Cal4careTH(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_1MSBMY(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_MRVOIP(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_Mconnects(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_CloudNippon(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_CCLEAR(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_C4TEL(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }
  
  CB_billerAll_Cal4careUSA(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_Virditech(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }
  CB_billerAll_Cloudbharat(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  CB_billerAll_connectviet(event: any) {
    this.checkboxCB_test = event;
    console.log("checkboxCB_test", this.checkboxCB_test)
  }

  checkboxArray_QuotationNewPermission(event: any){
    this.checkboxCB_test = event.target.checked;
    console.log("checkboxCB_test", this.checkboxCB_test)
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
    this.groupSelectCommonId_BillerAll= data;
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
      console.log("admin/user_add_details", response)

      if (response.status != '') {
        this.designationDetailsList = response.designation_details;
        this.userDetailsList = response.user_det;
        this.billerDetailsList = response.biller_det;
        this.pettyCashColorList = response.petty_cash_color_arr
      }
      else {

      }


    });
  }
  handleChange(data:any,evt: any) {
    var id=data;
    console.log(id, "biller ID");
    var xyz = evt.target.id;
    console.log(xyz, "target");
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


