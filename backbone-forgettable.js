var originalSet = Backbone.Model.prototype.set;
Backbone.Model.prototype.set = function() {
  var result = originalSet.apply(this, arguments);
  if (result) {
    _.extend(this, this.attributes);
  }
  return result;
};