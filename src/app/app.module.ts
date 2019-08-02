import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { PayComponent } from './pay/pay.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './about/about.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { ComplainComponent } from './complain/complain.component';
import { QuickpayComponent } from './quickpay/quickpay.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DongleComponent } from './dongle/dongle.component';
import { GetinfoComponent } from './getinfo/getinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    InfoComponent,
    PayComponent,
    HomeComponent,
    PlanComponent,
    AboutComponent,
  
    NetbankingComponent,
    DebitcardComponent,
    HeaderComponent,
    FooterComponent,
    PrepaidComponent,
    ComplainComponent,
    QuickpayComponent,
    InvoiceComponent,
    DongleComponent,
    GetinfoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
