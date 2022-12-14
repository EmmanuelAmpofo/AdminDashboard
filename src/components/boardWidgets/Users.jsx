import React from "react";
import MainCard from "../../utils/reusables/maincard/MainCard";
import { KeyboardArrowUpRounded, PersonOutlineOutlined } from "@material-ui/icons";

function Users() {
  return (
    <div>
      <MainCard
        title="Users"
        icon={<KeyboardArrowUpRounded />}
        percent="20%"
        children={85}
        footerlink="See all users"
        footericon={<PersonOutlineOutlined/>}
      />
    </div>
  );
}

export default Users;
