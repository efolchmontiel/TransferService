import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDestinatarioComponent } from './components/create-destinatario/create-destinatario.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { HistoryTransferComponent } from './components/history-transfer/history-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '', component: LoginComponent, pathMatch: "full" },
  // { path: 'login', component: LoginComponent, pathMatch: "full" },
  // { path: 'register', component: RegisterComponent, pathMatch: "full" },
  { path: '', component: CreateDestinatarioComponent, pathMatch: "full"},
  { path: 'transfer', component: TransferComponent },
  { path: 'history', component: HistoryTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
