// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
      
      // Events section
      S.listItem()
        .title('Events')
        .child(
          S.list()
            .title('Event Content')
            .items([
              S.documentTypeListItem('event').title('Events'),
            ])
        ),
      
      S.divider(),
      
      // All other document types not explicitly listed above
      ...S.documentTypeListItems().filter(
        (item) => 
          item.getId() && 
          !['post', 'category', 'author', 'event'].includes(item.getId()),
      ),
    ])
