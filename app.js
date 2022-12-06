
      import { h, Component, render } from 'https://unpkg.com/preact?module';
      import htm from 'https://unpkg.com/htm?module';
    
      // Initialize htm with Preact
      const html = htm.bind(h);

      function ProductGrid(props) {
        return html`<div class="container is-flex-wrap-wrap is-flex">${props.items.map((p) => ProductCard(p))}</div>`
      } 
    
      function ProductCard(product) {
        return html`<div class="tile is-4 m-5">
        <article class="tile is-child notification is-info">
            <p class="title">${product.name}</p>
            <p class="subtitle ">€${product.price}</p>
        </article>
        </div>`
      }

      let products = [
        {
            'name': 'LG 4K 27" LED',
            'price': 229
        },
        {
            'name': 'Logitech Mouse Wireless S3',
            'price': 39
        },
        {
            'name': 'MacBook Air M1 8GB',
            'price': 1099
        },
        {
            'name': 'Philips 55" LED',
            'price': 650
        }
      ]

      render(html`<${ProductGrid} items=${products} />`, document.body);