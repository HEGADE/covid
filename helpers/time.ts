import { format, compareAsc } from "date-fns";
export default function DateHandling(): string {
  let dating: Date = new Date();
  let year: number = dating.getFullYear();
  let month: number = dating.getMonth();
  let day: number = dating.getDate();
  let newdate: string = format(
    new Date(year, month, day),
    "yyyy-MM-dd"
  ).toString();
  return newdate;
}
