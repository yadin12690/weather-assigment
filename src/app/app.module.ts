import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from "./app.service";

//Matrerial Imports
import { MatCardModule } from "@angular/material/Card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/Expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FavoritesComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSlideToggleModule,
    DragDropModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
