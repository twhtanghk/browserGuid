// please see https://andywalpole.me/blog/140739/using-javascript-create-guid-from-users-browser-information
module.exports = function() {
  var guid, nav, screen;
  nav = window.navigator;
  screen = window.screen;
  guid = nav.mimeTypes.length;
  guid += nav.userAgent.replace(/\D+/g, '');
  guid += nav.plugins.length;
  guid += screen.height || '';
  guid += screen.width || '';
  guid += screen.pixelDepth || '';
  return guid;
};
