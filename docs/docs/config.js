export default [
  {
    text: 'User Guide',
    items: [
      { text: 'Introduction', link: '/docs/latest/user-guide/introduction' },
      { text: 'Getting Started', link: '/docs/latest/user-guide/getting-started' },
      { text: 'Concepts', link: '/docs/latest/user-guide/concepts' },
      { text: 'Configuration', link: '/docs/latest/user-guide/configuration' },
      { text: 'Observability', link: '/docs/latest/user-guide/observability' }
    ]
  },
  {
    items: [
      { text: 'Source Types', link: '/docs/latest/source-types' }
    ]
  },
  {
    items: [
      { text: 'Transforms', link: '/docs/latest/transforms' }
    ]
  },
  {
    text: 'Examples',
    items: [
      {
        text: 'Redis Cluster',
        items: [
          { text: 'Unaware client', link: '/docs/latest/examples/redis-clustering-unaware' },
          { text: 'Aware client', link: '/docs/latest/examples/redis-clustering-aware' }
        ]
      },
      {
        text: 'Cassandra Cluster',
        items: [
          { text: 'Shotover sidecars', link: '/docs/latest/examples/cassandra-cluster-shotover-sidecar' }
        ]
      }
    ]
  },
  {
    items: [
      { text: 'Contributing', link: '/docs/latest/contributing' }
    ]
  }
]
