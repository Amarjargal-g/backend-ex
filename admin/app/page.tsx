import { SignIn } from "./dashboard/_components/Sign-In";

export default function Page() {
  return (
    <div className="flex justify-between">
      <div>
        <SignIn />
      </div>
      <div>
        <img src="/loginpic.png" alt="pic" />
      </div>
    </div>
  );
}
