import Role from "./role";

export default interface User {
  id: string;
  localId: number;
  firstName: string;
  lastName: string;
  emailId: string;
  mobileNo: string;
  countryId: number;
  companyId: number;
  designation: string;
  roleId: Role;
}
