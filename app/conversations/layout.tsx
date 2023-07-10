import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";

export default async function ConverstaionsLayout({
    children,
}: { children: React.ReactNode }) {

    const conversations = await getConversations();
    
    return (
        //@ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
    )
}