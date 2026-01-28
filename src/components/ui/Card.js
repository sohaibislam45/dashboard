export function Card({ className = '', children, padding = true, ...props }) {
  const baseClasses = 'bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-sm transition-all duration-300';
  const paddingClass = padding ? 'p-6' : '';

  return (
    <div
      className={`${baseClasses} ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children, ...props }) {
  return (
    <h3
      className={`text-lg font-semibold text-text-primary mb-2 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className = '', children, ...props }) {
  return (
    <p
      className={`text-sm text-text-secondary ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
