"use strict";
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
var InputTextarea = (function () {
    function InputTextarea(el) {
        this.el = el;
    }
    InputTextarea.prototype.ngOnInit = function () {
        this.rowsDefault = this.rows;
        this.colsDefault = this.cols;
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.onKeyup = function (e) {
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.resize = function () {
        var linesCount = 0, lines = this.el.nativeElement.value.split('\n');
        for (var i = lines.length - 1; i >= 0; --i) {
            linesCount += Math.floor((lines[i].length / this.colsDefault) + 1);
        }
        this.rows = (linesCount >= this.rowsDefault) ? (linesCount + 1) : this.rowsDefault;
    };
    Object.defineProperty(InputTextarea.prototype, "filled", {
        get: function () {
            return this.el.nativeElement.value != '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], InputTextarea.prototype, "autoResize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InputTextarea.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InputTextarea.prototype, "cols", void 0);
    __decorate([
        core_1.HostListener('focus', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputTextarea.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputTextarea.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InputTextarea.prototype, "onKeyup", null);
    InputTextarea = __decorate([
        core_1.Directive({
            selector: '[pInputTextarea]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled',
                '[attr.rows]': 'rows',
                '[attr.cols]': 'cols'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InputTextarea);
    return InputTextarea;
}());
exports.InputTextarea = InputTextarea;
var InputTextareaModule = (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputTextarea],
            declarations: [InputTextarea]
        }), 
        __metadata('design:paramtypes', [])
    ], InputTextareaModule);
    return InputTextareaModule;
}());
exports.InputTextareaModule = InputTextareaModule;
//# sourceMappingURL=inputtextarea.js.map