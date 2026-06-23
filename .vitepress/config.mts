import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DHASARATHAN.S",
  description: "Portfolio website for Dhasarathan.S - B.Sc Computer Science | Web Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '#about' },
      { text: 'Education', link: '#education' },
      { text: 'Skills', link: '#skills' },
      { text: 'Projects', link: '#projects' },
      { text: 'Certificates', link: '#certificates' },
      { text: 'Contact', link: '#contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gunal638360-alt' }
    ]
  }
})
