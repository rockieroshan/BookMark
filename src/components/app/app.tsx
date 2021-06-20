import { Component, h } from '@stencil/core';
import configureStore from '../../store';
import { store } from '@stencil/redux';

@Component({
    tag: 'app-root',
    styleUrl: 'app.scss',
    shadow: true,
})

export class AppRoot {
    componentWillLoad() {
        store.setStore(configureStore({}));
      }
      
    render() {
        return (
            <div class='appRoot'>
                <app-header />
                <div class='mainWrapper'>
                    <app-bookmarktable />
                    <app-addbookmark />
                </div>
            </div>
        );
    }
}
