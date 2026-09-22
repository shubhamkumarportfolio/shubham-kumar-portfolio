import { ArrowUpRight } from 'lucide-react'

function Button({ href, variant = 'primary', children, className = '', ...props }) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href} {...props}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  )
}

export default Button
