// const mongoose = require('../configs/db');

// const Schema = mongoose.Schema;

// const webinarSchema = new Schema({
//     localId: {type: String, required: true},
//     webinarName: {type: String, required: true},
//     isFeatured: {type: Boolean, required: false},
//     duration: {type: String, required: true},
//     thumbImageUrl: {type: String, required: false},
//     coverImageUrl: {type: String, required: false},
//     date: {type: String, required: false},
//     time: {type: String, required: false},
//     summary: {type: String, required: false},
//     overview: {type: String, required: false},
//     learningObjectives: {type: String, required: false},
//     reasonToAttend: {type: String, required: false},
//     areasCovered: {type: String, required: false},
//     whoWillBenefit: {type: String, required: false},
//     category: {
//         categoryName: {type: String, required: false}
//     },
//     faculty: {
//         firstName: {type: String, required: false},
//         lastName: {type: String, required: false},
//         designation: {type: String, required: false},
//         profileImageUrl: {type: String, required: false}
//     },
//     webinarTypeName: {type: String, required: false}
// })
// module.exports = mongoose.model('Webinar', webinarSchema);
import Category from "./category_model";
import Faculty from "./faculty";
import WebinarType from "./webinarType";
import WebinarPurchaseOptionsDetail from "./webinarPurchaseOptionsDetail";

export default interface Webinar {
  id: string;
  localId: string;
  name: string;
  isFeatured: boolean;
  webinarTypeId: number;
  categoryId: number;
  imageUrl: string;
  duration: string;
  overview: string;
  learningobjective: string;
  reasonToAttend: string;
  areasCovered: string;
  whoWillBenefit: string;
  facultyId: string;
  dateAndTime: string;
  faculty: Faculty;
  category: Category;
  webinarType: WebinarType;
  webinarPurchasedOptionsDetail: WebinarPurchaseOptionsDetail[];
}
