import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinnerVariants = cva("animate-spin text-neutral-700", {
  variants: {
    size: {
      default: "size-4",
      sm: "size-2",
      lg: "size-6",
      icon: "size-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Spinner = ({ size }: VariantProps<typeof spinnerVariants>) => {
  return <Loader className={spinnerVariants({ size })} />;
};
