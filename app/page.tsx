import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {getAuthSession} from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
    const session = await getAuthSession();
    return (
        <div className="">
            <p>{JSON.stringify(session, null, 2)}</p>
            <Button>Click Me</Button>
            <Input/>
        </div>
    )
}
