function simple_tdata(len,each) {
    result = new Array(len);
    for (var i = 0; i < len; i++)
        result[i] = each;
    return result;
}

var Animations = []

function Animation (name, time_data, sprite_sheet) {
    this.name = name;
    this.time_data = time_data;
    this.sprite_sheet = sprite_sheet

    this.draw = function(context, x, y, start_time, now) {
        // time_data is how long each frame should be displayed in miliseconds
        // so [60,60,60,60,60] for most
        sum = 0
        for (var i = 0; i < this.time_data.length; i++) {
          sum += this.time_data[i];
          if(sum >= now - start_time) {
            this.sprite_sheet.draw(context,x,y,i)
            return true;
          }
        }
        return false;
    }

    this.duration = 0;
    for (var i = 0; i < this.time_data.length; i++) {
        this.duration += this.time_data[i];
    }

    this.isFinishedAt = function(start_time,now) {
        return ((now - start_time) > this.duration);
    }

    Animations.push({
                       key:   this.name,
                       value: this
                   });
}