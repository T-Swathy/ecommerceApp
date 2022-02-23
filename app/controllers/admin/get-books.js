import Controller from '@ember/controller';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MutableArray from '@ember/array/mutable';

export default class AdminGetBooksController extends Controller {
  @service store;
  @tracked selectedBooks = [];
 
 @action
  toggleValue(book){
   if(book.isChecked===true)
   book.isChecked=false;
   else
     book.isChecked=true;
   this.getSelectedBooks(book.isChecked,book.id);
   console.log(book.isChecked);
  
  }
  getSelectedBooks(value,bookId) {
     if(value){
     this.selectedBooks.addObject(bookId);
     console.log(this.selectedBooks);
     console.log(this.selectedBooks.length);
     }
     else
     {
         this.selectedBooks.removeObject(bookId);
        console.log(this.selectedBooks);
         console.log(this.selectedBooks.length);

     }
   
  
  }

  @action
  deleteSelectedBooks() {
    if (window.confirm('Are you sure about deleting this book?')) {
      for (let i = 0; i < this.selectedBooks.length; i++) {
        this.id = this.selectedBooks.objectAt(i);
        this.book = this.store.peekRecord('book', this.id);
        this.book.destroyRecord();
      }
      this.selectedBooks.clear();
      alert('Records deleted');
    }
  }
}
