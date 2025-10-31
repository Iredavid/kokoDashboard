import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-nav-sec',
  imports: [RouterModule, MatExpansionModule],
  templateUrl: './nav-sec.html',
  styleUrl: './nav-sec.scss',

})
export class NavSec {
  activeIndex:number | null = null;
  expanded = false;
  
  onOpen(index: number) {
    this.activeIndex = index;
  }
  onClose(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    }
  }
  menus = [
    {
      icon: 'fi fi-tr-dashboard-panel',
      title: 'Dashboard',
      items: [
        {label:'Clocking', route:''},
        {label:'Manage Patient', route:''},
        {label:'Visit Queue', route:''},
        {label:'Vitals', route:''},
        {label:'Doctor', route:''},
        {label:'Laboratory', route:''},
        {label:'Dispense Drug', route:''},
        {label:'Radiology', route:''},
        {label:'Admitted Patients', route:''},
        {label:'Deposit & Withdraw', route:''},
        {label:'Supply & Payment', route:''},
        {label:'Claims and Payments', route:''},
        {label:'User', route:''},
        {label:'Permission', route:''},
        {label:'Global', route:''},
      ]
    },
    {
      icon: 'fi fi-tr-desk',
      title: 'Front Desk',
      items: [
        {label:'Patients', route:'/jobs'},
        {label:'Appointments', route:'/jobs'},
        {label:'Visit', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-syringe-injection-blood',
      title: 'Services',
      items: [
        {label:'Consultation', route:'/jobs'},
        {label:'Procedure / Service', route:'/jobs'},
        {label:'Surgery', route:'/jobs'},
        {label:'In Patients', route:'/jobs'},
        {label:'Immunization', route:'/jobs'},
        {label:'Medical Laboratory', route:'/jobs'},
        {label:'Radiology', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-seller-store',
      title: 'Stores & Pharmacy',
      items: [
        {label:'Pharmacy', route:'/jobs'},
        {label:'Store Management', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-document-paid',
      title: 'Account & Billing',
      items: [
        {label:'Transactions', route:'/jobs'},
        {label:'Posting Ledger', route:'/jobs'},
        {label:'General Ledger Setup', route:'/jobs'},
        {label:'Scheme Scale Setup', route:'/jobs'},
        {label:'Utilities', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-financial-health',
      title: 'HMO',
      items: [
        {label:'Add HMO', route:'/jobs'},
        {label:'Manage HMO', route:'/jobs'},
        {label:'HMO Summary By Visit Invoice', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-admin-alt',
      title: 'Admin',
      items: [
        {label:'HR/Staff', route:'/jobs'},
        {label:'User Security', route:'/jobs'},
        {label:'Organization', route:'/jobs'},
        {label:'Global Item', route:'/jobs'},
        {label:'Examination', route:'/jobs'},
        {label:'Diagnosis', route:'/jobs'},
        {label:'Template', route:'/jobs'},
      ]
    },
    {
      icon: 'fi fi-tr-file-medical-alt',
      title: 'Reports',
      items: [
        {label:'Laboratory', route:'/jobs'},
        {label:'Radiology', route:'/jobs'},
        {label:'Pharmacy', route:'/jobs'},
        {label:'Consultation', route:'/jobs'},
        {label:'Admission', route:'/jobs'},
        {label:'Appointments', route:'/jobs'},
        {label:'Patient Registration', route:'/jobs'},
      ]
    }, 
    {
      icon: 'fi fi-tr-trading',
      title: 'Analytic Report',
      items: [
        {label:'Patient', route:'/jobs'},
        {label:'Doctor', route:'/jobs'},
        {label:'Visitation', route:'/jobs'},
        {label:'Surgery', route:'/jobs'},
        {label:'Vendor/Inventory', route:'/jobs'},
        {label:'Billing', route:'/jobs'},
        {label:'Laboratory/Store/Radiology', route:'/jobs'},
        {label:'Clinical Report', route:'/jobs'},
        {label:'Extended Clinical Report', route:'/jobs'},
        {label:'Audit', route:'/jobs'},
        {label:'Staff', route:'/jobs'},
      ]
    },
  ];
  
}
