import Controller from '@ember/controller';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MutableArray from '@ember/array/mutable';
import { get } from '@ember/object';
import { filterBy } from '@ember/object/computed';

export default class AdminGetBooksController extends Controller {
  @service store;
  @tracked selectedBooks = [];
  @tracked books=this.model;


  @action
  deleteSelectedBooks() {
   if (window.confirm('Are you sure about deleting this book?')) {
     this.books.forEach(element => {
        if(element.isChecked){
        this.book = this.store.peekRecord('book', element.id);
        this.book.destroyRecord();
        }
      });
      alert('Records deleted');
    }
  }
}
