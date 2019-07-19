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
    selector: 'app-clarity-sf-toggle-widget',
    template: `
    <clr-toggle-wrapper>
      <input type="checkbox" clrToggle [formControl]="control"/>
      <label>{{schema.title}}</label>
      <clr-control-helper>{{schema.description}}</clr-control-helper>
    </clr-toggle-wrapper>
    `
})
export class ClrToggleWidgetComponent extends StringWidget { }
