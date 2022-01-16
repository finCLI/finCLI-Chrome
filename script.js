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
    console.log(newsData);
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

    // for (var i = 1; i < len; i++) {
    // const divEnclosingNews = document.createElement("div")
    const newsBlock = document.createElement('div');
    const np = document.createElement('h3');
    const node = document.createTextNode(newsData[1].news_publisher);
    np.appendChild(node);

    const nh = document.createElement('a');
    const nh_text = document.createTextNode(newsData[1].news_headline);
    const nh_link = document.createTextNode(newsData[1].news_link);
    // nh.setAttribute("href", nh_link);
    nh.href = nh_link;

    nh.appendChild(nh_text);
    newsBlock.append(np);
    newsBlock.append(nh);

    // var h = newsData[1].news_headline;
    // console.log(typeof h);

    // const nh_text = document.createTextNode(h);
    // newsBlock.appendChild(nh_text);
    const element = document.getElementById('IN-News');
    element.appendChild(newsBlock);
    // }
  })
  .catch((Error) => console.log(Error));
