export interface IConfigData {
    filter : { field: string, text: string }[],
    sort : {
        fieldName: string,
        ask: boolean,
        classArrow: string
    },
    page:{
        pageNumber:number,
        pageLimit:number
    }
}