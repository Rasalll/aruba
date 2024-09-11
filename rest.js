const res=fetch("https://restcountries.com/v3.1/name/aruba?fullText=true")
cnty=''
res.then(resolve=>{
    return resolve.json()
}).then(resolve=>{
    resolve.forEach(item => {
        cnty+=`
         <div class="card mb-5 shadow"style="width: 18rem;">
  <img src=${item.flags?.png} height="300px"class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${item.name.common}</h5>
    <h5>Polulation: ${item.population}</h5>
    <h5 class="card-title">Capital: ${item?.capital}</h5>
    
  </div>
</div>
        `
    });
    details.innerHTML=cnty
})

