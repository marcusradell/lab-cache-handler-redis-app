import { Messages } from "./_features/_messages/messages";
import Image from "next/image";

export default async function HomePage() {
  return (
    <>
      <div>
        <Image src="/cafe.jpg" alt="Café image" width={40} height={30} />
      </div>
      <Messages />
    </>
  );
}
