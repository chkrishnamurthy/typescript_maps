import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();

const customMap = new CustomMap("maps");

customMap.addMaker(user);
customMap.addMaker(company);
