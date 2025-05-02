import Card from "@/ui/card";
import Badge from "@/ui/badge";
import Button from "@/ui/button";

export default function ProjectCard({ project, onClick }) {
  const { title, image, place, role, year, description, tags, reverse } =
    project;

  return (
    <Card image={image} reverse={reverse} onClick={onClick}>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle place={place} dev={role} year={year} />
      </Card.Header>
      <Card.Body>
        <Card.Content>
          <p>{description}</p>
        </Card.Content>
        <Card.Tags>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Card.Tags>
      </Card.Body>
      <Card.Footer>
        <Button>See project</Button>
      </Card.Footer>
    </Card>
  );
}
