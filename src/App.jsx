import Button from "./components/button";
import { CircleArrowOutUpRight } from "lucide-react";
import Badge from "./components/badge";
import Card from "./components/card";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center and justify-center">
      <Card image="/cardimg3.png" reverse={true}>
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
    </div>
  );
}
