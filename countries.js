//Getting Countries
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const countriesCont = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country','border','border-danger','rounded','gap-2');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>    
        <p class="">Capital: ${country.capital ? country.capital[0]:'No Capital'} </p>    
        <Button onclick="loadCountryDetails('${country.cca2}')" class="btn btn-primary">Details</Button>
        `;
        countriesCont.appendChild(countryDiv);
    })
}
loadCountries();

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country =>{
    console.log(country);
    const countryDetailsContainer = document.getElementById('details-container');
    countryDetailsContainer.innerHTML =`
    <div class="card" style="width: 18rem;">
     <img src="${country.flags.png}" class="card-img-top" alt="Flag">
     <div class="card-body">
      <h4>Country Name: ${country.name.common}</h4>
      <p class="">Capital: ${country.capital ? country.capital[0]:'No Capital'} </p>
     </div>
    </div>
    `;
}