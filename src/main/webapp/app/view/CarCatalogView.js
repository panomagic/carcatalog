/**
 * Created by ��������� on 03.05.2015.
 */
//��� �������
Ext.define('CarCatalog.view.CarCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.carCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'carGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">������� �����������</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchCarView',
            title: '�����',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});