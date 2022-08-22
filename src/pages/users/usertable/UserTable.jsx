export const UserRows = [
  {
    id: 1,
    username: "Poff",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 2,
    username: "Papa's",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 3,
    username: "Winston",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 4,
    username: "Keche",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 5,
    username: "Ceasar",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 6,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 7,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 8,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 9,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 10,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 11,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 12,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 13,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 14,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 15,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "passive",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 16,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 17,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 18,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 19,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 20,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "pending",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
  {
    id: 21,
    username: "Jacque",
    img: "https://picsum.photos/200/300",
    status: "active",
    email: "poffstylish1@gmail.com",
    age: 21,
  },
];

export const UserColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 110,
  },
  {
    field: "user",
    headerName: "User",
    width: 260,
    renderCell: (params) => {
      return (
        <div className="columnWithImg">
          <img src={params.row.img} alt="avatar" className="columnImg" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div >
          <span className={`columnWithStatus ${params.row.status}`} >{params.row.status}</span>
        </div>
      );
    },
  },
];
