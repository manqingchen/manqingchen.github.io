import React from 'react';

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2">技术能力</h2>
      
      {/* 前端开发模块 */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium flex items-center">
          前端开发
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
          <li><strong>语言：</strong>TypeScript/JavaScript (ES6+)</li>
          <li><strong>框架：</strong>React (Next.js), Vue (Nuxt.js)</li>
          <li><strong>CSS：</strong>Tailwind, SASS/LESS, CSS Modules</li>
          <li><strong>优化：</strong>SSR/SSG 实现，SEO 优化，PWA 支持</li>
        </ul>
      </div>

      {/* 前端工程化模块 */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium flex items-center">
          前端工程化
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
          <div>
            <h4 className="font-medium">构建工具</h4>
            <ul className="list-disc pl-4">
              <li>Webpack/Rspack 插件开发</li>
              <li>Vite/Rollup 配置优化</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">代码质量</h4>
            <ul className="list-disc pl-4">
              <li>ESLint/Prettier 规范</li>
              <li>Monorepo (Nx) 管理</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 后端与DevOps模块 */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium flex items-center">
          后端 & DevOps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pl-4">
          <div>
            <h4 className="font-medium">框架</h4>
            <ul className="list-disc pl-4">
              <li>Nest.js/tRPC</li>
              <li>FastAPI (Python)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">数据库</h4>
            <ul className="list-disc pl-4">
              <li>MySQL/PostgreSQL</li>
              <li>Prisma/TypeORM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">运维</h4>
            <ul className="list-disc pl-4">
              <li>Docker/K8s</li>
              <li>Nginx/Traefik</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AI与设计模块 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium flex items-center">
            AI开发
          </h3>
          <ul className="list-disc pl-6">
            <li>PyTorch/Candle 模型训练</li>
            <li>Ollama 本地模型部署</li>
            <li>LangChain 应用开发</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium flex items-center">
            设计规范
          </h3>
          <ul className="list-disc pl-6">
            <li>Material Design 深度实践</li>
            <li>Apple HIG 规范适配</li>
            <li>A11Y 无障碍设计</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 