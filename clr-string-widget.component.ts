import { StringWidget } from 'ngx-schema-form';
import { Component } from '@angular/core';

/**
 * String widget for ngx-schema-form
 *
 * @export
 * @class ClrStringWidgetComponent
 * @extends {StringWidget}
 */
@Component({
    selector: 'app-mat-sf-string-widget',
    templateUrl: './clr-string-widget.component.html'
})
export class ClrStringWidgetComponent extends StringWidget { }
