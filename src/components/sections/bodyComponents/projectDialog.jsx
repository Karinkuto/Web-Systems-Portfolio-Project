import React from "react";
import Dialog from "@/ui/dialog";
import Badge from "@/ui/badge";
import Button from "@/ui/button";
import { Github } from "lucide-react";

export default function ProjectDialog({ project, isOpen, onClose }) {
  if (!project) return null;

  const {
    title,
    image,
    place,
    role,
    year,
    detailedDescription,
    tags,
    liveLink,
    sourceCode,
  } = project;

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <Dialog.Header className="mb-[28px]">
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Subtitle place={place} dev={role} year={year} />
        </Dialog.Header>

        <Dialog.Image src={image} alt={title} className="mb-[59px]" />

        <Dialog.Body>
          <Dialog.Content>
            {Array.isArray(detailedDescription) ? (
              detailedDescription.map((paragraph, index) => {
                // Create a unique key by combining the first 10 chars of the paragraph
                const key = `para-${paragraph.substring(0, 10).replace(/\s+/g, "-")}-${index}`;
                return (
                  <p key={key} className="w-full mb-4 last:mb-0">
                    {paragraph}
                  </p>
                );
              })
            ) : (
              <p className="w-full">{detailedDescription}</p>
            )}
          </Dialog.Content>
          <div>
            <Dialog.Tags>
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Dialog.Tags>
            <Dialog.Separator />
            <div className="flex gap-4 mt-4">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <Button>See live</Button>
              </a>
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <Button icon={<Github />}>See source</Button>
              </a>
            </div>
          </div>
        </Dialog.Body>
      </div>
    </Dialog>
  );
}
