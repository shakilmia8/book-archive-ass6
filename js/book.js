const loadSearch = () => {
    const inputSearch = document.getElementById('input-search');
    const inputText = inputSearch.value;
    inputSearch.value = '';
    fetch(`https://openlibrary.org/search.json?q=${inputText}`)
        .then(res => res.json())
        .then(data => displayShow(data.docs));
};

const displayShow = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.textContent = '';
        div.innerHTML = `
        <h4>Book Name: ${doc.title}</h4>
        <h5>Book Author: ${doc.author_name ? doc.author_name : 'Not Available'}</h5>
        <p>First Publish Year: ${doc.first_publish_year ? doc.first_publish_year : 'Not Available'}</p>
        `;
        searchResult.appendChild(div);
    });
};