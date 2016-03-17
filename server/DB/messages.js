var messages = [];

module.exports = {
    save: function(name, message) {
        return messages.push({name: name, message:message});
    },
    last10: function() {
        var result = [];
        var len = messages.length;
        if(len > 0) {
            var begin = (len >= 10) ? len - 10 : 0;
            result = messages.slice(begin, len);
        }
        return result;
    }
};
