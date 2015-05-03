/**
 * Created by ��������� on 03.05.2015.
 */
//��� ����� ���������� ������
Ext.define('CarCatalog.view.AddCarFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addCarFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '�������� ������',
                    allowBlank: false,
                    blankText: '��� ���� ������ ���� ���������'
                },
                {
                    xtype: 'textfield',
                    name: 'price',
                    fieldLabel: '����',
                    regex: /^([0-9]{1,20})*$/,
                    regexText: '���� ������ �������� �� ����',
                    allowBlank: false,
                    blankText: '��� ���� ������ ���� ���������'
                }
            ]
        }
    ],

    buttons: [
        {
            text: '���������',
            action: 'save',
            disabled: true
        },
        {
            text: '��������',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});