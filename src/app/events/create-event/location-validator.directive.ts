import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    // We need to register the Validator with NG_VALIDATORS. By setting mutli == true, we stop the NG_VALIDATORS from being overwritten,
    // and rather we simply add to it's list of existing Validators
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})

export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        // Validator is on a sibling of the OnlineURL so we need to go to the root FormGroup to access this group.
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { validateLocation: false }
        }
    }
}