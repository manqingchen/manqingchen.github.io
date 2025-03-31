"use client";

import React, { useState } from 'react';

type WechatContactProps = {
  wechatId: string;
  className?: string;
};

export default function WechatContact({ wechatId, className = "" }: WechatContactProps) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      
      // 3秒后重置复制状态
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error('复制失败:', err);
      // 如果复制API失败，使用提示框
      alert(`微信号: ${wechatId}`);
    }
  };
  
  return (
    <div className="relative">
      <button 
        onClick={copyToClipboard}
        className={`flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .186-.059l2.114-1.225a.636.636 0 0 1 .32-.093c.062 0 .124.01.181.03.943.243 1.963.376 3.023.376 4.801 0 8.691-3.289 8.691-7.342 0-4.053-3.89-7.343-8.691-7.343zm-.358 3.168c.512 0 .929.433.929.968 0 .535-.417.968-.929.968-.513 0-.929-.433-.929-.968 0-.535.416-.968.929-.968zm4.933 0c.513 0 .929.433.929.968 0 .535-.416.968-.929.968s-.929-.433-.929-.968c0-.535.417-.968.929-.968zM18.933 8.39C18.933 3.917 14.686 0 9.467 0 4.247 0 0 3.917 0 8.39c0 2.498 1.145 4.728 2.943 6.26a.62.62 0 0 1 .204.694l-.43 1.478c-.08.266.144.512.398.394l2.763-1.527a.65.65 0 0 1 .318-.08c.062 0 .123.01.18.03 1.07.295 2.221.457 3.418.457 5.22 0 9.466-3.917 9.466-8.39h-.327z" transform="translate(2.5 4)"/>
        </svg>
        微信
      </button>
      
      {/* 复制成功提示 */}
      {copied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded shadow-lg">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>已复制微信号</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-black"></div>
        </div>
      )}
    </div>
  );
} 