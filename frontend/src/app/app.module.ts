import {NgModule} from "@angular/core";
import {BrowserModule, EVENT_MANAGER_PLUGINS} from "@angular/platform-browser";
import {UxButtonModule, UxHammerPluginPatchA6} from "@netcracker/ux-ng2/library";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UxButtonModule
  ],
  providers: [
      // fix hammerjs bugs http://wsm-0911:3003/patches/hammer-plugin
      {
          provide: EVENT_MANAGER_PLUGINS,
          useClass: UxHammerPluginPatchA6,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
