import { ref } from 'vue'

import Posts from '../blog/config'
import DocsSidebar from '../docs/config'

export default {
  lang: 'en-US',
  title: 'Shotover',
  description: 'Shotover Description',
  base: '/shotover-blog/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/shotover-blog/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    markdown: {
      lineNumbers: false
    },

    nav: [
      { text: 'Docs', link: '/docs/user-guide/introduction' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Github', link: 'https://github.com/shotover/shotover-proxy' },
      { text: 'Contacts', link: '/contacts' }
    ],

    blog: {
      title: 'Welcome to our blog!',

      categories: ['how-to', 'opinion', 'updates', 'uncategorized'],

      posts: Posts,

      images: {
        arrowLeft: ref('/blog/arrowLeft.png'),
        arrowRight: ref('/blog/arrowRight.png'),
      }
    },

    social: {
      title: 'Share this article',

      copyImg: '/social/link.png',
      links: [
        {
          img: ref('/social/twitter.png'),
          url: '#'
        },
        {
          img: ref('/social/linkedin.png'),
          url: '#'
        },
        {
          img: ref('/social/rss_shape.png'),
          url: '#'
        }
      ]
    },

    relatedPosts: {
      title: 'Related posts',
      postsCount: 3,
      allBlogsLink: '/blog/'
    },

    sidebar: DocsSidebar
  },

  pagesConfig: {
    landing: {
      title: 'Shotover',
      titleImg: ref('/landing/title_image.png'),
      subtitle1: 'Proxy server.',
      subtitle2: 'Making your life easier.',
      motto: 'Controlling. Managing. Modyfiying.',
      actionBtnText: 'Get started',
      actionBtnLink: '/docs/user-guide/getting-started',

      description: {
        title: 'What is Shotover?',
        text: 'Shotover is a high performance, configurable and extensible L7 data-layer proxy for controlling, managing and modifying the flow of database requests in transit. It can be used to solve many different operational and interoperability challenges by transparently intercepting and transforming queries. It is transparent in the sense that it can be plugged into your architecture without requiring application change.'
      },

      documentation: {
        title: 'Get acquainted with our <span class="c-brand">documentation</span>',
        items: [
          {
            name: 'Introduction',
            description: 'For more information on what Shotover Proxy is, why it exists and some of the underlying philosophies behind it.',
            link: '/docs/user-guide/introduction'
          },
          {
            name: 'Getting started',
            description: 'For details on how to jump straight in and get up running.',
            link: '/docs/user-guide/getting-started'
          },
          {
            name: 'Concepts',
            description: 'For a deeper dive into some of the fundamental Shotover concepts.',
            link: '/docs/user-guide/concepts'
          }
        ]
      },

      problemsSection: {
        title: 'What <span class="c-brand-light">problems</span> does Shotover solve?',
        description1: 'More broadly, Shotover is designed to be used for a very wide ranging class of problems where it is useful to transparently intercept a database call and redirect it. This allows you to change the behaviour of running applications at the infrastructure level without change to the application code itself. Some examples where we envisage Shotover could be deployed include:',
        description2: 'Of course, Shotover is designed to be configurable and extensible so use your imagination and let us know what uses you find!',
        items: [
          {
            description: 'Moving very large or very hot tenants/customers/keys  to a separate data store by intercepting and redirecting queries for those particular keys',
            color: '#2355CB',
            image: ''
          },
          {
            description: 'Dual writing and/or query translation to allow the underlying storage technology to be changed ',
            color: '#56BCED',
            image: ref('/landing/image1.png')
          },
          {
            description: 'Adding auditing, encryption or other security measures',
            color: '#88d9ff',
            image: ref('/landing/image2.png')
          },
          {
            description: 'As an alternative to Change Data Capture technology to send writes to a message stream such as Apache Kafka',
            color: '#91AAE5',
            image: ''
          }
        ]
      },

      deploying: {
        title: 'Deploying Shotover',
        description: 'Shotover can be deployed in a number of ways, it will generally be based on the problem you are trying to solve, but they all fall into three categories:',
        steps: [
          {
            name: 'Application sidecar',
            image: ref('/landing/deploy1.png'),
            description: 'Shotover is pretty lightweight, so feel free to deploy it as a sidecar to each of your application instances.'
          },
          {
            name: 'Stand alone proxy',
            image: ref('/landing/deploy2.png'),
            description: 'If you are building a Service/DBaaS/Common data layer, you can deploy Shotover on standalone hardware and really let it fly.'
          },
          {
            name: 'Sidecar to your database',
            image: ref('/landing/deploy3.png'),
            description: 'You can also stick Shotover on the same instance/server as your database is running on, we do it, so we won\'t judge you.'
          }
        ]
      },

      roadmap: {
        title: 'Roadmap',
        items: [
          {
            text: 'Support relevant xDS APIs (so Shotover can play nicely with service mesh implementations)',
            linePosition: 'bottom',
            height: 150,
            top: 134,
            left: 130
          },
          {
            text: 'Support hot-reloads and a dynamic configuration API.',
            linePosition: 'bottom',
            height: 130,
            top: 260,
            left: 460
          },
          {
            text: 'Additional sources (DynamoDB and PostgreSQL are good first candidates).',
            linePosition: 'bottom',
            height: 140,
            top: 75,
            left: 790
          },
          {
            text: 'Add support for rate limiting, explicit back-pressure mechanisms, etc.',
            linePosition: 'bottom',
            height: 100,
            top: 225,
            left: 1100
          },
          {
            text: 'Additional Distributed algorithm transform primitives (e.g RAFT, 2PC, etc).',
            linePosition: 'bottom',
            height: 140,
            top: 40,
            left: 1430
          },
          {
            text: 'Additional sink transforms (these generally get implemented alongside sources).',
            linePosition: 'top',
            height: 165,
            top: 233,
            left: 1600
          },
          {
            text: 'Support user-defined / generated sources (e.g. thrift or a gRPC service from a proto definition).',
            linePosition: 'bottom',
            height: 90,
            top: 208,
            left: 1860
          },
          {
            text: 'Simulation testing once tokio-rs/simulation reaches compatibility with tokio-2.0',
            linePosition: 'bottom',
            height: 100,
            top: 28,
            left: 2220
          },
          {
            text: 'Zero-copy pass-through transforms and in-place query editing (performance).',
            linePosition: 'top',
            height: 165,
            top: 215,
            left: 2415
          }
        ]
      },

      name: {
        title: 'Name',
        image: ref('/landing/river.png'),
        description: 'Shotover refers to the Shotover (Kimi-ākau) river in Otago, New Zealand - close to Queenstown and eventually flowing into Lake Wakatipu via the Kawarau River, it\'s famous for white water rafting, bungy-jumping, fast rapids and jet boating.'
      }
    },

    contacts: {
      image: ref('/contacts.png'),
      imageMsg: 'For general questions ask a member of our team, who will be happy to help!',

      enquiries: [
        {
          name: 'General enquiries:',
          email: 'enquiries@shotover.io'
        },
        {
          name: 'Recruitment enquiries:',
          email: 'recruitment@shotover.io'
        }
      ],

      adress: {
        company: 'Shotover',
        city: 'Christchurch',
        country: 'New Zealand'
      }
    }
  },

  footerConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/shotover/shotover-proxy' },
      { text: 'Introduction', link: '/docs/user-guide/introduction' },
      { text: 'Concepts', link: '/docs/user-guide/concepts' },
      { text: 'Roadmap', link: '/#roadmap' },
      { text: 'Contacts', link: '/contacts' }
    ],

    copyrightMessages: {
      m1: 'Copyright © Shotover Ltd 2022. All rights reserved.',
      m2: 'Copyright Shotover Ltd. Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority (Financial Services Register number: 754568). Registered Address: ClearBank, Borough Yards, 13 Dirty Lane, London, SE1 9PA.',
      m3: 'Shotover® provides customers with a Definitive Services Agreement, which covers the provision of indirect access services. Code of Conduct for Indirect Access Providers.'
    }
  }
}
