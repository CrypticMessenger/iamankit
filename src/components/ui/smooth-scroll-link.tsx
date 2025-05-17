"use client";

import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link'; // Used for external links or actual page navigation
import { cn } from '@/lib/utils';

interface SmoothScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string; // Optional: for active link styling
  targetId?: string; // Optional: if href is different from targetId for scrolling
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  href, 
  children, 
  className, 
  activeClassName,
  targetId: customTargetId,
  ...props 
}) => {
  const isInternalPageLink = href.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalPageLink) {
      e.preventDefault();
      const actualTargetId = customTargetId || href.substring(1);
      const targetElement = document.getElementById(actualTargetId);
      
      if (targetElement) {
        const headerOffset = 80; // Adjust this value based on your sticky header's height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    // For external links or other Next.js Link navigations, default behavior is fine.
    // If onClick prop is provided, call it
    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (isInternalPageLink) {
    return (
      <a 
        href={href} 
        onClick={handleClick} 
        className={cn("transition-colors hover:text-primary", className)} // Basic styling
        {...props}
      >
        {children}
      </a>
    );
  }

  // For external links or actual file paths
  return (
    <Link 
      href={href} 
      className={cn("transition-colors hover:text-primary", className)} 
      {...props}
      legacyBehavior={false} // Recommended for modern Next.js
    >
      {children}
    </Link>
  );
};
