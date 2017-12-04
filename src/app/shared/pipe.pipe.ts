import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter',
	  pure: false})

export class FilterPipe implements PipeTransform {

	transform (values: any[], field: string, value: string) :any[] {		
		if (!values || !values.length) return [];
		if (!value) return values;
		return values.filter(it => it[field].indexOf(value) >=0 )
	}
}

@Pipe({
	name: 'pager',
	pure: false
})

export class PagerPipe implements PipeTransform{
	
	transform (values: any[], page:number, perPage:number) {
	let transformArr:any[] = []
	values.forEach((item, index)=>{
			if (index >= perPage*(page-1) && index < perPage*(page-1)+perPage ) {
				transformArr.push(item)
			}
		})
		return transformArr
			
		}

	}

 

