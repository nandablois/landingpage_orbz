import React, { type ReactNode } from 'react';

interface ContainerRowProps {
  children: ReactNode;
  gap?: string;           
  paddingX?: string;     
  paddingLeft?: string;  
  paddingRight?: string;  
  alignItems?: string;    
  className?: string;
}

const ContainerRow: React.FC<ContainerRowProps> = ({
  children,
  gap = 'gap-8',
  paddingX = 'px-4 md:px-0',
  paddingLeft = '',
  paddingRight = '',
  alignItems = '',
  className = '',
}) => {
  return (
    <div className={`container mx-auto flex flex-col md:flex-row justify-between ${alignItems} ${gap} ${paddingX} ${paddingLeft} ${paddingRight} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerRow;
