<div class="row no-gutters license-key-list">
    <div class="col-lg-2 license-key " * ngFor="let dd of billerDetailsList;let i=index">
        <span class="btnalter" [ngStyle]="{'background-color': dd.colorCodes}">
            <p class="" title="{{dd.billerCode}}"> {{ dd.billerCode }}</p>
            < input class="switch ml-4" type="checkbox" (change)="EditCHK_TransactionApproval(dd.billerId,$event)"
                id="check_ids{{i}}">
        </span>
    </div>
</div>


[
  "", " 	", "	", "", "	", "	", "	",
      " ", " 	", "", " 	", "", "	", " 	", "	", "	",
      " ", "	", " 	", "",
      "", "",
    ];



this.dynamicRadio = [



  
 
  { name: '', selected: false, id:  },
  { name: '', selected: false, id:  },
  { name: '', selected: false, id:  },
  { name: '', selected: false, id:  },
  { name: '', selected: false, id:  },

  { name: 'Trans Deposit Approval', selected: false, id: 2011 },
  { name: 'Trans Commission Approval', selected: false, id: 2012 },
  { name: 'Trans Withdrawal Approval', selected: false, id: 2013 },
  { name: 'Trans Purchase Approval', selected: false, id: 2014 },
  { name: 'Trans Petty Cash Approval', selected: false, id: 2015 },
  { name: 'Trans Vendor Approval', selected: false, id: 2016 },
  { name: 'Trans Invoice Approval', selected: false, id:  2017},
  { name: 'Trans Quotation Filter Approval', selected: false, id:2018  },
  { name: 'Invoice individual filter', selected: false, id: 2019 },
  { name: 'Approval filter', selected: false, id: 2020 },
  // { name: 'Trans Approval Tab', selected: false, id:  },
  { name: 'Trans Approval Main', selected: false, id: 2021 },
  { name: 'Trans Approval Product', selected: false, id:2022  },
  { name: 'Trans Approval DID Number', selected: false, id: 2023 },
  { name: 'Trans Approval Small Task', selected: false, id:2024  },
  { name: 'Trans Approval Inv Payment', selected: false, id: 2025 },
  { name: 'Trans Approval Online Shop', selected: false, id: 2026 },
  { name: 'Trans Approval DID Demo', selected: false, id: 2027 },
  { name: 'Trans Approval RMA Issues', selected: false, id:2028  },
  { name: 'Trans Approval Other', selected: false, id: 2029 },
  { name: 'Trans Approval HRA', selected: false, id: 2030 },
  { name: 'Trans Approval Data Center', selected: false, id: 2031 },
  { name: 'Quotation Sent App Name', selected: false, id:2032  },
  { name: 'Transaction Approval Share', selected: false, id: 2033 },
  { name: 'Transaction Approval Individual filter', selected: false, id: 2034 },
  { name: 'Customer Master Apptoval', selected: false, id: 2035 },
  { name: 'DID Invoice', selected: false, id: 2036 },
  { name: 'Write Off Invoice', selected: false, id:2037  },
  { name: 'CMS Login', selected: false, id:2038  },
  { name: 'Quotation Template', selected: false, id: 2039 },
  { name: 'Reseller Management', selected: false, id:2040  },
  { name: 'Call logs', selected: false, id:2041  },
  { name: 'Picture gallery', selected: false, id: 2042 },
  { name: 'Internal tickets', selected: false, id:2043  },
  { name: 'Petty cash report', selected: false, id:2044  },
  { name: 'Widthdrawl report', selected: false, id:2045  },
  { name: 'Price category', selected: false, id: 2046 },
  { name: 'Enquiry form', selected: false, id: 2047 },
  { name: 'CMS country', selected: false, id: 2048 },
  { name: 'DID number catalog', selected: false, id:2049  },
  { name: 'DID provider', selected: false, id:2050  },
  { name: 'DID trunk name', selected: false, id:2051  },
  { name: 'Deposit mgt', selected: false, id: 2052  },
  { name: 'Small task', selected: false, id:2053   },
  { name: 'Product category', selected: false, id:2054   },
  { name: 'Product quotation', selected: false, id: 2055  },
  { name: 'Stock inventory report', selected: false, id:2056   },
  { name: 'Rate catelog', selected: false, id:2057   },
  { name: 'Stock inventory Entry', selected: false, id: 2058  },
  { name: 'DID inventory entry', selected: false, id:2059   },
  { name: 'Sucuri ip Access', selected: false, id:2060  },
  { name: 'Mrvoip license key', selected: false, id: 2061 },
  { name: 'Soft Phone License', selected: false, id:2062  },
  { name: 'API token', selected: false, id:2063  },
  { name: 'Purchase entry', selected: false, id:2064  },
  { name: 'Purchase entry yearly', selected: false, id: 2065 },
  { name: 'Purchase entry yearly-Edit', selected: false, id: 2094},
  { name: 'Purchase entry - Voip Trend Chart', selected: false, id: 2076 },
  { name: 'Purchase entry - Mrvoip Trend Entry', selected: false, id: 2095 },
  { name: 'Purchase entry - Mrvoip Trend Chart', selected: false, id:2096  },
  { name: 'Purchase entry - Call4tel Trend Entry', selected: false, id: 2103 },
  { name: 'Purchase entry - Call4tel Trend Chart', selected: false, id:2104  },
  { name: 'Purchase entry waiting', selected: false, id:2066  },
  { name: 'Non trade Purchase Entry', selected: false, id: 2067 },
  { name: 'New Customer Approval', selected: false, id: 2068 },
  { name: 'Reseller Payment Menu', selected: false, id: 2077 },
  { name: 'Reseller Payment All', selected: false, id: 2078 },
  { name: 'Mrvoip calncall_callacloud Menu', selected: false, id: 2075 },
  { name: 'Mrvoip package price', selected: false, id: 2069 },
  { name: 'Mrvoip left product menu', selected: false, id: 2071 },
  { name: 'Mrvoip Industries', selected: false, id:  2072},
  { name: 'Mrvoip case studies', selected: false, id: 2073 },
  { name: 'Mrvoip contact details', selected: false, id: 2074 },
  { name: 'ERP - User Mgt', selected: false, id: 2079 },
  { name: 'External Blog', selected: false, id: 2070 },
  { name: 'Internal Blog', selected: false, id:2080  },
  { name: 'NX32 Serial Number', selected: false, id: 2081 },
  { name: 'NX32 Document Upload', selected: false, id:2082  },
  { name: 'Dynamic Excel', selected: false, id:2083  },
  { name: 'Revenue Report', selected: false, id:2084  },
  { name: 'MG Order List', selected: false, id:  2085},
  { name: 'YG Order List', selected: false, id: 2086 },
  { name: 'Customer invoice share', selected: false, id:2087  },
  { name: 'IP-Allowed Rule', selected: false, id: 2088 },
  { name: 'Renewal Reminder', selected: false, id: 2089 },
  { name: 'Webrtc-IP', selected: false, id:  2090},
  { name: 'Fgw', selected: false, id: 2091 },
  { name: 'Attendance Reports', selected: false, id: 2092 },
  { name: 'CPF Contribution', selected: false, id:2093  },
  { name: 'Website Subscribe Email', selected: false, id: 2097 },
  { name: '3cx Buy License Page', selected: false, id:  2098},
  { name: '3cx Buy permis for user', selected: false, id: 2099 },
  { name: 'Call4tel Address and Logo show in partner', selected: false, id:2100  },
  { name: 'Mrvoip Address and Logo show in partner', selected: false, id:2101  },
  { name: 'Mconnect Address and Logo show in partner', selected: false, id:2102  },
  //1st box
  { name: 'Recurring Checker List ', selected: false, id: 1121},
{ name: 'Enquiry Details ', selected: false, id: 1124},
{ name: 'Overdue Payments Notification ', selected: false, id:1127 },
{ name: 'Cal4Care Pte Ltd Overdue ', selected: false, id: 1130},
{ name: 'DCARE Technologies India Pvt Ltd Overdue ', selected: false, id: 1133},
{ name: 'Recurring Date Update ', selected: false, id:1136 },
{ name: 'Stock Pre Approval ', selected: false, id:1139 },
{ name: 'WebSite Enquiry ', selected: false, id:1162 },
{ name: 'Consolidated Overdue', selected: false, id:1165 },
{ name: 'Payment Follow Invoice ', selected: false, id: 1122},
{ name: 'Transaction Approval ', selected: false, id:1125 },
{ name: 'In-completes Task List', selected: false, id: 1128},
{ name: 'Cal4care Sdn. Bhd Overdue ', selected: false, id:1131 },
{ name: 'Marshal System Consultancy Overdue ', selected: false, id:1134 },
{ name: 'Purchase Entry-Trend', selected: false, id: 1137},
{ name: '2ds Verfication ', selected: false, id:1 },
{ name: '3cx Enquiry', selected: false, id:1163 },
{ name: 'Cal4care Sdn Bhd GST Rpt ', selected: false, id:1135 },
{ name: 'All Payment Follow Invoice ', selected: false, id:1123 },
{ name: 'Call Log Comments ', selected: false, id:1126 },
{ name: 'Send to Postal ', selected: false, id:1129 },
{ name: 'Dcare Technologies Pte Ltd Overdue ', selected: false, id:1132 },
{ name: 'Cal4Care Japan Co., Ltd Overdue ', selected: false, id: 1140},
{ name: 'Cloud Renewal Lic Key Popup ', selected: false, id:1138 },
{ name: 'All(M) Enquiry) ', selected: false, id: 1161},
{ name: '3cx Assigned Enquiry ', selected: false, id: 1164},
{ name: 'Cal4care (Thailand) Co., Ltd. Overdue ', selected: false, id: 1166},
//2nd box
{ name: 'Custom Search Icon show', selected: false, id:1148  },
  { name: 'Customer Serach', selected: false, id:1141  },
  { name: 'Invoice', selected: false, id: 1144 },
  { name: 'License Key', selected: false, id: 1147 },
  { name: 'Vs Provisioning', selected: false, id: 1151 },
  { name: 'Quotation Serach', selected: false, id: 1142 },
  { name: 'Credit Note', selected: false, id:1145  },
  { name: 'DID Number', selected: false, id:1149  },
  { name: 'All Page', selected: false, id:  1152},
  { name: 'Proforma Invoice', selected: false, id: 1143 },
  { name: 'Prepaid Note', selected: false, id:1146  },  
  { name: 'Customer Projects', selected: false, id:1150  },

 
];

