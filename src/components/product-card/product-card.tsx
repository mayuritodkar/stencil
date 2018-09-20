import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.css'
})
export class ProductCard {

  @Prop() price: string;
  @Prop() productName: string;
  @Prop() contractLength: string;
  @Prop() features: string;
  @Prop() imageName: string;
  
  featuresList: Array<any>;
  menus: Array<any>;
  

  componentWillLoad() {
    this.featuresList = this.features.split(",");
  }

  render() {
    return (
      <section>
        <img src={this.imageName} alt={this.productName}/>
        <h2>{this.productName}</h2>
        <div>
          <span>Plan includes:</span>
          <ul>
            {this.featuresList.map(feature =>
              <li>{feature}</li>
            )}
          </ul>
        </div>
        <div>
          <div>
            <span><strong>£{this.price} a month</strong></span>
          </div>
          <p>for {this.contractLength} months, includes line rental</p>
        </div>
      </section>
    );
  }
}
