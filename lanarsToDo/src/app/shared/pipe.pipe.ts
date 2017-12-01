import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class FilterPipe implements PipeTransform {
//  public transform(values: any[], filter: string): any[] {
//    if (!values || !values.length) return [];
//    if (!filter) return values;
//
//    return values.filter(v => v.indexOf(filter) >= 0);
//  }
	transform (values: any[], field: string, value: string) :any[] {
		
		console.log(field, value)
		if (!values || !values.length) return [];
		if (!value) return values;
		return values.filter(it => it[field].indexOf(value) >=0 )
	}
}