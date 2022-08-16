import React from "react";
import MainCard from "../../../utils/reusables/maincard/MainCard";
import { KeyboardArrowUpRounded, PersonRounded } from "@material-ui/icons";

function Users() {
  return (
    <div>
      <MainCard title="Users" icon={<KeyboardArrowUpRounded />} percent="20%" children={51} footerlink="See all users" footericon={<PersonRounded/>}/>
    </div>
  );
}

export default Users;
