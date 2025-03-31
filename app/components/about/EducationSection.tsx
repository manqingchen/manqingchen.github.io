import React from 'react';

export default function EducationSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-6">教育背景</h2>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">计算机科学与技术</h3>
            <p className="text-gray-600 dark:text-gray-300">某知名大学</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              2014-2018
            </span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">主修课程</h4>
          <div className="flex flex-wrap gap-2">
            {['数据结构', '算法分析', '计算机网络', '操作系统', '数据库系统', '软件工程'].map(course => (
              <span key={course} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 