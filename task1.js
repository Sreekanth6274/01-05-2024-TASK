let clickProducts = document.getElementById("button");

let clickProducts3 = document.querySelector("#products")

clickProducts.onclick = async () => {
    try {
        const clickProducts1 = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json",{method: `GET` });
       
        const result = await clickProducts1.json();
        const result1 = result.slice(46,200);
        console.log(result1)
        
        result1.forEach((elements,index) => {
            

        let htmlProducts = `
        <h1> Product Name : ${elements.name} ${index} </h1>
        <img height="300px" src=${elements.image_link} alt="image" />
        <h3 class='price'> Price :&#8377 ${elements.price}
        <h4> Category : ${elements.category === null ?"No category" : elements.category } </h4>
        <p> About: ${elements.description} </p> 
        <h3 class=${elements.rating <4.5 ? 'good' : 'bad' }> Rating : ${elements.rating = 4.5  } </h3>
        <hr/>
        `;
        clickProducts3.innerHTML += htmlProducts;

    });


    } catch (error) {
        console.log(error);
    }   
}

