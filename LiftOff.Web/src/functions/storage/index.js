const storage = {
  set: function(key, value) {
    localStorage.setItem(key, value);
  },
  get: function(key) {
    return localStorage.getItem(key);
  },
  remove: function(key) {
    localStorage.removeItem(key);
  }
};

export default storage;
