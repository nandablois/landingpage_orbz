import React, {type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  center?: boolean;
  textColor?: string;
  bg?: string;
  paddingY?: string;
  overflow?: string;
  className?: string;
  id?:string;
}

const Section: React.FC<SectionProps> = ({
  children,
  center = false,
  textColor = 'text-very-dark-blue-purple',
  bg = '',
  paddingY = 'py-10 md:py-32 lg:py-40',
  overflow = '',
  className = '',
  id =''
}) => {
  return (
    <section
      id={id} className={`flex flex-col ${center ? 'items-center justify-center text-center' : ''} px-6 ${paddingY} ${textColor} ${bg} ${overflow} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
