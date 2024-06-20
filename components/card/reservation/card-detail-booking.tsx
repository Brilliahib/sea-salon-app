import { FC } from "react";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CardDetailBookingProps {
  time: string;
  userName: string;
  title: string;
}

const CardDetailBooking: FC<CardDetailBookingProps> = ({
  time,
  userName,
  title,
}) => {
  return (
    <Card className="border p-2 rounded-md space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <Clock className="w-4" />
          <h1 className="text-sm">{time}</h1>
        </div>
        <div>
          <h1 className="text-sm font-medium">{userName}</h1>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <p className="text-muted-foreground text-xs">{title}</p>
      </div>
    </Card>
  );
};

export default CardDetailBooking;
