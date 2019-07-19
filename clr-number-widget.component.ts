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
    selector: 'app-clarity-sf-number-widget',
    template: `
      <clr-input-container>
        <label>{{schema.title}}</label>
        <input clrInput placeholder="{{schema.title}}" [formControl]="control" type="number">
        <clr-control-helper>{{schema.description}}</clr-control-helper>
        <clr-control-error>This field is required</clr-control-error>
      </clr-input-container>
    `
})
export class ClrNumberWidgetComponent extends StringWidget { }
