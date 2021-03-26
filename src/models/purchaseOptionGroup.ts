import PurchaseOption from './purchaseOption';

export default interface PurchaseOptionType {
    id: number;
    groupName: string;
    purchasedOptions: PurchaseOption[];
}