import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type {FieldErrors, FieldValues} from "react-hook-form";
import {toast} from "sonner";
import type {AxiosError} from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Handles any form errors
export const formErrorsHandler = <T extends FieldValues>(errors: FieldErrors<T>) => {
  console.log("errors", errors);

  if (Object.keys(errors).length > 0) {
    const firstErrorKey = Object.keys(errors)[0] as keyof T;
    const firstErrorMessage = errors[firstErrorKey]?.message;

    toast("Uh oh! Something went wrong", {
      description: firstErrorMessage as string,
      dismissible: true,
    });
  }
}

export const apiErrorsHandler = (error: Error) => {
  const axiosError = error as AxiosError<{ message: string }>;
  toast("Uh oh! Something went wrong", {
    description: axiosError.response?.data?.message || "Sorry! connection failed",
  })
}