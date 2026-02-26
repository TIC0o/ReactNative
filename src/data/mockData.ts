// src/data/mockData.ts
export interface Technology {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const technologies: Technology[] = [
    {
        id: '1',
        name: 'WordPress',
        description: 'Sistema de gestión de contenidos (CMS)',
        icon: 'wordpress',
    },
    {
        id: '2',
        name: 'MySQL',
        description: 'Sistema de gestión de bases de datos relacional',
        icon: 'database',
    },
    {
        id: '3',
        name: 'PostgreSQL',
        description: 'Base de datos relacional orientada a objetos',
        icon: 'database',
    },
    {
        id: '4',
        name: 'SQL Server',
        description: 'Sistema de gestión de base de datos de Microsoft',
        icon: 'database',
    },
];
