import moment from "moment";

const useFormatDate = (date: Date) => {
  const currentDate = moment();
  const momentDate = moment(date);

  if (momentDate.isSame(currentDate, "day")) {
    return `Today @ ${momentDate.format("h:mm A")}`;
  } else if (momentDate.isSame(currentDate.clone().subtract(1, "day"), "day")) {
    return `Yesterday @ ${momentDate.format("h:mm A")}`;
  } else {
    return momentDate.format("MMMM D @ h:mm A");
  }
};

export default useFormatDate;
