const posts = [
  {
    id: 0,
    title: 'Hello World',
    link: '/blogs/hello-world'
  },
  {
    id: 1,
    title: 'Hello World',
    link: '/blogs/hello-world'
  },
  {
    id: 2,
    title: 'Hello World',
    link: '/blogs/hello-world'
  },
  {
    id: 3,
    title: 'Hello World',
    link: '/blogs/hello-world'
  }
];

const favoriteButtons = document.querySelectorAll('.blog-favorite');

const loadFavoritePosts = () => {
  const favoritePosts = JSON.parse(
    localStorage.getItem('favoritePosts') || '[]'
  );

  const postsId = favoritePosts.map(post => post.id);

  for (const button of favoriteButtons) {
    if (postsId.includes(+button.dataset.id)) {
      button.classList.add('blog-favorite-clicked');
    }
  }
};

loadFavoritePosts();

for (const button of favoriteButtons) {
  button.addEventListener('click', () => {
    if (button.classList.contains('blog-favorite-clicked')) {
      const favoritePosts = JSON.parse(
        localStorage.getItem('favoritePosts') || '[]'
      );

      localStorage.setItem(
        'favoritePosts',
        JSON.stringify(
          favoritePosts.filter(post => post.id !== +button.dataset.id)
        )
      );

      button.classList.remove('blog-favorite-clicked');
      return;
    }

    const post = posts.find(post => post.id === +button.dataset.id);

    const favoritePosts =
      JSON.parse(localStorage.getItem('favoritePosts')) || [];

    localStorage.setItem(
      'favoritePosts',
      JSON.stringify([...favoritePosts, post])
    );

    button.classList.add('blog-favorite-clicked');
  });
}
