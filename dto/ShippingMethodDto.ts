export default class ShippingMethodDto {
    public shippingMethodId:number = 0;
    public name:string="";
    public carrier:string="";
    public deliveryRangeLowerBounds:number=0;
    public deliveryRangeUpperBounds:number=0;
    public deliveryRangeUnits:string="";
    public cost:number=0;
}