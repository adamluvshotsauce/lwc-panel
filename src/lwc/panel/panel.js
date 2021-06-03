import { LightningElement, api } from 'lwc';

export default class Panel extends LightningElement {

    @api panelHeader;
    @api size;
    @api dockPosition;
    @api iconName;
    @api iconSize;
    @api iconVariant;

    @api togglePanel() {
        this.panelClosed = !this.panelClosed;
    }

    panelClosed = false;

    get panelClasses() {
        return`slds-panel ${this.panelSizeClass}` + 
            ` slds-panel_docked ${this.panelDockedPositionClass}` +
            ` slds-panel_drawer ${this.panelVisibleClass}`;
    }

    get panelSizeClass() {
        switch (this.size) {
            case 'small':
                return 'slds-size_small';
            case 'medium':
                return 'slds-size_medium';
            case 'large':
                return 'slds-size_large';
            case 'xlarge':
                return 'slds-size_x-large';
            case 'full':
                return 'slds-size_full';
            default:
                return 'slds-size_medium';
        }
    }

    get panelDockedPositionClass() {
        switch (this.dockPosition) {
            case 'left':
                return 'slds-panel_docked-left';
            case 'right':
                return 'slds-panel_docked-right';
            default:
                return 'slds-panel_docked-left';
        }
    }

    get panelDockedClass() {
        switch (this.dockPosition) {
            case 'left':
                return 'c-panel_docked-left';
            case 'right':
                return 'c-panel_docked-right';
            default:
                return 'c-panel_docked-left';
        }
    }

    get panelButtonDockedClasses() {
        let panelButtonClasses = 'slds-theme_default slds-border_bottom slds-var-p-around_small';

        switch (this.dockPosition) {
            case 'left':
                return panelButtonClasses;
            case 'right':
                return `${panelButtonClasses} slds-text-align_right`;
            default:
                return panelButtonClasses;
        }
    }

    get panelVisibleClass() {
        return !this.panelClosed ? 'slds-is-open' : 'slds-is-closed';
    }

    get panelButtonState() {
        return !this.panelClosed;
    }
}