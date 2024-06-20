import React, { ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertDestructiveProps {
  children: ReactNode; // ReactNode untuk menampung semua jenis children React
}

export function AlertDestructive({ children }: AlertDestructiveProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Failed</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
