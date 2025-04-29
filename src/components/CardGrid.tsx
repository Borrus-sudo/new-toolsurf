import { Tool } from '../data/tools';
import Card from './Card';

export default function Grid({ tools }: { tools: Tool[] }) {
    return (
        <div
            className="d-grid"
            style={{
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '1.5rem',
            }}
        >
            {tools.map((tool) => (
                <Card tool={tool}></Card>
            ))}
        </div> 
    );
}
