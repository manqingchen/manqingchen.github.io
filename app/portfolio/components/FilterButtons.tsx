"use client";

import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';

export default function FilterButtons({ tags, onFilterChange }: { tags: string[], onFilterChange: (tag: string) => void }) {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    onFilterChange(tag);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button 
        variant={activeFilter === 'all' ? 'primary' : 'outline'}
        onClick={() => handleFilterClick('all')}
      >
        全部
      </Button>
      {tags.map(tag => (
        <Button
          key={tag}
          variant={activeFilter === tag ? 'primary' : 'outline'}
          onClick={() => handleFilterClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
} 