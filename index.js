console.log("hello world")
<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let title = document.createElement('h3');
        let description = document.createElement('p');
        let  image = document.createElement('img');
      });
    })
<script>