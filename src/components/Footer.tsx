import { Link } from 'react-router-dom'

const Logo = () => (
  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-5 text-primary">
    <g clipPath="url(#clip0_6_330_footer)">
      <path
        clipRule="evenodd"
        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_330_footer">
        <rect fill="white" height="48" width="48" />
      </clipPath>
    </defs>
  </svg>
)

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-solid border-gray-200/60 dark:border-white/10 pt-8 pb-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-5 text-primary">
            <Logo />
          </div>
          <Link to="/">
            <h2 className="text-base font-bold leading-tight tracking-[-0.015em]">Zeeniith</h2>
          </Link>
        </div>
        <div className="flex gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
        <p>© {new Date().getFullYear()} Zeeniith. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

