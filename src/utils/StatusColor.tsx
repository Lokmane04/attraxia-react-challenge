const StatusColor = (status: string): string => {
  let color: string = "";

  if (status === "Open") {
    color = "#286EF1";
  } else if (status === "Resolved") {
    color = "#52D194";
  } else if (status === "Feedback") {
    color = "#9026B1";
  }

  return color;
};

export default StatusColor;
