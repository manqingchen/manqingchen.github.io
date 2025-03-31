import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">工作经历</h2>
      
      <div className="space-y-8">
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">ABC科技有限公司</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2020年至今
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">高级前端工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>负责公司核心产品的前端架构设计与实现</li>
            <li>优化前端性能，将页面加载时间减少40%</li>
            <li>带领5人团队完成多个重要项目</li>
          </ul>
        </div>
        
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">XYZ互联网公司</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2018-2020
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">前端开发工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>参与电商平台的前端开发与维护</li>
            <li>实现响应式设计，提升移动端用户体验</li>
            <li>开发内部组件库，提高团队开发效率</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 