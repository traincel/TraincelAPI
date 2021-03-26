import PurchaseOption from "./purchaseOption";

export default interface WebinarPurchaseOptionsDetail{
    purchaseOptionId: number;
    maxCount: number;
    maxDuration: number;
    price: number;
    purchaseOption: PurchaseOption
}