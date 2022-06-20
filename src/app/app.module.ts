import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts/ngx-charts.module';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from '@ag-grid-community/angular';


@NgModule({
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseLocation
    }
  ],
  imports: [
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxUIModule,
    AgGridModule
  ],
  declarations: [
    AppComponent,
    GridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function getBaseLocation() {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  const basePath: string = (paths && paths[0]) || '';
  return '/' + basePath;
}
