import { getMessages } from "@/actions/livredor";
import LivreDor from "./livredor";
import { Message } from "./type";

export default async function Page() {

    const messages: Message[] = await getMessages();

    return (
        <LivreDor messages={messages} />
    );
}