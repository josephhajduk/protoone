var SpriteSheets = []

function SpriteSheet(name, image_sheet_url, sprite_width, sprite_height, sprite_length) {
    this.name = name;
    this.loaded=false;
    this.image_sheet = new Image();
    this.image_sheet.src = image_sheet_url
    this.image_sheet.onload = function() {
        this.loaded=true;
    };
    this.sprite_width = sprite_width;
    this.sprite_height = sprite_height
    this.sprite_length = sprite_length;

    this.draw = function(context, x, y, n) {
        context.drawImage(
            this.image_sheet,
            n*this.sprite_width,0,
            this.sprite_width,this.sprite_height,
            x, y,
            this.sprite_width,this.sprite_height);
    }

    SpriteSheets.push({
                           key:   this.name,
                           value: this
                       });
}

function ReverseSpriteSheet(name,oldSheet) {
    this.oldSheet = oldSheet;

    this.draw = function(context, x, y, n) {
        this.oldSheet.draw(context,x,y,this.oldSheet.sprite_length-1-n)
    }

    SpriteSheets.push({
                        key:   this.name,
                        value: this
                      });
}

// TODO: inherit properly

