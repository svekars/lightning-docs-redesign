import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>⚡ Lightning AI Studio docs</span>,
  docsRepositoryBase: 'https://github.com/svetlana-karslioglu/lightning-docs-redesign/tree/main',
  editLink: { component: null },
  feedback: { content: null },
  footer: {
    content: (
      <span>
        Take-home prototype. Not affiliated with Lightning AI.
      </span>
    )
  },
  primaryHue: 268,
  primarySaturation: 78,
  search: {
    placeholder: 'Search docs...'
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Proposed redesign of lightning.ai/docs" />
    </>
  ),
  useNextSeoProps() {
    return { titleTemplate: '%s – Lightning AI Studio docs' }
  }
}

export default config
