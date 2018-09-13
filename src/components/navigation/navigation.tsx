import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'navigation-component',
  styleUrl: 'navigation.scss'
})
export class Navigation {

  @Prop() menus: { id: number, name: string, url: string }[];

  render() {
    return (
      <ul>
        {
          this.menus.map(menus =>
          <stencil-route-link url={menus.url} activeClass="category-sidebar-active">
            <li>{menus.name}</li>
          </stencil-route-link>)
        }
      </ul>
    );
  }
}
