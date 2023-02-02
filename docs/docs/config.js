export default [
  {
    text: 'User Guide',
    items: [
      { text: 'Introduction', link: '/docs/user-guide/introduction' },
      { text: 'Getting Started', link: '/docs/user-guide/getting-started' },
      { text: 'Concepts', link: '/docs/user-guide/concepts' },
      { text: 'Configuration', link: '/docs/user-guide/configuration' },
      { text: 'Observability', link: '/docs/user-guide/observability' }
    ]
  },
  {
    items: [
      { text: 'Source Types', link: '/docs/source-types' }
    ]
  },
  {
    items: [
      { text: 'Transforms', link: '/docs/transforms' }
    ]
  },
  {
    text: 'Examples',
    items: [
      {
        text: 'Redis Cluster',
        items: [
          { text: 'Unaware client', link: '/docs/examples/redis-clustering-unaware' },
          { text: 'Aware client', link: '/docs/examples/redis-clustering-aware' }
        ]
      },
      {
        text: 'Cassandra Cluster',
        items: [
          { text: 'Shotover sidecars', link: '/docs/examples/cassandra-cluster-shotover-sidecar' }
        ]
      }
    ]
  },
  {
    items: [
      { text: 'Contributing', link: '/docs/contributing' }
    ]
  }
]
