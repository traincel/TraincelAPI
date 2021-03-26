export default class Category {
  constructor(category : any){
    console.log('cat',category)
    this.name = category.name;
  }
  name:string;
  id: number | undefined;
}
