import { getUser } from "@/app/utils/get-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const MyHeader = async () => {
  const user = await getUser();
  return (
    <div className="flex justify-end">
      <div className="flex flex-col  items-center justify-between">
        <Avatar className="text-black rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
