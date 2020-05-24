import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="lg:hidden py-8 px-4 text-right">
      <nav>
        <a href="#contacts" title="Contacts" className="underline">
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Header;
