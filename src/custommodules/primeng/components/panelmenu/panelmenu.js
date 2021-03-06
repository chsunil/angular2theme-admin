"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var BasePanelMenuItem = (function () {
    function BasePanelMenuItem(router) {
        this.router = router;
    }
    BasePanelMenuItem.prototype.handleClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }
        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new core_1.EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    return BasePanelMenuItem;
}());
exports.BasePanelMenuItem = BasePanelMenuItem;
var PanelMenuSub = (function (_super) {
    __extends(PanelMenuSub, _super);
    function PanelMenuSub(router) {
        _super.call(this, router);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelMenuSub.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelMenuSub.prototype, "expanded", void 0);
    PanelMenuSub = __decorate([
        core_1.Component({
            selector: 'p-panelMenuSub',
            template: "\n        <ul class=\"ui-menu-list ui-helper-reset\" [style.display]=\"expanded ? 'block' : 'none'\">\n            <li *ngFor=\"let child of item.items\" class=\"ui-menuitem ui-corner-all\" [ngClass]=\"{'ui-menu-parent':child.items}\">\n                <a [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                    [ngClass]=\"{'ui-menuitem-link-hasicon':child.icon&&child.items,'ui-state-disabled':child.disabled}\" \n                    (click)=\"handleClick($event,child)\">\n                    <span class=\"ui-panelmenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-right':!child.expanded,'fa-caret-down':child.expanded}\" *ngIf=\"child.items\"></span\n                    ><span class=\"ui-menuitem-icon fa fa-fw\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span\n                    ><span class=\"ui-menuitem-text\">{{child.label}}</span>\n                </a>\n                <p-panelMenuSub [item]=\"child\" [expanded]=\"child.expanded\" *ngIf=\"child.items\"></p-panelMenuSub>\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PanelMenuSub);
    return PanelMenuSub;
}(BasePanelMenuItem));
exports.PanelMenuSub = PanelMenuSub;
var PanelMenu = (function (_super) {
    __extends(PanelMenu, _super);
    function PanelMenu(router) {
        _super.call(this, router);
    }
    PanelMenu.prototype.unsubscribe = function (item) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var childItem = _a[_i];
                this.unsubscribe(childItem);
            }
        }
    };
    PanelMenu.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    PanelMenu.prototype.handleClick = function (event, item) {
        var _this = this;
        this.animating = true;
        _super.prototype.handleClick.call(this, event, item);
        //TODO: Use onDone of animate callback instead with RC6
        setTimeout(function () {
            _this.animating = false;
        }, 400);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PanelMenu.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelMenu.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PanelMenu.prototype, "styleClass", void 0);
    PanelMenu = __decorate([
        core_1.Component({
            selector: 'p-panelMenu',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-panelmenu ui-widget'\">\n            <div *ngFor=\"let item of model;let f=first;let l=last;\" class=\"ui-panelmenu-panel\">\n                <div tabindex=\"0\" [ngClass]=\"{'ui-widget ui-panelmenu-header ui-state-default':true,'ui-corner-top':f,'ui-corner-bottom':l&&!item.expanded,\n                    'ui-state-active':item.expanded,'ui-state-disabled':item.disabled}\">\n                    <a [href]=\"item.url||'#'\" [ngClass]=\"{'ui-panelmenu-headerlink-hasicon':item.icon}\" (click)=\"handleClick($event,item)\">\n                        <span *ngIf=\"item.items\" class=\"ui-panelmenu-icon fa\" [ngClass]=\"{'fa-caret-right':!item.expanded,'fa-caret-down':item.expanded}\"></span\n                        ><span class=\"ui-menuitem-icon fa\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span\n                        ><span class=\"ui-menuitem-text\">{{item.label}}</span>\n                    </a>\n                </div>\n                <div *ngIf=\"item.items\" class=\"ui-panelmenu-content-wrapper\" [@rootItem]=\"item.expanded ? 'visible' : 'hidden'\" \n                    [ngClass]=\"{'ui-panelmenu-content-wrapper-overflown': !item.expanded||animating}\">\n                    <div class=\"ui-panelmenu-content ui-widget-content\">\n                        <p-panelMenuSub [item]=\"item\" [expanded]=\"true\"></p-panelMenuSub>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                core_1.trigger('rootItem', [
                    core_1.state('hidden', core_1.style({
                        height: '0px'
                    })),
                    core_1.state('visible', core_1.style({
                        height: '*'
                    })),
                    core_1.transition('visible => hidden', core_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    core_1.transition('hidden => visible', core_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PanelMenu);
    return PanelMenu;
}(BasePanelMenuItem));
exports.PanelMenu = PanelMenu;
var PanelMenuModule = (function () {
    function PanelMenuModule() {
    }
    PanelMenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [PanelMenu],
            declarations: [PanelMenu, PanelMenuSub]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelMenuModule);
    return PanelMenuModule;
}());
exports.PanelMenuModule = PanelMenuModule;
//# sourceMappingURL=panelmenu.js.map