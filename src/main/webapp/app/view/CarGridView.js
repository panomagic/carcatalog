/**
 * Created by ��������� on 03.05.2015.
 */
//��� �������
Ext.define('CarCatalog.view.CarGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'CarCatalogStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: '������',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: '��� ���� ������ ���� ���������'
            }
        },
        {
            flex: 2,
            text: '����',
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: '���� ������ �������� �� ����',
                allowBlank: false,
                blankText: '��� ���� ������ ���� ���������'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: '���������',
            cancelBtnText: '��������'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: '��������',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: '�������',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});