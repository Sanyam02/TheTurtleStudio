goog.require('Blockly.Blocks');
goog.require('Blockly');

var turtleSensorsFolder = "./blocklyduino/blocks/turtleSensors/";


Blockly.Blocks['turtle_button'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("Button")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "Button.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown([
                    ["5", "5"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]
                ]), "PIN");
        this.setOutput(true, 'Boolean');
        this.setTooltip('Basic digital input');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Button/');
        this.setStyle('turtle_blocks');
    }
};

Blockly.Blocks['turtle_led'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("LED")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "Red_LED_s.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown([["6", "6"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('red LED');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/');
        this.setStyle('turtle_blocks');
    }
};