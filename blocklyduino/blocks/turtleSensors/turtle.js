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
                    ["2", "2"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]
                ]), "PIN");
        this.setOutput(true, 'Boolean');
        this.setTooltip('Basic digital input');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Button/');
        this.setStyle('turtle_blocks');
    }
};

Blockly.Blocks['turtle_rgb_led'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("RGB LED")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "Chanbalelednb1.jpg", 64, 64))
                .appendField("Red @ PIN#")
                .appendField(new Blockly.FieldDropdown([["6", "6"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN1")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT1")
                .appendField("Blue @ PIN#")
                .appendField(new Blockly.FieldDropdown([["7", "7"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN2")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT2")
                .appendField("Green @ PIN#")
                .appendField(new Blockly.FieldDropdown([["8", "8"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN3")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT3");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('RGB LED');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/');
        this.setStyle('turtle_blocks');
    }
};

Blockly.Blocks['turtle_led'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("LED")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "Red_LED_s.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown([["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Red LED');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Red_LED/');
        this.setStyle('turtle_blocks');
    }
};

Blockly.Blocks['turtle_piezo_buzzer'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("Piezo Buzzer")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "Buzzer.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown([["9", "9"],["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]), "PIN")
                .appendField("stat")
                .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Emit a tone when the output is high');
        this.setHelpUrl('http://wiki.seeedstudio.com/Grove-Buzzer/');
        this.setStyle('turtle_blocks');
    }
};

Blockly.Blocks['turtle_ldr_sensor'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("LDR Sensor")
                .appendField(new Blockly.FieldImage(turtleSensorsFolder + "ldr_sensor.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown([["A0", "A0"],["A4", "A4"], ["A5", "A5"]]), "PIN")
        this.setOutput(true, 'int');
        this.setTooltip('Detect the light strength of the environment');
        this.setHelpUrl('https://wiki.seeedstudio.com/Sensor_light/');
        this.setStyle('turtle_blocks');
    }
};

