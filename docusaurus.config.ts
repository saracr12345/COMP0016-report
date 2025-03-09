import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BabylonStudio - Team 24',
  tagline: 'Babylon.js GPU Shader and ReShade API exploration',
  favicon: 'img/favicon.png',

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
    },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                  <div style="text-align: center; margin-bottom: 1rem; color: #fff;">
                    <a href="/docs/requirements" style="color: #fff; text-decoration: none;">Requirements</a> ·
                    <a href="/docs/hci" style="color: #fff; text-decoration: none;">HCI</a> ·
                    <a href="/docs/research" style="color: #fff; text-decoration: none;">Research</a> ·
                    <a href="/docs/algorithms" style="color: #fff; text-decoration: none;">Algorithms</a> ·
                    <a href="/docs/uidesign" style="color: #fff; text-decoration: none;">UI Design</a> ·
                    <a href="/docs/systemdesign" style="color: #fff; text-decoration: none;">System Design</a> ·
                    <a href="/docs/implementation" style="color: #fff; text-decoration: none;">Implementation</a> ·
                    <a href="/docs/testing" style="color: #fff; text-decoration: none;">Testing</a> ·
                    <a href="/docs/evaluation" style="color: #fff; text-decoration: none;">Evaluation</a> ·
                    <a href="https://ritzy-cabbage-d26.notion.site/Blogs-1a637ba107ab805586dae48485960dc8?pvs=4" 
                       target="_blank" 
                       rel="noopener" 
                       style="color: #fff; text-decoration: none;">
                      Blog
                    </a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `
          Copyright © ${new Date().getFullYear()}
          BabylonStudio Team 24
        `,
      },
      
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
