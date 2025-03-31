"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type WechatContactEnhancedProps = {
  wechatId: string;
  qrCodeUrl?: string; // 二维码图片路径，可选
  className?: string;
};

export default function WechatContactEnhanced({ 
  wechatId, 
  qrCodeUrl, 
  className = "" 
}: WechatContactEnhancedProps) {
  const [copied, setCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  
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
    }
  };
  
  return (
    <div className="relative">
      <button 
        onClick={() => setShowQRCode(true)}
        className={`flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .186-.059l2.114-1.225a.636.636 0 0 1 .32-.093c.062 0 .124.01.181.03.943.243 1.963.376 3.023.376 4.801 0 8.691-3.289 8.691-7.342 0-4.053-3.89-7.343-8.691-7.343zm-.358 3.168c.512 0 .929.433.929.968 0 .535-.417.968-.929.968-.513 0-.929-.433-.929-.968 0-.535.416-.968.929-.968zm4.933 0c.513 0 .929.433.929.968 0 .535-.416.968-.929.968s-.929-.433-.929-.968c0-.535.417-.968.929-.968zM18.933 8.39C18.933 3.917 14.686 0 9.467 0 4.247 0 0 3.917 0 8.39c0 2.498 1.145 4.728 2.943 6.26a.62.62 0 0 1 .204.694l-.43 1.478c-.08.266.144.512.398.394l2.763-1.527a.65.65 0 0 1 .318-.08c.062 0 .123.01.18.03 1.07.295 2.221.457 3.418.457 5.22 0 9.466-3.917 9.466-8.39h-.327z" transform="translate(2.5 4)"/>
        </svg>
        微信
      </button>
      
      {/* 二维码弹窗 */}
      {showQRCode && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
          onClick={() => setShowQRCode(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">添加微信</h3>
              <button 
                onClick={() => setShowQRCode(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {qrCodeUrl ? (
              <div className="w-48 h-48 mx-auto mb-4 relative">
                <Image 
                  src={qrCodeUrl} 
                  alt="微信二维码" 
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
                <p className="text-center text-gray-500 dark:text-gray-400 px-4">
                  扫描二维码添加微信
                </p>
              </div>
            )}
            
            <div className="flex items-center justify-between border-t pt-4 mt-2">
              <p className="text-gray-600 dark:text-gray-300">
                微信号: <span className="font-medium">{wechatId}</span>
              </p>
              <button 
                onClick={copyToClipboard}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    已复制
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    复制
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 