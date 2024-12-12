import { messagesService } from "./instance";
import { Revalidate } from "./revalidate";

export async function Messages() {
  const messages = await messagesService.getAll();

  return (
    <>
      <Revalidate />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  );
}
