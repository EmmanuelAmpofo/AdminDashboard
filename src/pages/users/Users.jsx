import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box, Button, makeStyles } from "@material-ui/core";
import { UserRows, UserColumns } from "./usertable/UserTable";
import "./usertable/usertable.css";
import { Link } from "react-router-dom";
import MainCard from "../../utils/reusables/maincard/MainCard";
import Btn from "../../utils/reusables/btns/Btn";

const useStyles = makeStyles((theme) => ({
  dataGridWrapper: {
    width: "100%",
    height: "84vh",
  },
  actionWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  viewBtn: {
    padding: "2px 5px",
    borderRadius: "5px",
    color: theme.palette.global.darkblue,
    border: "1px dotted rgba(0,0,139,0.596)",
    cursor: "pointer",
  },
  delBtn: {
    padding: "2px 5px",
    borderRadius: "5px",
    color: theme.palette.global.red,
    border: "1px dotted rgba(220,20,60,0.6)",
    cursor: "pointer",
  },
  data: {
    background: "#fff",
  },
  addnewuser: {
    marginBottom: "20px",
  },
}));

function Users() {
  const classes = useStyles();

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: () => {
        return (
          <div className={classes.actionWrapper}>
            <div>
              {" "}
              <Link to="/users/singleuser" style={{ textDecoration: "none" }}>
                <span className={classes.viewBtn}>View</span>{" "}
              </Link>
            </div>
            <div>
              {" "}
              <span className={classes.delBtn}>Delete</span>{" "}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={classes.dataGridWrapper}>
      <Box className={classes.addnewuser}>
        <MainCard
          percent={
            <Link to="/users/new" style={{ textDecoration: "none" }}>
              <Box>
                <Btn title="Add new" />
              </Box>
            </Link>
          }
        />
      </Box>
      <DataGrid
        rows={UserRows}
        columns={UserColumns.concat(actionColumn)}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick={true}
        className={classes.data}
      />
    </div>
  );
}

export default Users;
