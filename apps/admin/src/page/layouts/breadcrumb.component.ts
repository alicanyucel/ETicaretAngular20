import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLinkWithHref],
  template: `
  <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a routerLink="/" class="d-flex align-items-center">
          <span class="material-symbols-outlined">Ana Sayfa</span>
        </a>
      </li>
  </ol>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Breadcrumb {

}
