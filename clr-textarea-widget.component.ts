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
    selector: 'app-clarity-sf-textarea-widget',
    template: `
    <clr-textarea-container>
      <label>{{schema.title}}</label>
      <textarea clrTextarea placeholder="{{schema.title}}" [formControl]="control"></textarea>
      <clr-control-helper>{{schema.description}}</clr-control-helper>
      <clr-control-error>JSON-Query is not valid</clr-control-error>
    </clr-textarea-container>
    `
})
export class ClrTextareaWidgetComponent extends StringWidget { }

