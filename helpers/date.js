module.exports = function(d) {
  var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
    "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
  ];
  return (monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear());
};
