import { FC, ReactNode } from "react";
import { Plus } from "lucide-react";
import Button from "../../button/button";
import { Card } from "../../ui/card";

interface CardReservationProps {
  title: string;
  children: ReactNode;
}

const CardReservation: FC<CardReservationProps> = ({ title, children }) => {
  return (
    <>
      <Card className="p-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-base font-bold">{title}</h1>
          <Button className="justify-center text-sm gap-x-2">
            <span className="text-xs">Add New</span>
            <Plus className="w-3" />
          </Button>
        </div>
        <div>{children}</div>
      </Card>
    </>
  );
};

export default CardReservation;
