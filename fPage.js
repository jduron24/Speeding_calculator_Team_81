fetch('fPage.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    // if(document.getElementById("data") != null){
    //     var idPost=document.getElementById("data").innerHTML;
    // }
    .catch(function (err) {
        console.log('error:' + err);
    });

// use this in the html
//<script src="./index.js">  //links the js to the html. the js is where you'll write most of the code </script>

function appendData(data) {
    let mainContainer = document.getElementById('myData'); // is it because of this line? I think it's because this line returns null
    //let testInt = 1;

    data.forEach((result) => {
        const card = document.createElement('div');
        card.classList = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";
        const content = 
        `
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="${result.url}"
                  alt="${result.description}"
                />
                <div class="card-body">
                  <h4>${result.description}</h4>
                  <p class="card-text">
                    ${result.description}
                  </p>
                  <p class="card-text">
                    ${result.price}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick=""
                      >
                        View
                      </button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>
        `;
        mainContainer.innerHTML += content;
    })
}
