import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Router} from '@angular/router';
import { LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { PayComponent } from './pay/pay.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './about/about.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { QuickpayComponent } from './quickpay/quickpay.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GetinfoComponent } from './getinfo/getinfo.component';
import { DongleComponent } from './dongle/dongle.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'info', component: InfoComponent
  },
  {
    path:'pay', component: PayComponent
  },
  {
    path:'success', component: SuccessComponent
  },
  {
    path:'', component: HomeComponent
  },
  {
    path:'services', component: ServicesComponent
  },
  {
    path:'plan', component: PlanComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'debitcard',component:DebitcardComponent
  },
  {
    path:'netbanking',component:NetbankingComponent
  },
  {
    path:'prepaid',component:PrepaidComponent
  },
  {
    path:'quickpay',component:QuickpayComponent
  },
  {
    path:'invoice',component:InvoiceComponent
  },
  {
    path:'dongle',component:DongleComponent
  },
  {
    path:'getinfo',component:GetinfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
