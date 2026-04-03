import * as React from "react";
import { Field as BaseField } from "@base-ui/react";

export function Field({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Root>) {
  return <BaseField.Root className={className} {...props} />;
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      className={`text-sm font-medium ${className ?? ""}`}
      {...props}
    />
  );
}
