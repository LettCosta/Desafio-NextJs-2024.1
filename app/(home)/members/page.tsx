import { membersAll } from "@/back/search/actions";
import MembersPage from "@/components/members_page";

export default async function Page() {

    const {members,count} = await membersAll()

    return(
        <div className="min-h-screen">
            <MembersPage count={count} members={members} />
        </div>
    )
}