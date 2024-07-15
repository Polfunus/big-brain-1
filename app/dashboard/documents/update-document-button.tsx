"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { Upload } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/styles";
import { Id } from "@/convex/_generated/dataModel";
import UpdateDocumentForm from "./update-document-form";

export default function UpdateDocumentButton({
  documentId,
}: {
  documentId: Id<"documents">;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className={btnStyles}>
          <Upload className={btnIconStyles} /> UpdateDocument
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update the Document</DialogTitle>
          <DialogDescription>
          </DialogDescription>

          <UpdateDocumentForm
            onUpload={() => setIsOpen(false)}
            documentId={documentId}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
