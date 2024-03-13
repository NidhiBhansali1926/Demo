declare module '*.svg' {
  import React from 'react';
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
