"use client";

import { cn } from "@/lib/utils";
import { ClipboardPen, Cog, FilesIcon, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden w-[150px] md:w-[200px] md:block">
      <ul className="space-y-6">
        {/* <li>
          <Link
            className={cn(
              "font-light flex gap-2 items-center text-lg hover:text-primary/75 md:text-xl",
              {
                "text-primary": pathname.endsWith("/search"),
              }
            )}
            href="/dashboard/search"
          >
            <Search />
            Search
          </Link>
        </li> */}
        <li>
          <Link
            className={cn(
              "font-light flex gap-2 items-center text-lg hover:text-primary/75 md:text-xl",
              {
                "text-primary": pathname.endsWith("/documents"),
              }
            )}
            href="/dashboard/documents"
          >
            <FilesIcon />
            Documents
          </Link>
        </li>
        {/* <li>
          <Link
            className={cn(
              "font-light flex gap-2 items-center text-lg hover:text-primary/75 md:text-xl",
              {
                "text-primary": pathname.endsWith("/notes"),
              }
            )}
            href="/dashboard/notes"
          >
            <ClipboardPen />
            Notes
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
