/*
 * File: app/controller/Note.js
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

Ext.define('TouchNote.controller.Note', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel: 'mainpanel',
            mainNav: 'mainNav',
            noteListContainer: '#notelistcontainer',
            noteEditor: 'noteEditor',
            noteList: '#notelist',
            searchBar: '#searchbar',
            searchField: '#searchbar > toolbar > searchfield',
            testPanel: {
                autoCreate: true,
                selector: 'testPanel',
                xtype: 'testPanel'
            }
        },

        control: {
            "mainpanel": {
                editNoteCommand: 'onEditNote'
            },
            "mainNav": {
                addNoteCommand: 'onAddNote'
            }
        }
    },

    onEditNote: function(record, eventOptions) {
        console.log('Caught: Edit Note Fire Event');
        var item = this.getMainNav().id;
        console.log(item);
        //var newNote = Ext.create("TouchNote.model.Note");
        //this.getNoteEditor().setRecord(record);
        //this.getMainNav().push(this.getNoteEditor());

        console.log(record);
        //var newNote = Ext.create("TouchNote.model.Note");
        var insNoteEdit=Ext.create('TouchNote.view.NoteEditor');

        insNoteEdit.setRecord(record);
        //var noteid=insNoteEdit.down('#noteset').id;
        //console.log(noteid);
        //insNoteEdit.down('#noteset').setRecord(record);
        this.getMainNav().push(insNoteEdit);
    },

    onAddNote: function(eventOptions) {
        console.log('Caught: Add Note Fire Event');
        //var newNote = Ext.create('TouchNote.model.Note');
        //var noteidemt = newNote.fields;
        //console.log(noteidemt);
        //this.getNoteEditor().setRecord(newNote);
        //Ext.Viewport.animateActiveItem(this.getNoteEditor(), { type: "slide", direction: "left" });

        //var item = this.getMainNav().id;

        //var item = this.getNoteEditor().docked;
        //var item = this.getMainPanel().id;

        //var zzz=Ext.Container.getComponent()

        //var item = this.getMainNav().id;
        //console.log(item);


        //var item = this.getNoteEditor().id;
        //var item = this.getTestPanel().id;
        //console.log(item);

        //var panelid=Ext.ComponentQuery.query('testPanel')[0].id;
        //console.log('Query TestPanel');
        //console.log(panelid);

        var panelid=Ext.ComponentQuery.query('mainpanel')[0].id;
        console.log('Query MainPanel');
        console.log(panelid);

        var mainnav_instance=Ext.ComponentQuery.query('mainNav')[0];
        //var tabPanel = Ext.create('TouchNote.view.TestPanel',{
        //    items:[ 
        //            {title: 'Test Panel'}
        //        ]
        //});

        // var tabPanel = Ext.create('TouchNote.view.TestPanel');

        //mainnav_instance.push({
        //    xtype:'testPanel',
        //    title: 'Test Panel'
        //});

        var newNote = Ext.create("TouchNote.model.Note");
        var insNoteEdit=Ext.create('TouchNote.view.NoteEditor');
        this.getNoteEditor().setRecord(newNote);
        var itemid=mainnav_instance.down('#addbtn').id;
        console.log(itemid);
        //?Ext.container.getComponent
        //mainnav_instance.down('#addbtn').hide();
        //mainnav_instance.push(insNoteEdit);
        //mainnav_instance.push(this.getNoteEditor());
        this.getMainNav().push(this.getNoteEditor());
    }

});