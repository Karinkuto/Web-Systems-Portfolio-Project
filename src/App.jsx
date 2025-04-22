import Button from "./components/button";
import Badge from "./components/badge";
import Card from "./components/card";
import Dialog from "./components/dialog";
import { useState } from "react";
import { CircleArrowOutUpRight } from "lucide-react";
import { Github } from "lucide-react";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center and justify-center">
      <Card image="/cardimg3.png" reverse={true} onClick={openDialog}>
        <Card.Header>
          <Card.Title>Multi-Post Stories</Card.Title>
          <Card.Subtitle place="Canopy" dev="Back End Dev" year="2015" />
        </Card.Header>
        <Card.Body>
          <Card.Content>
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
          </Card.Content>
          <Card.Tags>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </Card.Tags>
          <Card.Footer>
            <Button>See Project</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <Dialog.Header>
          <Dialog.Title>Multi-Post Stories</Dialog.Title>
          <Dialog.Subtitle place="Canopy" dev="Back End Dev" year="2015" />
        </Dialog.Header>
        <Dialog.Image src="/cardimg3.png" />
        <Dialog.Body>
          <Dialog.Content>
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
            Exploring the future of media in Facebook's first Virtual Reality
            app; a place to discover and enjoy 360 photos and videos on Gear VR.
          </Dialog.Content>
          <Dialog.Tags>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </Dialog.Tags>
          <Dialog.Separator />
          <Dialog.Footer>
            <Button icon={<CircleArrowOutUpRight />}>See Live</Button>
            <Button icon={<Github />}>See Source</Button>
          </Dialog.Footer>
        </Dialog.Body>
      </Dialog>
    </div>
  );
}
