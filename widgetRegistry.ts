import { ClrNumberWidgetComponent } from './clr-number-widget.component';
import { ClrSelectWidgetComponent } from './clr-select-widget.component';
import { ClrStringWidgetComponent } from './clr-string-widget.component';
import { ClrTextareaWidgetComponent } from './clr-textarea-widget.component';
import { ClrToggleWidgetComponent } from './clr-toggle-widget.component';
import {DefaultWidgetRegistry} from 'ngx-schema-form';


export class ClrWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string',  ClrStringWidgetComponent);
    this.register('select', ClrSelectWidgetComponent);
    this.register('textarea', ClrTextareaWidgetComponent);
    this.register('toogle', ClrToggleWidgetComponent);
    this.register('number', ClrNumberWidgetComponent);
  }
}
