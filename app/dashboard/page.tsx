import { MyCalendar } from "@/components/calendar/calendar";
import CardReservation from "@/components/card/reservation/card-reservation";
import TodayReservation from "@/components/card/reservation/status/today-reservation";
import YourReservation from "@/components/card/reservation/status/your-reservation";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <>
      <div className="lg:w-full lg:grid lg:grid-cols-3 gap-x-6 sm:block sm:gap-y-8">
        <div className="w-full">
          <CardReservation title="Today's Reservation">
            <TodayReservation />
          </CardReservation>
        </div>
        <div className="w-full">
          <CardReservation title="Your Reservation">
            <YourReservation />
          </CardReservation>
        </div>
        <div className="w-full">
          <Card className="p-4">
            <h1 className="text-base font-bold mb-3">Calendar</h1>
            <MyCalendar />
          </Card>
        </div>
      </div>
    </>
  );
}
