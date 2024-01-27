import { Button } from "@nextui-org/react";
import { CalendarCheck, CalendarDays, CalendarX } from "lucide-react";

export default function MainNav({ svgColor }) {
  return (
    <nav className="w-full">
      <ul className="flex w-full flex-col">
        <li>
          <Button
            fullWidth
            variant="light"
            startContent={<CalendarX color={svgColor} className="mr-1 w-5" />}
            className="flex justify-start"
          >
            Today
          </Button>
        </li>
        <li>
          <Button
            fullWidth
            variant="light"
            startContent={
              <CalendarDays color={svgColor} className="mr-1 w-5" />
            }
            className="flex justify-start"
          >
            Upcoming
          </Button>
        </li>
        <li>
          <Button
            fullWidth
            variant="light"
            startContent={
              <CalendarCheck color={svgColor} className="mr-1 w-5" />
            }
            className="flex justify-start"
          >
            Completed
          </Button>
        </li>
      </ul>
    </nav>
  );
}
