
// data search function
loadSearch = () => {

    // search input
    const inputSearch = document.getElementById('input-search');
    const inputText = inputSearch.value;
    inputSearch.value = '';

    // condition
    if (inputText === -1) {

    }
    else {

        // spinner style with js
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';

        // dynamic search link with fetch & json
        fetch(`https://openlibrary.org/search.json?q=${inputText}`)
            .then(res => res.json())

            // called function
            .then(data => displayShow(data.docs.slice(0, 24)));
    }
};


// data result show function
displayShow = docs => {

    // book result count
    const restultCount = document.getElementById('result-count');
    restultCount.innerHTML = `
    <h2 class= "text-danger text-center my-3">Book's Result Found For Display: ${docs.length}</h2>
    `;

    // display show result
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    // used forEach
    docs.forEach(doc => {

        // create div tag
        const div = document.createElement('div');
        div.textContent = '';

        // class added
        div.classList.add('col');

        // create img dynamic link
        const url = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;

        // set display book card
        div.innerHTML = `
        <div class="card h-100">
            <img src="${url}" class="card-img-top" alt="">
            <div class="card-body">
                <h4>Book Name: ${doc.title}</h4>
                <h5>Book Author: ${doc.author_name ? doc.author_name : 'Not Available'}</h5>
                <p>First Publish Year: ${doc.first_publish_year ? doc.first_publish_year : 'Not Available'}</p>
                <p>Publisher: ${doc.publisher}</p>
            </div>
        </div>
        `;

        // added node child in parentchild
        searchResult.appendChild(div);

        // spinner style with js
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
    });

    // spinner style with js
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
};
