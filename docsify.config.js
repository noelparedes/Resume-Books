module.exports = {
  main: {
    name: 'Book summaries',
    basePath: 'https://github.com/noelparedes/book-summaries/tree/main/docs',
    repo: 'https://github.com/noelparedes/book-summaries',
    loadSidebar: true,
    alias: { '/.*/_sidebar.md': '/_sidebar.md' },
    subMaxLevel: 3,
    sidebarDisplayLevel: 1,
    search: 'auto',
  },
};
