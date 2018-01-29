import storage from '../storage';

const token = {
  set: function(value) {
    storage.set('@token', value);
  },
  get: function() {
    return storage.get('@token');
  },
  remove: function() {
    storage.remove('@token');
  }
}

export default token;