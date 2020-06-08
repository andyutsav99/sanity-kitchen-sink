export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede2765ec60bc8947ec7774',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vtg4w4f5',
                  apiId: '74b97f89-8872-4389-9c44-bf408b6bf4f7'
                },
                {
                  buildHookId: '5ede2765eefdb786f4a3fae1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k7dfjw2b',
                  apiId: 'c168e5cb-89d9-4774-b57b-f0ef90e4bb0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav99/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k7dfjw2b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
