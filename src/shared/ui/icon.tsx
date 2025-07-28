// import { DynamicIcon } from 'lucide-react/dynamic';
import React from 'react';
import * as icons from 'lucide-react';
import { IconsNameType } from '@/types';

type IconType = {
  name: IconsNameType;
  className?: string;
};

export default function IconBox({
  name,
  className = 'h-4 w-4',
  ...props
}: IconType) {
  const IconComponent = icons[name] as React.ComponentType<icons.LucideProps>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent className={className} {...props} />;
}
