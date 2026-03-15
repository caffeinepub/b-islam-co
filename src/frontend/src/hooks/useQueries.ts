import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitBooking() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Backend unavailable");
      return actor.submit(name, email, phone, message);
    },
  });
}
