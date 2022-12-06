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
 data.append('signatureFilename'+bill_value, $("#uploaded-img"+bill_value)[0].files[0]);    
}); 

data.append('staffStatus', this.addUserForm1.value.Staff);
data.append('probation', this.addUserForm1.value.ProbationIn);
data.append('ext_no', this.addUserForm1.value.ExtensionNumber);
data.append('short_name', this.addUserForm1.value.ShortName);
data.append('friendly_name', this.addUserForm1.value.FriendlyName);
data.append('hr_group_id', this.addUserForm1.value.HRGroup);



data.append('from_dt_bill', this.addUserForm7.value.billingFromDt);
data.append('to_dt_bill', this.addUserForm7.value.billingToDt);
data.append('filter_month_val', this.addUserForm7.value.billingFilterMonth);
data.append('ind_petty_cash', this.addUserForm7.value.IndividualPettyCashFromDate_TextBox);
data.append('ind_petty_dt', this.addUserForm7.value.IndividualPettyCashFromDate_Date);






data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);
data.append('', this.addUserForm1.value.);