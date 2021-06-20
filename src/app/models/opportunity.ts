export interface Opportunity {
    RequestTypeId: number,
    statusId: number,
    country: string,
    invoiceOfficeLocation:string,
    parentCompanyId?: number,
    clientTypeId:string,
    assetTypeId : string,
    serviceType : string,
    subServiceTypeId: string,
    opportunityScopeId:number,
    salesChannelId : number,
    isInCompetition : boolean,
    isRFP : boolean
}