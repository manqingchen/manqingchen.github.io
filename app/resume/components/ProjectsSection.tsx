"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    article?: string;
    internalRoute?: string;
  };
}

const projects: Project[] = [
  {
    title: 'RhoMarkets',
    description: 'DApp',
    tags: ['Next.js', 'Tailwind CSS', 'wagmi', 'viem'],
    links: {
      demo: 'https://www.rhomarkets.xyz/',
    },
  },
  // {
  //   title: '乐园岛',
  //   description: '主要负责项目的h5活动页以及后台开发',
  //   tags: ['amis', 'react', 'vue', 'midway', 'typeorm', 'mysql'],
  //   links: {
  //     demo: 'https://apps.apple.com/cn/app/fewmiles-%E4%B9%90%E5%9B%AD%E5%B2%9B/id6449445327',
  //   },
  // },
  // {
  //   title: '在线编辑器',
  //   description: '支持图文混排, 简易的在线图文编辑器',
  //   tags: ['React', 'TypeScript', 'konva', 'mobx'],
  //   links: {
  //     internalRoute: '/editor',
  //   },
  // },
  {
    title: '鲜大师',
    description: '提供一站式农批市场数字化解决方案',
    tags: ['React Native', 'TypeScript', 'styled-components', 'zustand'],
    links: {
      demo: 'https://apps.apple.com/cn/app/%E9%B2%9C%E5%A4%A7%E5%B8%88/id1626951695',
    },
  },
 
];

export default function ProjectsSection() {
  const router = useRouter();

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    if (project.links.internalRoute) {
      e.preventDefault();
      router.push(project.links.internalRoute);
    }
  };
  
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">作品集</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link 
            key={index}
            href={project.links.internalRoute || project.links.demo || '#'} 
            target={project.links.internalRoute ? undefined : "_blank"}
            className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl dark:bg-gray-800 transition-all duration-300 hover:translate-y-[-5px] hover:border-blue-300 dark:hover:border-blue-500"
            onClick={(e) => handleProjectClick(e, project)}
          >
            {project.image && (
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.internalRoute ? "打开编辑器" : "查看项目"}
                  </span>
                </div>
              </div>
            )}
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-gray-100 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 