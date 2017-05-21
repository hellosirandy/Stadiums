var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
  name: String,
  sport: [String],
  league: [String],
  detail: {
    team: [String],
    capacity: Number,
    opened: Date,
    architect: String,
    location: String,
    images: [String]
  },
});

stadiumSchema.methods.convertOpenedDate = function() {
  var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
    "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
  ];
  return (monthNames[this.detail.opened.getMonth()] + ' ' + this.detail.opened.getDate()
      + ', ' + this.detail.opened.getFullYear());
}

stadiumSchema.methods.convertCapacity = function() {
  return this.detail.capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

stadiumSchema.methods.arrangeImage = function(chunkSize) {
  images = [];
  for (var i = 0; i < this.detail.images.length; i += chunkSize) {
    images.push(this.detail.images.slice(i, i + chunkSize));
  }
  return images;
}

stadiumSchema.methods.handleDetail = function(chunkSize) {
  var handledDetail = {};
  if (this.detail.opened) handledDetail.opened = this.convertOpenedDate();
  if (this.detail.capacity) handledDetail.capacity = this.convertCapacity();
  if (this.detail.images) handledDetail.images = this.arrangeImage(chunkSize);
  return handledDetail;
}

module.exports = mongoose.model('stadium', stadiumSchema, 'stadium');
