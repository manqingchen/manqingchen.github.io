import React from 'react';

export default function MajorProjectExperience() {
  return (
    <section className="mt-12">
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">主要项目经验</h4>
          <div className="space-y-4">
            
            {/* 智能内容生成平台 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">智能内容生成平台</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                React + TypeScript + Konva.js + WebAssembly + Zustand
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>使用 Konva.js 实现专业级画布编辑功能，支持图层拖拽、缩放、合并等操作</li>
                <li>采用 Zustand 重构状态管理，优化编辑器核心逻辑，提升代码可维护性</li>
                <li>实现画布双缓存机制，解决大型场景渲染卡顿问题，提升操作流畅度</li>
                <li>优化图像处理性能，提供更快的滤镜和特效处理能力</li>
              </ul>
            </div>

            {/* 鲜大师混合 App */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">鲜大师混合 App</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                React + React Hook + React Native + TypeScript + Zustand
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>负责收银结算、货主对账等核心业务模块的开发与优化</li>
                <li>针对 699pad 卡顿问题，引入 React Hook Form 与 Zustand 状态管理方案</li>
                <li>实现微信小程序分享功能，重构低代码页面，提升用户体验</li>
              </ul>
            </div>
            
            {/* 跨端组件库 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">跨端组件库</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                React + React Hook + React Native + TypeScript
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>基于 Ant Design Mobile 和 Ant Design Mobile RN 搭建跨平台 UI 框架</li>
                <li>设计组件库路径别名配置方案，实现根据运行环境自动加载对应平台组件</li>
                <li>通过统一 API 设计，实现一套代码多端运行，大幅提升开发效率</li>
              </ul>
            </div>
            
            {/* 鲜大师低代码后台管理系统 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-medium mb-2">鲜大师低代码后台管理系统</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">AMIS + UMI</p>
              <ul className="list-disc pl-5 text-sm">
                <li>基于百度低代码 AMIS 和 UMI 框架实现后台管理系统</li>
                <li>开发多种定制化组件，满足特殊业务需求，节省 90% 开发资源</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 