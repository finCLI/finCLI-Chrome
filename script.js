fetch('https://fincli-news-api.herokuapp.com/india/', {
  method: 'GET',
  // body: JSON.stringify(),
  cache: 'default',
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((data) => data.json())
  .then((newsData) => {
    console.log(newsData);
    const headline = newsData[0].news_headline;
    const newsLink = newsData[0].news_link;
    const publisher = newsData[0].news_publisher;

    const newsElement = document.getElementById('newsElement');

    newsElement.innerHTML = headline;
  })
  .catch((Error) => console.log(Error));
