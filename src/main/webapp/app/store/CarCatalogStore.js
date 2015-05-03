/**
 * Created by Александр on 03.05.2015.
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
            create: 'car',      //car - имя, на которое будет замапен java-класс (контроллер), который будет обрабатывать GET, POST, PUT, DELETE запросы с клиента
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