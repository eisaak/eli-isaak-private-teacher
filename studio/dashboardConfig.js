export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e53a7a3749954e3f79596c2',
                  title: 'Sanity Studio',
                  name: 'eli-isaak-private-teacher-studio',
                  apiId: '2f45c2ed-b702-4767-ac91-8b42d7dc03d0'
                },
                {
                  buildHookId: '5e53a7a38b84691485037ae4',
                  title: 'Landing pages Website',
                  name: 'eli-isaak-private-teacher',
                  apiId: 'f6b1fec9-4e01-4da3-80d3-929325369b04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eisaak/eli-isaak-private-teacher',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eli-isaak-private-teacher.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
