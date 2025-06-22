import React from 'react';

export default function SkillsSection() {
  const coreSkills = [
    'TypeScript',
    'React全家桶',
    'Nextjs',
    'ReactNative',
    'Taro',
    'Tailwindcss',
    'Monorepo',
    'Node',
    'Prisma',
    'MySQL'
  ];

  const web3Skills = {
    // ethereum: ['web3.js', 'ethers.js', 'wagmi'],
    // solana: [
    //   '@solana/web3.js',
    //   '@solana/wallet-adapter-base',
    //   '@solana/wallet-adapter-react',
    //   '@solana/wallet-adapter-react-ui'
    // ]
  };

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold border-b pb-1">技能</h2>
      
      <div className="space-y-4">
        {/* 核心技能 */}
        <div className="flex flex-wrap gap-1.5">
          {coreSkills.map((skill) => (
            <div 
              key={skill}
              className="bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded text-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Web3 技能 */}
        {/* <div className="flex flex-wrap gap-1.5">
          {Object.entries(web3Skills).map(([, packages]) =>
            packages.map((pkg) => (
              <div 
                key={pkg}
                className="bg-gray-50/70 dark:bg-gray-800/70 px-3 py-1 rounded text-sm font-mono text-xs"
              >
                {pkg}
              </div>
            ))
          )}
        </div> */}
      </div>
    </section>
  );
} 