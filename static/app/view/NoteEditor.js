/*
 * File: app/view/NoteEditor.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchNote.view.NoteEditor', {
    extend: 'Ext.form.Panel',
    alias: 'widget.noteEditor',

    config: {
        id: 'noteeditor',
        itemId: '',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                autoDestroy: false,
                title: '',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'savebtn',
                        ui: 'action',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                id: 'robtest',
                itemId: 'noteset',
                title: 'MyFieldSet',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Content',
                        name: 'content'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Category',
                        name: 'categoryid',
                        displayField: 'name',
                        store: 'Category',
                        valueField: 'id'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onSaveTap',
                event: 'tap',
                delegate: '#savebtn'
            },
            {
                fn: 'onShow',
                event: 'show'
            }
        ]
    },

    onSaveTap: function(button, e, options) {

    },

    onShow: function(component, options) {
        if (this.getRecord().phantom)
        {
            this.items.get(0).setTitle("<div>Add Note</div>");
        }
        else
        {
            this.items.get(0).setTitle("<div>Edit Note</div>");
        }
        console.log('Phantom:',this.getRecord().phantom);

        //console.log(this.items.get(0).setTitle);

        //var ed = Ext.create('TouchNote.model.Note', {
        //    id: 4,
        //    content: 'Blog 4',
        //    categoryid: 2,
        //    category: 'Food'
        //});

        // Does setRecord only work with form panel?
        //this.setRecord(ed);
    }

});