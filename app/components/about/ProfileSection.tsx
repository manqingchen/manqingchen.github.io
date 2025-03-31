import React from 'react';
import Link from 'next/link';
import WechatContact from '@/app/components/ui/WechatContact';

export default function ProfileSection() {
  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-lg">
        
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">张三</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">全栈开发工程师</p>
          
          <p className="mb-4 text-gray-700 dark:text-gray-200 max-w-2xl">
            我是一名热爱技术的全栈开发者，专注于构建高性能、用户友好的 Web 应用。
            拥有 5 年开发经验，擅长前端架构设计和后端系统开发，热衷于探索新技术并应用到实际项目中。
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="https://github.com/manqingchen" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <a 
              href="mailto:manqingchen@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              联系我
            </a>
            
            {/* 使用新的 WechatContact 组件 */}
            <WechatContact wechatId="nocsanxing" />
          </div>
        </div>
      </div>
    </section>
  );
} 