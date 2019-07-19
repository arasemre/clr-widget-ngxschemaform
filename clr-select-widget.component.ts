import { SelectWidget } from 'ngx-schema-form';
import { Component, OnInit } from '@angular/core';

/**
 * Select widget for ngx-schema-form
 *
 * @export
 * @class ClrSelectWidgetComponent
 * @extends {SelectWidget}
 */
@Component({
    selector: 'app-clarity-sf-dropdown-widget',
    templateUrl: './clr-select-widget.component.html'
})
export class ClrSelectWidgetComponent extends SelectWidget { }
