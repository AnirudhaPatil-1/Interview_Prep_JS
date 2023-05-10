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
        width: 70%;
        padding: 10px;
        margin-top: 2%;
        margin-bottom: 8%;
        background-color: rgb(40, 140, 255);
        color: rgb(255, 255, 255);
        border: none;
    }
    #trash{
        width: 25%;
    }
    </style>
        <div class="card">
        <img src="">
        <div class="container">
            <h3>Product Name (eg. Apple, $40)</h3>
            <p id="">status(eg. sold or not)</p>
            <button  class="btn">Buy</button>
            <button class="btn" id = "trash"><i class=fa fa-trash-o" id = "icon"></i> Trash</button>
        </div>
    </div>
`;

class ProductCard extends HTMLElement{
    constructor(){
        super();
        const clone = template.content.cloneNode(true); //true for deep copy
        this.attachShadow({mode:"open"}); //open for access to shadow DOM
        this.shadowRoot.appendChild(clone);
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('pName') + ", " + this.getAttribute('price');
        this.shadowRoot.querySelector('img').src = this.getAttribute('pImg');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('pStatus');
    }
    connectedCallback(){
        // console.log("method called!");
        this.shadowRoot.querySelector('button').onclick = () => {
            // console.log("button clicked");
            // this.shadowRoot.querySelector('p').innerText = "Sold"; //wrong way - as the attribute stays the same
            // this.setAttribute('pStatus','Sold'); //status is change but we need to render the change
            //Better code -> use setter method
            this.pStatus = "Sold";
            }
        this.shadowRoot.getElementById("trash").addEventListener('click', () => {
            this.remove();
        })
    }
    set pStatus(val){
        this.setAttribute('pStatus', val);
    }
    static get observedAttributes(){
        return ['pStatus'];
    } 
    attributeChangedCallback(attr, oldVal, newVal){
        // alert(attr + ", " + oldVal + ", " + newVal); 
        this.shadowRoot.querySelector('p').innerText = newVal;
    }
    disconnectedCallback(){
        alert(this.getAttribute('pName') + " component removed." );
        this.shadowRoot.getElementById('trash').removeEventListener();
    }
}



window.customElements.define("product-card", ProductCard);

