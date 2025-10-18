import React, { forwardRef } from 'react';

// FIX: Extend React.HTMLAttributes<HTMLElement> to allow passing standard HTML attributes like `style`.
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

// FIX: Correctly type the ref to HTMLElement for a <section> element and spread remaining props.
const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className = '', ...props }, ref) => {
  return (
    <section ref={ref} id={id} className={`py-16 md:py-24 ${className}`} {...props}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
});

export default Section;
