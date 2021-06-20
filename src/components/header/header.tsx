import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-header',
    styleUrl: 'header.scss',
    shadow: true,
})

export class Header {

    render() {
        return (
            <header>
                <h1>Bookmarks</h1>
            </header>
        );
    }
}
