import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDestinatarioComponent } from './components/create-destinatario/create-destinatario.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { HistoryTransferComponent } from './components/history-transfer/history-transfer.component';
import { ShareComponent } from './components/share/share.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule  } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FuenteMdbComponent } from './fuente-mdb/fuente-mdb.component';
import { FuenteMaterializeComponent } from './fuente-materialize/fuente-materialize.component';
import { HttpClientModule } from "@angular/common/http";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinatarioComponent,
    TransferComponent,
    HistoryTransferComponent,
    ShareComponent,
    LoginComponent,
    RegisterComponent,
    FuenteMdbComponent,
    FuenteMaterializeComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,   
    materialModules,
    HttpClientModule
  ],
  exports:[
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
