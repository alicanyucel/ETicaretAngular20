import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   imports: [CommonModule],
   templateUrl: './test.html',
   encapsulation:ViewEncapsulation.None,
   changeDetection:ChangeDetectionStrategy.OnPush,

})
export default class TestComponent {
  title = 'Test Component';
}
