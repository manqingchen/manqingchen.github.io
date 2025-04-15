import React from 'react';

export default function ProfileSectionZh() {
  return (
    <section className="mb-10">
      <div className="space-y-6">
        {/* 基本信息 */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">张铂晗</h1>
          </div>
          <div className="flex flex-col items-end text-gray-600 dark:text-gray-300">
            <a 
              href="mailto:noscanxing1995@gmail.com" 
              className="hover:text-blue-500 transition-colors"
            >
              noscanxing1995@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
} 