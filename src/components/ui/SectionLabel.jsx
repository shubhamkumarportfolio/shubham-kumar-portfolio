function SectionLabel({ children, className = '', ...props }) {
  const classes = ['section-label', className].filter(Boolean).join(' ')

  return (
    <p className={classes} {...props}>
      <span aria-hidden="true" className="section-label__mark" />
      {children}
    </p>
  )
}

export default SectionLabel
