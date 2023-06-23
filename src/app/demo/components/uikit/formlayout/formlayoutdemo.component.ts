import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    selectedState: any = null;

    states: any[] = [
        { name: 'Arizona', code: 'Arizona' },
        { name: 'California', value: 'California' },
        { name: 'Florida', code: 'Florida' },
        { name: 'Ohio', code: 'Ohio' },
        { name: 'Washington', code: 'Washington' }
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

    requesterFormControl = new FormControl('', [Validators.required, Validators.email]);
    subjectFormControl = new FormControl('', Validators.required);
    descriptionFormControl=new FormControl('',Validators.required);
    onSubmit(){
        
    window.location.href="http://localhost:4200/#/uikit/floatlabel";
    }
}


