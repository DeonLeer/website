import React, { FC } from 'react'

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const ExternalLink: FC<ExternalLinkProps> = ({ href, children, ...rest }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export default ExternalLink