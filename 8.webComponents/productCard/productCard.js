class ProductCard extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <style>
            h1{
                color:red
            }
        </style>
        <h1>Product Component</h1>`;
        // const h1 = document.createElement('h1');
        // h1.innerHTML = `
        // <style>
        //     h1{
        //         color: red
        //     } 
        // </style>
        // Product Component
        // `;
        // this.attachShadow({mode:'open'});
        // this.shadowRoot.appendChild(h1);
    }
}

//define('custom element name as string', className)
window. customElements.define('product-card', ProductCard)