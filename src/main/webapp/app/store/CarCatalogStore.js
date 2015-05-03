/**
 * Created by ��������� on 03.05.2015.
 */
Ext.define('CarCatalog.store.CarCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'CarCatalog.model.CarCatalogModel'
    ],
    model: 'CarCatalog.model.CarCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'car',      //car - ���, �� ������� ����� ������� java-����� (����������), ������� ����� ������������ GET, POST, PUT, DELETE ������� � �������
            read: 'car',
            destroy: 'car',
            update: 'car'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});