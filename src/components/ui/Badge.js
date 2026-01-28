export function Badge({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-surface border-border-subtle text-text-secondary',
    success: 'bg-brand-green/10 border-brand-green/20 text-brand-green',
    warning: 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange',
    danger: 'bg-brand-red/10 border-brand-red/20 text-brand-red',
    info: 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue',
    purple: 'bg-brand-pink/10 border-brand-pink/20 text-brand-pink',
  };

  const baseClasses = 'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wider';
  const variantClasses = variants[variant] || variants.default;

  return (
    <span
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
