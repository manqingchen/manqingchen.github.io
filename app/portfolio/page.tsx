'use client'
import React from 'react';
import Image from 'next/image';
import FilterButtons from './components/FilterButtons';

// 作品集项目类型
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

// 示例作品集数据
const projects: Project[] = [
  {
    id: 'project1',
    title: '项目一',
    description: '这是我的第一个项目，主要使用了React和Next.js进行开发。',
    imageUrl: '/project1.jpg', // 请确保在public文件夹中有此图片
    tags: ['React', 'Next.js', 'TailwindCSS'],
  },
  {
    id: 'project2',
    title: '项目二',
    description: '这是一个使用TypeScript和Node.js开发的后端项目。',
    imageUrl: '/project2.jpg', // 请确保在public文件夹中有此图片
    tags: ['TypeScript', 'Node.js', 'Express'],
  },
  {
    id: 'project3',
    title: '项目三',
    description: '这是一个全栈应用，前端使用React，后端使用Django。',
    imageUrl: '/project3.jpg', // 请确保在public文件夹中有此图片
    tags: ['React', 'Django', 'PostgreSQL'],
  },
];

// 获取所有标签
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

// 项目卡片组件
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  
  const handleFilterChange = (tag: string) => {
    if (tag === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(tag)));
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">我的作品集</h1>
      
      <FilterButtons tags={allTags} onFilterChange={handleFilterChange} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 