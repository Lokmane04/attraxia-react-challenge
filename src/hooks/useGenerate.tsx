import { dataoutput } from "../types/output";
import { TableData } from "../types/reducerTypes";
let tableData: TableData[] = [];
const useGenerate = (number: number): dataoutput => {
  for (let i = 0; i < number; i++) {
    tableData.push({
      title: "Domain mapped site shows cors policy error",
      company: "General WordPress",
      status: "Open",
      date: new Date(2023, 7, 19, 12, 4),
      replies: {
        name: "Staff Name",
        number: 2,
        isStaff: true,
        img: "/imgs/StaffName.jpg",
      },
    });
    tableData.push({
      title: "After enabling cdn image sizes are big",
      company: "The Hub",
      status: "Open",
      date: new Date(2023, 8, 11, 12, 4),
      replies: {
        name: "Member Name",
        number: 3,
        isStaff: false,
        img: "/imgs/MemberName.jpg",
      },
    });
    tableData.push({
      title: "Google suggests to properly size images",
      company: "Plugins & Themes - {Plugin_name}",
      status: "Resolved",
      date: new Date(2023, 3, 3, 12, 4),
      replies: {
        name: "Username Here",
        number: 2,
        isStaff: false,
        img: "/imgs/UsernameHere.jpg",
      },
    });
    tableData.push({
      title: "Serve cached pages from cdn",
      company: "Features & Feedback - {Plugin_name}",
      status: "Resolved",

      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: "Jack Sean",
        number: 8,
        isStaff: false,
        img: "/imgs/JackSean.jpg",
      },
    });

    tableData.push({
      title: "Blog updates notifications via email",
      company: "Features & Feedback",
      status: "Resolved",
      date: new Date(2023, 3, 2, 7, 12),
      replies: {
        name: "Username Here",
        number: 2,
        isStaff: false,
        img: "/imgs/UsernameHere.jpg",
      },
    });
    tableData.push({
      title: "How to make a an anchor link",
      company: "General WordPress",
      status: "Open",
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: "{Staff Name}",
        number: 2,
        isStaff: true,
        img: "/imgs/StaffName.jpg",
      },
    });
    tableData.push({
      title: "After enabling cdn image sizes are big",
      company: "The Hub",
      status: "Open",
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: "{Staff Name}",
        number: 2,
        isStaff: true,
        img: "/imgs/StaffName.jpg",
      },
    });
    tableData.push({
      title: "Serve cached pages from the cdn",
      company: "Features & Feedback - {Plugin_name}",
      status: "Feedback",
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: "Jack Sean",
        number: 8,
        isStaff: false,
        img: "/imgs/JackSean.jpg",
      },
    });
    tableData.push({
      title: "Blog updates notification via email",
      company: "Features & Feedback",
      status: "Resolved",
      date: new Date(2023, 3, 1, 9, 22),
      replies: {
        name: "Username Here",
        number: 2,
        isStaff: false,
        img: "/imgs/StaffName.jpg",
      },
    });
    tableData.push({
      title: "How to make an anchor link",
      company: "General WordPress",
      status: "Open",
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: "{Staff Name}",
        number: 2,
        isStaff: true,
        img: "/imgs/StaffName.jpg",
      },
    });
  }
  let feedback = 0;
  let open = 0;
  let resolved = 0;
  tableData.forEach((item: TableData) => {
    switch (item.status) {
      case "Feedback":
        feedback++;
        break;
      case "Open":
        open++;
        break;
      case "Resolved":
        resolved++;
        break;
    }
  });

  const all = open + feedback + resolved;
  return {
    tableData,
    DropDownMenuNumbers: {
      all,
      resolved,
      open,
      feedback,
    },
  };
};

export default useGenerate;
