import Country from "./country";
import Webinar from "./webinar";

export default interface Faculty {
  id: string;
  localId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  countryId: number;
  mobileNo: string;
  designation: string;
  bio: string;
  imageUrl: string;
  isCurrent: boolean;
  becameFacultyOn: Date;
  country: Country;
  webinars: Webinar[];
}
