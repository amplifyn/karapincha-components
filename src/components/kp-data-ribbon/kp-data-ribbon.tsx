import { Component, Host, Element, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';

@Component({
  tag: 'kp-data-ribbon',
  styleUrl: 'kp-data-ribbon.scss'
})
export class KpDataRibbon {
  @Element() hostElement: HTMLStencilElement;
  @Prop() dataAvatarUrl: string;
  @Prop() dataHeading: string;

  private hasLabelsSlot: boolean;
  private hasActionsSlot: boolean;
  private hasAfterActionsSlot: boolean;

  private classNames = { 'kp-data-ribbon': true }

  private renderAvatar = () => {
    if (this.dataAvatarUrl !== '' && this.dataAvatarUrl !== undefined && this.dataAvatarUrl !== null) {
      return [<kp-avatar class="kp-data-ribbon__avatar" img={this.dataAvatarUrl} is-medium="true"></kp-avatar>]
    }
    return false;
  }

  private renderHeading = () => {
    if (this.dataHeading) {
      return [
        <p class={{ 'kp-data-ribbon__meta-heading': true }}>{this.dataHeading}</p>
      ];
    }
    return false;
  }

  private renderMetaData = () => {
    if (this.hasLabelsSlot) {
      return [
        <span class={{ 'kp-data-ribbon__meta-labels': true }}>
          <slot name='labels' />
        </span>
      ];
    }
    return false;
  }

  private renderMeta = () => {
    if (this.dataHeading || this.hasLabelsSlot) {
      return [
        <div class={{ 'kp-data-ribbon__meta': true }}>
          {this.renderHeading()}
          {this.renderMetaData()}
        </div>
      ];
    }
    return false;
  }

  private renderActionsSlot = () => {
    if (this.hasActionsSlot) {
      return [<div class={{ 'kp-data-ribbon__actions': true }}>
        <slot name='actions' />
      </div>];
    }
    return false;
  }

  private renderAfterActionsSlot = () => {
    if (this.hasAfterActionsSlot) {
      return [<div class={{ 'kp-data-ribbon__after-actions': true }}>
        <slot name='after-actions' />
      </div>];
    }
    return false;
  }

  private renderSlots = () => {
    if (this.hasActionsSlot || this.hasAfterActionsSlot) {
      return [
        <div class="kp-data-ribbon__slots">
          {this.renderActionsSlot()}
          {this.renderAfterActionsSlot()}
        </div>
      ];
    }
    return false;
  }

  componentWillLoad() {
    this.hasLabelsSlot = !!this.hostElement.querySelector('[slot="labels"]');
    this.hasActionsSlot = !!this.hostElement.querySelector('[slot="actions"]');
    this.hasAfterActionsSlot = !!this.hostElement.querySelector('[slot="after-actions"]');
  }

  render() {
    return (
      <Host class={this.classNames}>
        {this.renderAvatar()}
        {this.renderMeta()}
        {this.renderSlots()}
      </Host>
    );
  }
}
