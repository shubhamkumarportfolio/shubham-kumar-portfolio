const footerNavigation = [
  { label: 'Work', href: '#selected-work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const footerLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubham-kumar-17b172283',
    external: true,
  },
  { label: 'Email', href: 'mailto:Shubham0147@gmail.com' },
  {
    label: 'Résumé',
    href: '/Shubham_Premium_Graphic_Designer_Resume.pdf',
    external: true,
  },
]

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="site-footer__name">SHUBHAM KUMAR</p>
            <p className="site-footer__role">Brand &amp; Marketing Visual Designer</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <ul>
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__external" aria-label="External links">
            <ul>
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    {item.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__bottom">
          <p className="site-footer__tagline">
            Clarity in brand, product and communication.
          </p>

          <div className="site-footer__legal">
            <p>© 2026 Shubham Kumar. All rights reserved.</p>
            <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
