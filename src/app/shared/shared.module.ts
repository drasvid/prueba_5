import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSlideBarComponent } from './shared-slide-bar/shared-slide-bar.component';
import { share } from 'rxjs';
import { TargetasComponent } from './targetas/targetas.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    SharedSlideBarComponent,
    TargetasComponent,
    SearchBoxComponent,
    CalendarComponent
  ],

  exports:[

    SharedSlideBarComponent,
    TargetasComponent,
    SearchBoxComponent,
    CalendarComponent

  ],


  imports: [
    CommonModule
  ]
})
export class SharedModule { }
