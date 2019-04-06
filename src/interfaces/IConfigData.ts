export interface IConfigData {
    filter : { field: string, text: string }[],
    sort : {
        fieldName: string,
        ask: boolean
    },
    page:{
        pageNumber:number,
        pageLimit:number
    }
}