fetch('https://fincli-news-api.herokuapp.com/india', {
  method: 'GET',
  cache: 'default',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET',
  // },
})
  .then((data) => data.json())
  .then((newsData) => {
    // console.log(newsData);
    const headline = newsData[0].news_headline;
    const newsLink = newsData[0].news_link;
    const publisher = newsData[0].news_publisher;

    const publisherElement = document.getElementById('publisherElement');
    publisherElement.innerHTML = publisher;

    const headlineElement = document.getElementById('headlineElement');
    headlineElement.innerHTML = headline;
    headlineElement.setAttribute('href', newsLink);

    document.getElementById('newsIDElement').innerHTML =
      newsData[0].id + 1 + '. ';

    // adding further news headlines

    var len = newsData.length;
    console.log(len);

    len = Math.min(len, 5);

    for (var i = 1; i < len; i++) {
      let newsBlock = document.createElement('div');
      let np = document.createElement('h3');
      let node = document.createTextNode(newsData[i].news_publisher);
      np.appendChild(node);
      np.classList.add('finCLI-Chrome-Publisher');

      let nh = document.createElement('a');
      let nh_text = document.createTextNode(
        newsData[i].id + 1 + '. ' + newsData[i].news_headline
      );
      nh.classList.add('finCLI-Chrome-Headline');
      let nh_link = newsData[i].news_link;
      // console.log(typeof nh_link)
      nh.href = nh_link;

      nh.appendChild(nh_text);
      newsBlock.append(np);
      newsBlock.append(nh);

      let element = document.getElementById('IN-News');
      element.appendChild(newsBlock);
    }
  })
  .catch((Error) => console.log(Error));
