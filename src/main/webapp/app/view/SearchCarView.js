/**
 * Created by ��������� on 03.05.2015.
 */
//��� ������
Ext.define('CarCatalog.view.SearchCarView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchCarView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: '������� �������� ������',
            maxLength: 200
        }
    ]
});