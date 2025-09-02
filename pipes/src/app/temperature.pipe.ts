import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true,

})

export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'): string | number | null {

    if (!value) {
      return value;
    }

    let val: number;
    let outputTemp: number;
    val = typeof value === 'string' ? parseFloat(value) : value;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;

    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }
    let symbol: 'C' | 'F';

    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'cel' ? 'C' : 'F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`

  }
}
