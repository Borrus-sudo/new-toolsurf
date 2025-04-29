import type { Tool } from '../data/tools';
import Card from 'react-bootstrap/Card';

type CardProps = { tool: Tool };
export default function ({ tool }: CardProps) {
    return (
        <a target="_blank" style={{ cursor: 'pointer' }} href={tool.link}>
            <Card
                className="tool-card rounded lh-sm"
                style={{ backgroundColor: 'rgb(24, 24, 26, 0.6)' }}
            >
                <Card.Body style={{ color: 'white' }}>
                    <Card.Title>{tool.name}</Card.Title>
                    <Card.Text style={{ color: '#A1A1AA' }}>
                        {tool.description}
                    </Card.Text>
                </Card.Body>
                <Card.Img
                    variant="bottom"
                    src={
                        tool.imgURL ||
                        'https://framerusercontent.com/images/hFxl4TYb8lrYnqlKnfcLYWo9rs.webp?scale-down-to=512'
                    }
                    style={{ objectFit: 'contain' }}
                />
            </Card>
        </a>
    );
}
