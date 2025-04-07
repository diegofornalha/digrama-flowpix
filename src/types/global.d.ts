// Declarações de tipos para módulos sem definições de tipos
declare module 'react' {
  export * from 'react';
}

declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
} 