(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{LinH:function(o,e,t){"use strict";t.r(e),t.d(e,"RoomsPageModule",(function(){return S}));var r=t("Valr"),i=t("QJY3"),n=t("DUip"),s=t("sPEm"),c=t("o8Qb"),a=t("j1ZV"),b=t("iTUp"),u=t("K9Ia"),p=t("ny24"),d=t("b/dP"),h=t("H5QU"),l=t("Z8WZ"),m=t("/MTl"),f=t("TYT/"),g=t("2MiI"),v=t("N79n");function w(o,e){if(1&o){var t=f.Tb();f.Qb(0),f.Sb(1,"app-room",8),f.ac("showChange",(function(o){f.qc(t);var r=e.$implicit;return f.dc().showChange(r,o)})),f.Rb(),f.Pb()}if(2&o){var r=e.$implicit,i=f.dc();f.Ab(1),f.ic("room",i.roomList[r])("reorder",i.reorder)("active",i.active)("show",null==i.settings?null:i.settings.roomPage[r])}}var R=function(){function o(o,e,t,r,i){this.popoverService=o,this.lookupService=e,this.httpService=t,this.router=r,this.cdr=i,this.unsubscribe=new u.a,this.rooms=[]}return o.prototype.ngOnInit=function(){this.settings=this.lookupService.settings},o.prototype.ngAfterContentInit=function(){var o=this;this.router.events.pipe(Object(p.a)(this.unsubscribe)).subscribe((function(e){e instanceof n.c&&("/tabs/rooms"!==e.url?(o.active=!1,o.cdr.detectChanges()):(o.active=!0,o.cdr.detectChanges()))})),this.lookupService.subRoomList().pipe(Object(p.a)(this.unsubscribe)).subscribe((function(e){o.roomList=e,o.rooms=Object.keys(o.roomList).filter((function(e){return void 0!==o.roomList[e].id})).sort((function(e,t){return o.roomList[e].position<o.roomList[t].position?-1:1})),o.cdr.detectChanges()}))},o.prototype.ngOnDestroy=function(){this.unsubscribe.next(),this.unsubscribe.complete()},o.prototype.showChange=function(o,e){this.settings.roomPage[o]=e,this.lookupService.setSettings(this.settings)},o.prototype.onClickAddRoom=function(){this.popoverService.presentModal(d.a,!0,null,"roomAdd")},o.prototype.onReorder=function(o){o.detail.complete(this.rooms);for(var e=0,t=0,r=this.rooms;t<r.length;t++){var i=r[t];this.roomList[i].position=e,this.httpService.udpateRoom(this.roomList[i]),e++}this.cdr.detectChanges()},o.\u0275fac=function(e){return new(e||o)(f.Nb(l.a),f.Nb(m.a),f.Nb(h.a),f.Nb(n.h),f.Nb(f.h))},o.\u0275cmp=f.Hb({type:o,selectors:[["app-rooms"]],decls:10,vars:4,consts:[[3,"label","reorder","reorderChange"],[2,"margin-bottom","60px"],["size","12","size-xs","12","size-sm","6","size-md","6","size-lg","4",1,"centerCol"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],["vertical","top","horizontal","center","slot","fixed","edge","",2,"transform","scale(0.6)"],[3,"click"],["name","add"],[3,"room","reorder","active","show","showChange"]],template:function(o,e){1&o&&(f.Sb(0,"app-header",0),f.ac("reorderChange",(function(o){return e.reorder=o})),f.Rb(),f.Sb(1,"ion-content"),f.Sb(2,"ion-grid",1),f.Sb(3,"ion-row"),f.Sb(4,"ion-col",2),f.Sb(5,"ion-reorder-group",3),f.ac("ionItemReorder",(function(o){return e.onReorder(o)})),f.wc(6,w,2,4,"ng-container",4),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(7,"ion-fab",5),f.Sb(8,"ion-fab-button",6),f.ac("click",(function(){return e.onClickAddRoom()})),f.Ob(9,"ion-icon",7),f.Rb(),f.Rb(),f.Rb()),2&o&&(f.ic("label","app.shelly-home.rooms.label")("reorder",e.reorder),f.Ab(5),f.ic("disabled",!e.reorder),f.Ab(1),f.ic("ngForOf",e.rooms))},directives:[g.a,s.t,s.z,s.fb,s.s,s.cb,r.s,s.v,s.w,s.B,v.a],styles:[".centerCol[_ngcontent-%COMP%]{left:50%;transform:translateX(-50%)}"],changeDetection:0}),o}(),S=function(){function o(){}return o.\u0275mod=f.Lb({type:o}),o.\u0275inj=f.Kb({factory:function(e){return new(e||o)},imports:[[s.Ab,r.c,i.e,c.c,a.a,b.a,n.j.forChild([{path:"",component:R}])]]}),o}()}}]);