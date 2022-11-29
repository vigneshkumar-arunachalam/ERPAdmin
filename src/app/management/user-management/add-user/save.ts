save(){
    console.log("this.files_Signature;",this.files_Signature)
    console.log("this.signature_billerid;",this.signature_billerid)
    console.log("this.addUserForm2.value.addresses",this.addUserForm2.value.addresses)
    var data = new FormData();
   

    data.append('userName', this.addUserForm1.value.userName);
    data.append('password', this.addUserForm1.value.password);
    data.append('firstName', this.addUserForm1.value.firstName);
    data.append('lastName', this.addUserForm1.value.lastName);
    data.append('department', this.addUserForm1.value.department);
    data.append('designation', this.addUserForm1.value.designation);
    data.append('fin_number', this.addUserForm1.value.FIN);
    data.append('bank_acc_no', this.addUserForm1.value.bankAccountNO);
    data.append('emp_address', this.addUserForm1.value.address);
    data.append('dob', this.addUserForm1.value.dob);
    data.append('smsNotification', this.addUserForm1.value.smsNotif);
    data.append('phonenumber', this.addUserForm1.value.phoneNumber);
    data.append('emailNotification', this.addUserForm1.value.emailNotif);
    data.append('emailId', this.addUserForm1.value.emailID);
    data.append('hr_group_id', this.addUserForm1.value.HRGroup);
    data.append('signatureFilename', this.addUserForm1.value.Signature);
      // data.append("salaryDetails[]", this.addressControls);
      // console.log("this.addressControls",this.addressControls)
      
      data.append('monthlySalary', JSON.stringify(this.addUserForm2.value.addresses));
    
      let signature_billerid_arr = this.signature_billerid; 

      signature_billerid_arr.forEach(function (bill_value) {
       data.append('signatureFilename'+bill_value, $("#uploaded-img"+bill_value)[0].files[0]);    
      }); 
      
   
    data.append('main_contactus', this.addUserForm1.value.cmsContactPhone);
    data.append('alternate_contactus', this.addUserForm1.value.cmsAlternativeContactPhone);
    data.append('alternate_support_mail', this.addUserForm1.value.cmsAlternativeSupportMail);
    data.append('alternate_website', this.addUserForm1.value.cmsAlternativeSupportWebsite);
    data.append('email_group_id', this.addUserForm1.value.bccEmailID);
    data.append('petty_color_code', this.addUserForm1.value.pettyCashColorCode);
    data.append('billerSignature_billerId', this.signature_billerid);
    data.append('alternate_website', this.addUserForm1.value.cmsAlternativeSupportWebsite);
    data.append('firstName_salary', this.addUserForm1.value.firstName);

    data.append('per_day_salary', this.addUserForm1.value.Fihytdf);
    data.append('pf_status', this.addUserForm1.value.epfcpfStatus);
    data.append('callEmailId', this.addUserForm1.value.bccEmailID);
    data.append('profile_image', this.addUserForm1.value.Fihytdf);
    data.append('billerId', this.BillerID);
    data.append('pwd_username', this.addUserForm1.value.Fihytdf);
    data.append('pwd_password', this.addUserForm1.value.Fihytdf);
    data.append('pwd_logout_time', this.addUserForm1.value.Fihytdf);
    data.append('inv_shared_userid', this.addUserForm1.value.Fihytdf);
    data.append('reseller_shop_id', this.addUserForm1.value.Fihytdf);
    data.append('reseller_pay_id', this.addUserForm1.value.Fihytdf);
   
        data.append('emailNotification_per', this.addUserForm1.value.Fihytdf);
    data.append('pettycash_mail', this.addUserForm1.value.Fihytdf);
    data.append('call_log_per', this.addUserForm1.value.Fihytdf);
    data.append('time_booking_per', this.addUserForm1.value.Fihytdf);
    data.append('helpdesk_per', this.addUserForm1.value.Fihytdf);
    data.append('erp_app_per', this.addUserForm1.value.Fihytdf);
    data.append('checkin_status', this.addUserForm1.value.Fihytdf);
    data.append('present_list_status', this.addUserForm1.value.Fihytdf);
    data.append('notification_status', this.addUserForm1.value.Fihytdf);
    data.append('group_notification', this.addUserForm1.value.Fihytdf);
    data.append('con1', this.addUserForm1.value.sinda);
    data.append('con2', this.addUserForm1.value.socso);
    data.append('temperature', this.addUserForm1.value.Fihytdf);
    data.append('from_dt_bill', this.addUserForm1.value.billingFromDt);
    data.append('to_dt_bill', this.addUserForm1.value.billingToDt);
    data.append('filter_month_val', this.addUserForm1.value.billingFilterMonth);
    data.append('department_type', this.addUserForm1.value.Fihytdf);
    
    //unknown ends
    //single checkbox permission unknown
    data.append('trans_app_other_all', this.addUserForm1.value.Fihytdf);
    data.append('callLogViewState', this.addUserForm1.value.Fihytdf);
    data.append('helpdesk_user', this.addUserForm1.value.Fihytdf);
    data.append('helpdesk_pass', this.addUserForm1.value.Fihytdf);
    data.append('helpdesk_status', this.addUserForm1.value.Fihytdf);
    data.append('infinity_login', this.addUserForm1.value.Fihytdf);
    data.append('google_authenticator', this.addUserForm1.value.Fihytdf);
    data.append('user_personal_leave', this.addUserForm1.value.Fihytdf);
    data.append('user_medical_leave', this.addUserForm1.value.Fihytdf);
    data.append('staffStatus', this.addUserForm1.value.Fihytdf);
    data.append('slack_user_id', this.addUserForm1.value.Fihytdf);
    data.append('slack_user_name', this.addUserForm1.value.Fihytdf);
    data.append('slack_display_name', this.addUserForm1.value.Fihytdf);
    data.append('slack_user_channel', this.addUserForm1.value.Fihytdf);
    data.append('slack_token', this.addUserForm1.value.Fihytdf);
    data.append('slack_update_dt', this.addUserForm1.value.Fihytdf);
    data.append('force_logout_erp', this.addUserForm1.value.Fihytdf);
    data.append('device_token', this.addUserForm1.value.Fihytdf);
    data.append('ext_no', this.addUserForm1.value.Fihytdf);
    data.append('sip_user', this.addUserForm1.value.Fihytdf);
    data.append('sip_pass', this.addUserForm1.value.Fihytdf);
    data.append('short_name', this.addUserForm1.value.Fihytdf);
    data.append('friendly_name', this.addUserForm1.value.Fihytdf);
    data.append('country', this.addUserForm1.value.Fihytdf);
    data.append('timezone_id', this.addUserForm1.value.Fihytdf);
    
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
    
    //single checkbox permission starts
    // data.append('trans_app_dep', this.checkboxCB_TransDepositApproval);
    // data.append('trans_app_comm', this.checkboxCB_TransCommissionApproval);
    // data.append('trans_app_with', this.checkboxCB_TransWithdrawalApproval);
    // data.append('trans_app_pur', this.checkboxCB_TransPurchaseApproval);
    // data.append('trans_app_petty', this.checkboxCB_TransPettyCashApproval);
    // data.append('trans_app_vendor', this.checkboxCB_TransVendorApproval);
    // data.append('trans_app_inv', this.checkboxCB_TransInvoiceApproval);
    // data.append('trans_app_quot', this.checkboxCB_TransQuotationFilterApproval);
    data.append('defaults_biller_id', this.BillerID);
    // data.append('user_auth', this.checkboxCB_Verfication2ds);
    data.append('fin_chk_auth', this.addUserForm1.value.Fihytdf);
    data.append('qr_chk_auth', this.addUserForm1.value.Fihytdf);
    data.append('otp', this.addUserForm1.value.Fihytdf);
    data.append('omni_login_token', this.addUserForm1.value.Fihytdf);
    data.append('carry_forward', this.addUserForm1.value.Fihytdf);
    //data.append('is_staff', this.checkboxCB_Staff);
    data.append('probation', this.addUserForm1.value.ProbationIn);
    
    data.append('role_check', this.edit_array_Check);
    data.append('role_drop', this.role_drop_val);
    // data.append('ind_petty_cash', this.checkboxCB_IndividualPettyCashandFromDate);
    data.append('ind_petty_dt', this.addUserForm7.value.IndividualPettyCashandFromDate_date);
    //url: 'http://127.0.0.1:8000/api/admin/user_details_update',
    $.ajax({
      type: 'POST',
      url: 'https://erp1.cal4care.com/api/admin/user_details_save',
      cache: false,
      contentType: false,
      processData: false,
      data: data,
      success: function (result: any) {
        if (result.status == true) {
         console.log("success")
        }
      },
      error: function (err: any) {
        console.log(err);
      }
    })
    
   
  }