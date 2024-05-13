import {Component, inject, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast, ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {MessageService} from "primeng/api";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, ButtonModule, RippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @ts-ignore
  @ViewChild(Toast) toast: Toast;

  private readonly messageService: MessageService=  inject(MessageService);

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content', key:'test-toggle-toast' });
  }

  onToggleSticky() {
    this.toast.messages?.filter(m => m.key === "test-toggle-toast").forEach(m => m.sticky = !m.sticky)
  }
}
