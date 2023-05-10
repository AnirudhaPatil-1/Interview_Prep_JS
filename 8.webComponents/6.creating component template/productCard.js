const template = document.createElement('template');
template.innerHTML = `
    <style>
    img{
        width: 200px;
        height: 200px;
        margin: 20%;
        margin-bottom: 5%;
    }
    .card{
        margin-right: 35px;
        display: inline-block;
        width: 300px;
        height: 440px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .container{
        padding: 2px 16px;
    }
    .btn{
        width: 100%;
        padding: 10px;
        margin-top: 2%;
        margin-bottom: 8%;
        background-color: rgb(40, 140, 255);
        color: rgb(255, 255, 255);
        border: none;
    }
    </style>
        <div class="card">
        <img src="https://www.freepnglogos.com/uploads/apple-png/vector-graphic-apple-fruit-nature-red-juicy-36.png">
        <div class="container">
            <h3>Product Name (eg. Apple, $40)</h3>
            <p id="">status(eg. sold or not)</p>
            <button  class="btn">Buy</button>
        </div>
    </div>
`;

class ProductCard extends HTMLElement{
    constructor(){
        super();
        const clone = template.content.cloneNode(true); //true for deep copy
        this.attachShadow({mode:"open"}); //open for access to shadow DOM
        this.shadowRoot.appendChild(clone);
    }
}

window.customElements.define("product-card", ProductCard);

