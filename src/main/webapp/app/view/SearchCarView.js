/**
 * Created by Александр on 03.05.2015.
 */
//вид поиска
Ext.define('CarCatalog.view.SearchCarView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchCarView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введите название модели',
            maxLength: 200
        }
    ]
});