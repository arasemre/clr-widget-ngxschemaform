In your module, you need to:

- declare your widget component (like any regular component),
- declare it as an entry components (it means it can be instanciated dynamically),
- and provide your registry.

```javascript
declarations: [  
  ClrNumberWidgetComponent,  
  ClrTextareaWidgetComponent,  
  ClrToggleWidgetComponent,  
  ClrSelectWidgetComponent,  
  ClrStringWidgetComponent  
],
entryComponents: [  
  ClrNumberWidgetComponent,  
  ClrTextareaWidgetComponent,  
  ClrToggleWidgetComponent,  
  ClrSelectWidgetComponent,  
  ClrStringWidgetComponent  
],
providers: [  
  {  
    provide: WidgetRegistry,  
    useClass: ClrWidgetRegistry  
  }  
]

```

Note: you will also need to import `ReactiveFormsModule` if you want to be able to use form control:
```javascript
import { ReactiveFormsModule } from '@angular/forms';
...
@NgModule({
  ...
  imports: [
    ...
    ReactiveFormsModule,
  ]
})
```
