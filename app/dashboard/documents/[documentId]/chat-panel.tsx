"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { QuestionForm } from "./question-form";
import { Skeleton } from "@/components/ui/skeleton";

export default function ChatPanel({
  documentId,
}: {
  documentId: Id<"documents">;
}) {
  const chats = useQuery(api.chats.getChatsForDocument, { documentId });

  return (
    <div className=" border dark:bg-slate-800  flex flex-col gap-2 rounded-xl">
      <div className="min-h-[500px] h-[65vh] overflow-y-auto space-y-3">
        <div className="flex flex-col gap-1 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold">
              AI
            </span>
            <div className="border bg-slate-300 dark:bg-slate-900 p-2 rounded-lg rounded-tl-none whitespace-pre-line w-fit shadow-md">
              Hi there! Ask me anything about this document.
            </div>
          </div>
          {!chats && (
            <div>
              <div className="flex flex-col gap-1 items-end">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-1/3 h-12" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-1/3 h-24" />
              </div>
              <div className="flex flex-col gap-1 items-end">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-1/3 h-12" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-1/3 h-24" />
              </div>
            </div>
          )}
          {chats?.map((chat) => (
            <div className="w-full" key={chat._id}>
              {chat.isHuman ? (
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-sm font-bold self-end">
                    You
                  </span>
                  <div className="border bg-slate-200 dark:bg-slate-700 p-2 rounded-lg rounded-tl-none whitespace-pre-line w-fit shadow-md">
                    {chat.text}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold">
                    AI
                  </span>
                  <div className="border bg-slate-300 dark:bg-slate-900 p-2 rounded-lg rounded-tl-none whitespace-pre-line w-fit shadow-md">
                    {chat.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className="flex gap-1">
        <QuestionForm documentId={documentId} />
      </div>
    </div>
  );
}
