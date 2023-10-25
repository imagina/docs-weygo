// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Weygo',
  tagline: 'Documentation about Weygo',
  favicon: 'img/logo_dark.png',

  // Set the production url of your site here
  url: 'https://imagina.github.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imagina', // Usually your GitHub org/user name.
  projectName: 'project-iadmin-framework-docs', // Usually your repo name.
  
  deploymentBranch:'gh-pages',
  trailingSlash:false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/imagina/project-iadmin-framework-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_dark_theme.png',
      navbar: {
        logo: {
          alt: 'Weygo Logo',
          src: 'img/logo_light_theme.png',
          srcDark: "img/logo_dark_theme.png",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'VueJsSidebar',
            position: 'left',
            label: 'VueJs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'LaravelSidebar',
            position: 'left',
            label: 'Laravel',
          },
          /*{
            type: 'docSidebar',
            sidebarId: 'N8NSidebar',
            position: 'left',
            label: 'N8N',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'VueJS',
                to: '/docs/VueJs/tutorials/intro',
              },
              {
                label: 'API | Laravel',
                to: '/docs/API/tutorial',
              },
              {
                label: 'Laravel',
                to: '/docs/VueJs/tutorials/intro',
              },
              {
                label: 'N8N',
                to: '/docs/VueJs/tutorials/intro',
              },
            ],
          },
          {
            title: 'Base Quasar',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/VueJs/tutorials/intro',
              },
              {
                label: 'Installation',
                to: '/docs/VueJs/installation/installinginaproject',
              },
              {
                label: 'Configurations',
                to: '/docs/VueJs/configurations/ConfigSrc',
              },
              {
                label: 'Modules',
                to: '/docs/VueJs/modules/intro',
              }
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/imaginacolombia?igshid=MzRlODBiNWFlZA==',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100090088891700&mibextid=ZbWKwL',
              },
              {
                label: 'X',
                href: 'https://twitter.com/imaginacolombia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/imagina/project-modules',
              },
              {
                label: 'Imagina Software',
                href: 'https://www.imaginacolombia.com/'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Imagina Software, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true
      }
    }),
};

module.exports = config;
