import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpace"
}) 
export class ConvertSpaceToPipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, " ")

    }

}