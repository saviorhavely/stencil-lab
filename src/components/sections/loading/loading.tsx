import { Component, h } from '@stencil/core';

@Component({
  tag: 'section-loading',
  styleUrl: 'loading.scss'
})
export class SectionLoading {
  render() {
    return (
      <div class="loading">
        <div class="content">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
