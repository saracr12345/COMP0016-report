import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BabylonStudion - Team 24',
  tagline: 'Babylon.js GPU Shader and ReShade API exploration',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        // Remove the blog plugin
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BabylonSudio Team 24',
      logo: {
        alt: 'BabylonStudio Logo',
        src: 'img/babylonstudio-logo.png',
      },
      items: [
        {
          to: '/docs/requirements', // direct link
          position: 'left',
          label: 'Requirements',
        },          
        {
          to: '/docs/hci', // Direct link to HCI page
          position: 'left',
          label: 'HCI',
        },
        {
          to: '/docs/research',
          position: 'left',
          label: 'Research',
        },
        {
          to: 'docs/algorithms',
          position: 'left',
          label: 'Algorithms',
        },
        {
          to: 'docs/uidesign',
          position: 'left',
          label: 'UI Design',
        }, 
        {
          to: 'docs/systemdesign',
          position: 'left',
          label: 'System Design',
        },
        {
          to: 'docs/implementation',
          position: 'left',
          label: 'Implementation',
        },
        {
        to: 'docs/testing',
        position: 'left',
        label: 'Testing',
        },
        {
          to: 'docs/evaluation',
          position: 'left',
          label: 'Evaluation',
        },                 
        {
          label: 'Blog',
          href: 'https://ritzy-cabbage-d26.notion.site/Blogs-1a637ba107ab805586dae48485960dc8?pvs=4', // Replace with Notion URL
          position: 'left',
        },
        {
          href: 'https://github.com/saracr12345/COMP0016-report.git', //add notion web for appendices
          label: 'Appendices',
          position: 'left',
        },
      ],
    },footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://ritzy-cabbage-d26.notion.site/Blogs-1a637ba107ab805586dae48485960dc8?pvs=4', // Replace with your Notion URL
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
