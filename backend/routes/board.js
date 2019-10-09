const router = require('express').Router()

router.get('/programming', (req, res) => {
  const posts = [
    {
      title: 'React',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium sem ut eros finibus, id facilisis lorem maximus. Vestibulum aliquet diam velit, sollicitudin molestie mauris blandit id. Suspendisse tempor vulputate neque ut consequat. Etiam ac tempor justo, vitae eleifend tortor. Pellentesque non odio vel nisi porta aliquam a sed nisi. Vestibulum suscipit a lacus sit amet ultrices. Aenean porttitor orci auctor pretium sodales. In semper elementum aliquet. Ut sed augue at lacus elementum dignissim ac quis eros. Ut in turpis tincidunt, consectetur est ac, interdum diam. Maecenas vitae eros nec nisl vulputate vehicula vel quis nunc.',
      author: 'viveloper',
      category: 'programming',
      views: '2',
      recommendation: '1',
      updateTime: '2019-10-03 15:10:35',
      key: 3
    },
    {
      title: 'Express - Node.js',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium sem ut eros finibus, id facilisis lorem maximus. Vestibulum aliquet diam velit, sollicitudin molestie mauris blandit id. Suspendisse tempor vulputate neque ut consequat. Etiam ac tempor justo, vitae eleifend tortor. Pellentesque non odio vel nisi porta aliquam a sed nisi. Vestibulum suscipit a lacus sit amet ultrices. Aenean porttitor orci auctor pretium sodales. In semper elementum aliquet. Ut sed augue at lacus elementum dignissim ac quis eros. Ut in turpis tincidunt, consectetur est ac, interdum diam. Maecenas vitae eros nec nisl vulputate vehicula vel quis nunc.',
      author: 'casio',
      category: 'programming',
      views: '3',
      recommendation: '2',
      updateTime: '2019-10-02 16:08:15',
      key: 2
    },
    {
      title: 'Node.js',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium sem ut eros finibus, id facilisis lorem maximus. Vestibulum aliquet diam velit, sollicitudin molestie mauris blandit id. Suspendisse tempor vulputate neque ut consequat. Etiam ac tempor justo, vitae eleifend tortor. Pellentesque non odio vel nisi porta aliquam a sed nisi. Vestibulum suscipit a lacus sit amet ultrices. Aenean porttitor orci auctor pretium sodales. In semper elementum aliquet. Ut sed augue at lacus elementum dignissim ac quis eros. Ut in turpis tincidunt, consectetur est ac, interdum diam. Maecenas vitae eros nec nisl vulputate vehicula vel quis nunc.',
      author: 'casio',
      category: 'programming',
      views: '5',
      recommendation: '3',
      updateTime: '2019-10-01 10:18:19',
      key: 1
    }
  ]
  res.json(posts);
})

module.exports = router;