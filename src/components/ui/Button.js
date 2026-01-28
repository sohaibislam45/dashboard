export function Button({ className = '', variant = 'primary', size = 'md', ...props }) {
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm shadow-brand-blue/20',
    secondary: 'bg-surface text-text-primary border border-border-subtle hover:bg-surface-hover',
    outline: 'bg-transparent text-text-primary border border-brand-blue hover:bg-brand-blue/10',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover',
    danger: 'bg-brand-red text-white hover:bg-brand-red/90 shadow-sm shadow-brand-red/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-medium',
    md: 'px-4 py-2 text-sm font-medium',
    lg: 'px-6 py-3 text-base font-semibold',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    />
  );
}
