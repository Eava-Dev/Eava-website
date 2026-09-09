"use client";
import { useEffect, useRef, type ReactNode } from "react";
export default function Reveal({ children }: {
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(!root.current || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const elements = Array.from(root.current.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 });
    elements.forEach(element => { element.classList.add('waiting'); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('waiting')); };
  }, []);
  return <div ref={root}>{children}</div>;
}
