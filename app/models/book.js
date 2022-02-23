import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr bookName;
  @attr author;
  @attr publisher;
  @attr releaseDate;
  @attr price;
  @attr about;
  @attr height;
  @attr width;
  @attr language;
  @attr pages;
}
