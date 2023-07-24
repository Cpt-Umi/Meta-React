import Weekday from "./Weekday";
import Weekend from "./Weekend";

export default function CurrentMessage() {
  const day = new Date().getDay();

  return <div>{day >= 1 && day <= 5 ? <Weekday /> : <Weekend />}</div>;
}
