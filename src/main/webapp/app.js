/**
 * Created by ��������� on 02.05.2015.
 */
Ext.application({   //����� �������������� ���������� Ext JS
    name: 'CarCatalog',     //��������� ��� ����������, ������� ����� ����� �������������� ��� �������� ������ ���� ������� ����������;

    views: [
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView'
    ],

    controllers : [
        'CarCatalogController'
    ],

    stores : [
        'CarCatalogStore'
    ],

    launch: function () {       //�������� ����������
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {

                xtype  : 'carCatalogView'       //�����, ������� ������� ��� ���� CarCatalogView.js

            }
        });
    }
});