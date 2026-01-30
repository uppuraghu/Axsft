"use client";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-slate-800 bg-slate-900/50 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
