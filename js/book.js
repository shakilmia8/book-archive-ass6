const loadSearch = () => {
    const inputSearch = document.getElementById('input-search');
    const inputText = inputSearch.value;
    inputSearch.value = '';
    if (inputText === -1) {
        // const resultNotFound = document.getElementById('result-not-found');
        // resultNotFound.innerHTML = `<h1>Result Not Found</h1>`;
    }
    else {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
        const resultNotFound = document.getElementById('result-not-found');
        resultNotFound.textContent = '';
        fetch(`https://openlibrary.org/search.json?q=${inputText}`)
            .then(res => res.json())
            .then(data => displayShow(data.docs));
    }
};

const displayShow = docs => {
    const restultCount = document.getElementById('result-count');
    restultCount.innerHTML = `
    <h2 class= "text-danger">Book Count Number: ${docs.length}</h2>
    `;

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.textContent = '';
        const url = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
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
        searchResult.appendChild(div);
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
    });
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
};