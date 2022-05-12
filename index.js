console.log("hello world")

  // ...
document.getElementById("products") 

  fetch("https://627cbf82bf2deb7174e02fdf.mockapi.io/api/v1/shoes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let products = data;

      products.map(function(products) {
        let li = document.createElement('li');
        let title = document.createElement('h3');
        let description = document.createElement('p');
        let  image = document.createElement('img');
        
        title.innerHTML = `${products.title}`;
        description.innerHTML = `${products.description}`;
        
        
        li.appendChild(description);
        li.appendChild(title);
        list.appendChild(li);
      });
    })
