import {
    Grid,
    Library,
    PenTool,
    Brain,
    Zap,
    Rocket,
    Video,
    ShoppingCart,
    Code,
    Users
} from 'lucide-react';
import { categories } from '../data/tools';

const iconMap = {
    All: Grid,
    Libraries: Library,
    Design: PenTool,
    AI: Brain,
    'No-Code': Zap,
    Startups: Rocket,
    Video: Video,
    'E-commerce': ShoppingCart,
    'Social Media':Users,
    Coding: Code,
};

export default function Sidebar() {
    return (
        <div
            className="px-3 py-4"
            style={{
                borderRightColor: '#3F3F45',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                width: '16rem',
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1.875rem',
                }}
                className="ms-3 mb-4 mx-auto"
            >
                🌊 ToolSurf
            </div>
            <div>
                {categories.map((category) => {
                    const Icon = iconMap[category];
                    return (
                        <div
                            style={{
                                color: '#A1A1AA',
                                marginBottom: '2px',
                                cursor: 'pointer',
                                borderColor: 'transparent',
                                borderStyle: 'solid',
                                fontSize: '0.875rem',
                                fontWeight: 400,
                            }}
                            className="hover-bg py-2 px-1 category rounded lh-sm"
                        >
                            <Icon
                                className="me-2"
                                style={{ transform: 'scale(0.75)' }}
                            />
                            {category}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
