import pfp from "../../assets/pfp.jpg";
import { Link, User } from "@nextui-org/react";

export default function UserProfile() {
  return (
    <User
      name="Joseph"
      description={
        <Link
          href="https://github.com/Mocchu"
          size="sm"
          isExternal
          className="text-slate-500 dark:text-slate-400"
        >
          github@Mocchu
        </Link>
      }
      avatarProps={{ src: pfp }}
      className="mb-4"
    />
  );
}
