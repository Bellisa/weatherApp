import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { IConfigData } from 'src/interfaces/IConfigData';
import { isNullOrUndefined } from 'util';
import { isEmpty } from 'rxjs/operators';
import { ParamMap } from '@angular/router';


@Injectable({
    providedIn: 'root',
})
export class UtilsService {

    public static getUrlQueryParam(params: IConfigData): string {
        if (isNullOrUndefined(params)) return '';

        let query = '';
        let queryF = '';
        let queryS = '';
        let queryP = '';
        if (params.filter && params.filter.length > 0) {
            params.filter.forEach(el => { queryF += `&${el.field}_like=${el.text}` });
            if (queryF.length > 0) queryF = queryF.slice(1, queryF.length);
            //  console.log('queryF:' + queryF);
        }
        if (params.sort && params.sort.fieldName.length > 0) {

            queryS = `_sort=${params.sort.fieldName}&_order=${params.sort.ask ? 'ask' : 'desk'}`;
            //  console.log('queryS:' + queryS);
        }
        if (params.page) {
            queryP = `_page=${params.page.pageNumber}&_limit=${params.page.pageLimit}`;
            //   console.log('queryP:' + queryP);
        }

        queryF.length > 0 ? query = `?${queryF}` : '';
        queryS.length > 0 ? query += `&${queryS}` : '';
        queryP.length > 0 ? query += `&${queryP}` : '';
        // console.log('query1:' + query);
        query.length > 0 ? query = `?${query.substring(1)}` : query;
       // console.log('end query:' + query);
        return query;
    }
    public static getUrlObjectQueryParam(params: IConfigData): { [key: string]: any } {
        if (isNullOrUndefined(params)) return {};
        let url: { [key: string]: any } = {};

        if (params.filter && params.filter.length > 0) {
            params.filter.forEach(el => url[`${el.field}_like`] = el.text);
        }

        if (params.sort && params.sort.fieldName.length > 0) {
            url[`_sort`] = params.sort.fieldName;
            url[`_order`] = params.sort.ask ? 'ask' : 'desk';

        }
        if (params.page) {
            url[`_page`] = params.page.pageNumber;
            url[`_limit`] = params.page.pageLimit;
        }
        //console.log('end url:' + JSON.stringify(url));
        return url;
    }

    public static setConfigDataByParam(params: ParamMap,configPage: IConfigData): IConfigData {
        
       
        // filter
        if (params.has('title_like')) {
            configPage.filter=[];
            configPage.filter.push({field: 'title', text: params.get('title_like')})   ;         
        }
        if (params.has('stars_like')) {
            if(configPage.filter==null){
                configPage.filter=[];
            }
            configPage.filter.push({field: 'stars', text: params.get('stars_like')}) 
        }
        // sort
        if (params.has('_sort') && params.has('_order')) {
            configPage.sort.fieldName = params.get('_sort');
            configPage.sort.ask = (params.get('_order').toLowerCase()==='ask')?true:false;

        }
        if(params.has('_page') && params.has('_limit')){
            configPage.page.pageNumber = Number(params.get('_page'));
            configPage.page.pageLimit = Number(params.get('_limit'));
        }
       // console.log('end configPage:' + JSON.stringify(configPage));
        return configPage;
    }



}
