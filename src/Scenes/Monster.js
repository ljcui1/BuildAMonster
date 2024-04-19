class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX - 110, this.bodyY + 10, "monsterParts", "arm_blueA.png");
        my.sprite.body.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX - 50, this.bodyY + 100, "monsterParts", "leg_blueC.png");
        my.sprite.body.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX + 110, this.bodyY + 10, "monsterParts", "arm_blueA.png");
        my.sprite.body = this.add.sprite(this.bodyX + 50, this.bodyY + 100, "monsterParts", "leg_blueC.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowB.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY - 100, "monsterParts", "body_blueD.png");
        
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(Phaser.Input.Keyboard.JustDown(keyA)){
            my.sprite.body.x -= 1;
        }
        if(Phaser.Input.Keyboard.JustDown(keyD)){
            my.sprite.body.x += 1;
        }
       
    }

}