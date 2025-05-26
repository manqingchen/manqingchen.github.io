import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">工作经历</h2>
      
      <div className="space-y-8">
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">微微科技</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2023.07 - 2025.04
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">高级前端开发工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>负责迭代公司微应用 CLI 工具，完善脚本功能，优化 CI/CD 流程</li>
            <li>负责招聘,教育项目的开发迭代，确保系统稳定运行和功能持续优化</li>
            <li>设计并实现集团内部多语言解决方案，开发多个插件提升国际化及其他开发体验</li>
            <li>解决组内同事开发难题</li>
          </ul>
        </div>
        
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">MIZU</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2023.02 - 2024.01
            </span>
            <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">
              Meta团队创业公司
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">前端开发工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>开发 MIZU Web 的 PWA 项目，提供跨平台一致的用户体验</li>
            <li>研究 NDK 协议并进行二次开发后接入项目，负责 IM 部分数据库设计</li>
            <li>完成 IM 聊天及支付部分功能开发，确保系统稳定性和安全性</li>
          </ul>
        </div>
        
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">观妙科技（杭州）有限公司</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2022.01 - 2023.01
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">高级前端开发工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>主导鲜大师 App 核心模块开发，通过性能优化使应用响应速度提升 30%以上</li>
            <li>设计并搭建后台管理系统基础框架，开发定制化组件，提升团队开发效率</li>
            <li>负责鲜大师小程序架构设计与开发，提供测试工具套件，提升测试效率</li>
            <li>推动 Lerna + Monorepo 架构在团队中的应用，统一代码规范</li>
          </ul>
        </div>
        
        <div className="relative pl-8 pb-4 border-l-2 border-gray-200 dark:border-gray-700">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-2 border-white dark:border-gray-900"></div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold">浩鲸科技</h3>
            <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              2020.04 - 2022.01
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">前端开发工程师</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>负责云展会管理、消费医疗系统等多个管理系统的开发与维护</li>
            <li>开发恒安到家、蒙牛内部管理等多个微信小程序，探索小程序最佳实践</li>
            <li>推动公司内部搭建侧插件开发，实现逻辑、结构、样式的彻底分离</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 