this.checkboxList_3 = ["	", " 	", vvvv" 	", "", "	", "",
"	", "", "", "", "",
"", " 	", "", "	", "", "	", "	",
" 	", "",
];





skills: [
 
  
  { name: 'VOIP Credit Manager', selected: false, id:  6114},
  { name: 'VOIP Suspend Account', selected: false, id: 6124 },
  { name: 'VOIP Gateway Settings', selected: false, id:6134  },
  { name: 'Product Stock Report (Update)', selected: false, id:8008  },
  { name: 'Currenct Stock Show', selected: false, id: 7006 },
  { name: 'Rate Catelog Show', selected: false, id: 7007 },
  { name: 'Act Purchase Price Show', selected: false, id:7008  },
  { name: 'Default Menu Show', selected: false, id: 7009 },
  { name: 'Default Menu Show (low level)', selected: false, id:7010  },
  { name: 'Calncall Menu Show', selected: false, id: 7028 },
  { name: 'Reseller Shopping Menu', selected: false, id: 7032 },  
  { name: 'Public Task Manager', selected: false, id: 7021 },
  { name: 'Personal Task Manager', selected: false, id:7022  },  
  { name: 'Daily Work Report', selected: false, id: 7023 },
  { name: 'Mailer', selected: false, id:  7024},  
  { name: 'Help Desk', selected: false, id:7025  },

  { name: 'C4C Turn Over(Map)', selected: false, id: 7026 },  
  { name: 'Special Login', selected: false, id: 7041 },
  { name: 'Left Side TurnOver Chart', selected: false, id:  7042},  
  { name: 'Individual Petty Cash Credit Person Select', selected: false, id:7046  },
  { name: 'Approval Delete', selected: false, id:  7045},  
  { name: 'Tr', selected: false, id:  },
  { name: 'Tr', selected: false, id:  },  
  { name: 'Tr', selected: false, id:  },

  { name: 'Tr', selected: false, id:  },  
  { name: 'Tr', selected: false, id:  },


]

