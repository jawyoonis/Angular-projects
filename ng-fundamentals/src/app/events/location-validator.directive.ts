import { Directive } from "@angular/core";
import { FormGroup, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
    selector: '[appLocationValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: AppLocationValidator, multi: true}]
})

export class AppLocationValidator implements Validator{
    validate(formGroup: FormGroup): {[key: string ]: any} {
        let address = formGroup.controls['address'];
        let location = formGroup.controls['location']
        let country = formGroup.controls['country']
        let city = formGroup.controls['city']
        let onlineUrl = (<FormGroup> formGroup.root).controls['onlineUrl'];
        if((address && address.value && country && 
            country.value && city && city.value && 
            location && location.value)
         || (onlineUrl && onlineUrl.value)){
            return {key:null};
        } else {return {appLocationValidator:false}}
       
    }
    }
    