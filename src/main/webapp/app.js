/**
 * Created by Александр on 02.05.2015.
 */
Ext.application({   //метод инициализирует приложение Ext JS
    name: 'CarCatalog',     //указывает имя приложения, которое будет затем использоваться для создания полных имен классов приложения;

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

    launch: function () {       //создание приложения
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {

                xtype  : 'carCatalogView'       //алиас, который указали для вида CarCatalogView.js

            }
        });
    }
});