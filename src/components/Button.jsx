import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'navy' | 'whatsapp' | 'outline' | 'outline-gold'
  size = 'md', // 'sm' | 'md' | 'lg'
  block = false,
  icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn-${size}` : '',
    block ? 'btn-block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  // If internal route
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  // If external link
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    const safeTarget = target || (isExternal ? '_blank' : undefined);
    const safeRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

    return (
      <a href={href} className={classes} target={safeTarget} rel={safeRel} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}
