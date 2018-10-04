/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java315.xml
 */
import Packet from 'packet';
import Types from 'types';

const Serverbound = {

  TeleportConfirm: class extends Packet {

    static get ID(){ return 0; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 0;
    }

    constructor(teleportId=0) {
      super();
      this.teleportId = teleportId;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.teleportId);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.teleportId=this.readVaruint();
      traceDecode('teleportId');
      return this;
    }

    /** @return {string} */
    toString() {
      return "TeleportConfirm(teleportId: " + this.teleportId + ")";
    }

  }
  ,

  TabComplete: class extends Packet {

    static get ID(){ return 1; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 1;
    }

    constructor(text="", command=false, hasPosition=false, block=0) {
      super();
      this.text = text;
      this.command = command;
      this.hasPosition = hasPosition;
      this.block = block;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5zh=this.encodeString(this.text);
      this.writeVaruint(dhc5zh.length);
      this.writeBytes(dhc5zh);
      this.writeBool(this.command);
      this.writeBool(this.hasPosition);
      if(hasPosition==true) {
        this.writeBigEndianLong(this.block);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5zh=this.readVaruint();
      this.text=this.decodeString(this.readBytes(dhc5zh));
      traceDecode('text');
      this.command=this.readBool();
      traceDecode('command');
      this.hasPosition=this.readBool();
      traceDecode('hasPosition');
      if(hasPosition==true) {
        this.block=this.readBigEndianLong();
        traceDecode('block');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "TabComplete(text: " + this.text + ", command: " + this.command + ", hasPosition: " + this.hasPosition + ", block: " + this.block + ")";
    }

  }
  ,

  ChatMessage: class extends Packet {

    static get ID(){ return 2; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 2;
    }

    constructor(text="") {
      super();
      this.text = text;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5zh=this.encodeString(this.text);
      this.writeVaruint(dhc5zh.length);
      this.writeBytes(dhc5zh);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5zh=this.readVaruint();
      this.text=this.decodeString(this.readBytes(dhc5zh));
      traceDecode('text');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ChatMessage(text: " + this.text + ")";
    }

  }
  ,

  ClientStatus: class extends Packet {

    static get ID(){ return 3; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 3;
    }

    // action
    static get RESPAWN(){ return 0; };
    static get REQUEST_STATS(){ return 1; };
    static get OPEN_INVENTORY(){ return 2; };

    constructor(action=0) {
      super();
      this.action = action;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.action);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.action=this.readVaruint();
      traceDecode('action');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ClientStatus(action: " + this.action + ")";
    }

  }
  ,

  ClientSettings: class extends Packet {

    static get ID(){ return 4; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 4;
    }

    // chat mode
    static get ENABLED(){ return 0; };
    static get COMMANDS_ONLY(){ return 1; };
    static get DISABLED(){ return 2; };

    // displayed skin parts
    static get CAPE(){ return 1; };
    static get JACKET(){ return 2; };
    static get LEFT_SLEEVE(){ return 4; };
    static get RIGHT_SLEEVE(){ return 8; };
    static get LEFT_PANTS(){ return 16; };
    static get RIGHT_PANTS(){ return 32; };
    static get HAT(){ return 64; };

    // main hand
    static get RIGHT(){ return 0; };
    static get LEFT(){ return 1; };

    constructor(language="", viewDistance=0, chatMode=0, chatColors=false, displayedSkinParts=0, mainHand=0) {
      super();
      this.language = language;
      this.viewDistance = viewDistance;
      this.chatMode = chatMode;
      this.chatColors = chatColors;
      this.displayedSkinParts = displayedSkinParts;
      this.mainHand = mainHand;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5y5df=this.encodeString(this.language);
      this.writeVaruint(dhc5y5df.length);
      this.writeBytes(dhc5y5df);
      this.writeByte(this.viewDistance);
      this.writeVaruint(this.chatMode);
      this.writeBool(this.chatColors);
      this.writeByte(this.displayedSkinParts);
      this.writeByte(this.mainHand);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5y5df=this.readVaruint();
      this.language=this.decodeString(this.readBytes(dhc5y5df));
      traceDecode('language');
      this.viewDistance=this.readByte();
      traceDecode('viewDistance');
      this.chatMode=this.readVaruint();
      traceDecode('chatMode');
      this.chatColors=this.readBool();
      traceDecode('chatColors');
      this.displayedSkinParts=this.readByte();
      traceDecode('displayedSkinParts');
      this.mainHand=this.readByte();
      traceDecode('mainHand');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ClientSettings(language: " + this.language + ", viewDistance: " + this.viewDistance + ", chatMode: " + this.chatMode + ", chatColors: " + this.chatColors + ", displayedSkinParts: " + this.displayedSkinParts + ", mainHand: " + this.mainHand + ")";
    }

  }
  ,

  ConfirmTransaction: class extends Packet {

    static get ID(){ return 5; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 5;
    }

    constructor(window=0, action=0, accepted=false) {
      super();
      this.window = window;
      this.action = action;
      this.accepted = accepted;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.window);
      this.writeBigEndianShort(this.action);
      this.writeBool(this.accepted);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.window=this.readByte();
      traceDecode('window');
      this.action=this.readBigEndianShort();
      traceDecode('action');
      this.accepted=this.readBool();
      traceDecode('accepted');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ConfirmTransaction(window: " + this.window + ", action: " + this.action + ", accepted: " + this.accepted + ")";
    }

  }
  ,

  EnchantItem: class extends Packet {

    static get ID(){ return 6; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 6;
    }

    constructor(window=0, enchantment=0) {
      super();
      this.window = window;
      this.enchantment = enchantment;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.window);
      this.writeByte(this.enchantment);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.window=this.readByte();
      traceDecode('window');
      this.enchantment=this.readByte();
      traceDecode('enchantment');
      return this;
    }

    /** @return {string} */
    toString() {
      return "EnchantItem(window: " + this.window + ", enchantment: " + this.enchantment + ")";
    }

  }
  ,

  ClickWindow: class extends Packet {

    static get ID(){ return 7; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 7;
    }

    constructor(window=0, slot=0, button=0, action=0, mode=0, clickedItem=new Types.Slot()) {
      super();
      this.window = window;
      this.slot = slot;
      this.button = button;
      this.action = action;
      this.mode = mode;
      this.clickedItem = clickedItem;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.window);
      this.writeBigEndianShort(this.slot);
      this.writeByte(this.button);
      this.writeBigEndianShort(this.action);
      this.writeVaruint(this.mode);
      this.writeBytes(this.clickedItem.encodeBody(true));
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.window=this.readByte();
      traceDecode('window');
      this.slot=this.readBigEndianShort();
      traceDecode('slot');
      this.button=this.readByte();
      traceDecode('button');
      this.action=this.readBigEndianShort();
      traceDecode('action');
      this.mode=this.readVaruint();
      traceDecode('mode');
      this.clickedItem=new Types.Slot().decodeBody(this._buffer);
      this._buffer=this.clickedItem._buffer;
      traceDecode('clickedItem');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ClickWindow(window: " + this.window + ", slot: " + this.slot + ", button: " + this.button + ", action: " + this.action + ", mode: " + this.mode + ", clickedItem: " + this.clickedItem + ")";
    }

  }
  ,

  CloseWindow: class extends Packet {

    static get ID(){ return 8; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 8;
    }

    constructor(window=0) {
      super();
      this.window = window;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.window);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.window=this.readByte();
      traceDecode('window');
      return this;
    }

    /** @return {string} */
    toString() {
      return "CloseWindow(window: " + this.window + ")";
    }

  }
  ,

  PluginMessage: class extends Packet {

    static get ID(){ return 9; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 9;
    }

    constructor(channel="", data=new Types.Bytes()) {
      super();
      this.channel = channel;
      this.data = data;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5afbv=this.encodeString(this.channel);
      this.writeVaruint(dhc5afbv.length);
      this.writeBytes(dhc5afbv);
      this.writeBytes(this.data);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5afbv=this.readVaruint();
      this.channel=this.decodeString(this.readBytes(dhc5afbv));
      traceDecode('channel');
      this.data=Array.from(this._buffer);
      this._buffer=[];
      traceDecode('data');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PluginMessage(channel: " + this.channel + ", data: " + this.data + ")";
    }

  }
  ,

  UseEntity: class extends Packet {

    static get ID(){ return 10; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 10;
    }

    // type
    static get INTERACT(){ return 0; };
    static get ATTACK(){ return 1; };
    static get INTERACT_AT(){ return 2; };

    // hand
    static get MAIN_HAND(){ return 0; };
    static get OFF_HAND(){ return 1; };

    constructor(target=0, type=0, targetPosition={x:0,y:0,z:0}, hand=0) {
      super();
      this.target = target;
      this.type = type;
      this.targetPosition = targetPosition;
      this.hand = hand;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.target);
      this.writeVaruint(this.type);
      if(type==2) {
        this.writeBigEndianFloat(this.targetPosition.x);
        this.writeBigEndianFloat(this.targetPosition.y);
        this.writeBigEndianFloat(this.targetPosition.z);
      }
      if(type==0||type==2) {
        this.writeVaruint(this.hand);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.target=this.readVaruint();
      traceDecode('target');
      this.type=this.readVaruint();
      traceDecode('type');
      if(type==2) {
        this.targetPosition={};
        this.targetPosition.x=this.readBigEndianFloat();
        this.targetPosition.y=this.readBigEndianFloat();
        this.targetPosition.z=this.readBigEndianFloat();
        traceDecode('targetPosition');
      }
      if(type==0||type==2) {
        this.hand=this.readVaruint();
        traceDecode('hand');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "UseEntity(target: " + this.target + ", type: " + this.type + ", targetPosition: " + this.targetPosition + ", hand: " + this.hand + ")";
    }

  }
  ,

  KeepAlive: class extends Packet {

    static get ID(){ return 11; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 11;
    }

    constructor(id=0) {
      super();
      this.id = id;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.id);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.id=this.readVaruint();
      traceDecode('id');
      return this;
    }

    /** @return {string} */
    toString() {
      return "KeepAlive(id: " + this.id + ")";
    }

  }
  ,

  PlayerPosition: class extends Packet {

    static get ID(){ return 12; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 12;
    }

    constructor(position={x:0,y:0,z:0}, onGround=false) {
      super();
      this.position = position;
      this.onGround = onGround;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianDouble(this.position.x);
      this.writeBigEndianDouble(this.position.y);
      this.writeBigEndianDouble(this.position.z);
      this.writeBool(this.onGround);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.position={};
      this.position.x=this.readBigEndianDouble();
      this.position.y=this.readBigEndianDouble();
      this.position.z=this.readBigEndianDouble();
      traceDecode('position');
      this.onGround=this.readBool();
      traceDecode('onGround');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerPosition(position: " + this.position + ", onGround: " + this.onGround + ")";
    }

  }
  ,

  PlayerPositionAndLook: class extends Packet {

    static get ID(){ return 13; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 13;
    }

    constructor(position={x:0,y:0,z:0}, yaw=.0, pitch=.0, onGround=false) {
      super();
      this.position = position;
      this.yaw = yaw;
      this.pitch = pitch;
      this.onGround = onGround;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianDouble(this.position.x);
      this.writeBigEndianDouble(this.position.y);
      this.writeBigEndianDouble(this.position.z);
      this.writeBigEndianFloat(this.yaw);
      this.writeBigEndianFloat(this.pitch);
      this.writeBool(this.onGround);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.position={};
      this.position.x=this.readBigEndianDouble();
      this.position.y=this.readBigEndianDouble();
      this.position.z=this.readBigEndianDouble();
      traceDecode('position');
      this.yaw=this.readBigEndianFloat();
      traceDecode('yaw');
      this.pitch=this.readBigEndianFloat();
      traceDecode('pitch');
      this.onGround=this.readBool();
      traceDecode('onGround');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerPositionAndLook(position: " + this.position + ", yaw: " + this.yaw + ", pitch: " + this.pitch + ", onGround: " + this.onGround + ")";
    }

  }
  ,

  PlayerLook: class extends Packet {

    static get ID(){ return 14; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 14;
    }

    constructor(yaw=.0, pitch=.0, onGround=false) {
      super();
      this.yaw = yaw;
      this.pitch = pitch;
      this.onGround = onGround;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianFloat(this.yaw);
      this.writeBigEndianFloat(this.pitch);
      this.writeBool(this.onGround);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.yaw=this.readBigEndianFloat();
      traceDecode('yaw');
      this.pitch=this.readBigEndianFloat();
      traceDecode('pitch');
      this.onGround=this.readBool();
      traceDecode('onGround');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerLook(yaw: " + this.yaw + ", pitch: " + this.pitch + ", onGround: " + this.onGround + ")";
    }

  }
  ,

  Player: class extends Packet {

    static get ID(){ return 15; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 15;
    }

    constructor(onGround=false) {
      super();
      this.onGround = onGround;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBool(this.onGround);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.onGround=this.readBool();
      traceDecode('onGround');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Player(onGround: " + this.onGround + ")";
    }

  }
  ,

  VehicleMove: class extends Packet {

    static get ID(){ return 16; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 16;
    }

    constructor(position={x:0,y:0,z:0}, yaw=.0, pitch=.0) {
      super();
      this.position = position;
      this.yaw = yaw;
      this.pitch = pitch;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianDouble(this.position.x);
      this.writeBigEndianDouble(this.position.y);
      this.writeBigEndianDouble(this.position.z);
      this.writeBigEndianFloat(this.yaw);
      this.writeBigEndianFloat(this.pitch);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.position={};
      this.position.x=this.readBigEndianDouble();
      this.position.y=this.readBigEndianDouble();
      this.position.z=this.readBigEndianDouble();
      traceDecode('position');
      this.yaw=this.readBigEndianFloat();
      traceDecode('yaw');
      this.pitch=this.readBigEndianFloat();
      traceDecode('pitch');
      return this;
    }

    /** @return {string} */
    toString() {
      return "VehicleMove(position: " + this.position + ", yaw: " + this.yaw + ", pitch: " + this.pitch + ")";
    }

  }
  ,

  SteerBoat: class extends Packet {

    static get ID(){ return 17; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 17;
    }

    constructor(rightPaddleTurning=false, leftPaddleTurning=false) {
      super();
      this.rightPaddleTurning = rightPaddleTurning;
      this.leftPaddleTurning = leftPaddleTurning;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBool(this.rightPaddleTurning);
      this.writeBool(this.leftPaddleTurning);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.rightPaddleTurning=this.readBool();
      traceDecode('rightPaddleTurning');
      this.leftPaddleTurning=this.readBool();
      traceDecode('leftPaddleTurning');
      return this;
    }

    /** @return {string} */
    toString() {
      return "SteerBoat(rightPaddleTurning: " + this.rightPaddleTurning + ", leftPaddleTurning: " + this.leftPaddleTurning + ")";
    }

  }
  ,

  PlayerAbilities: class extends Packet {

    static get ID(){ return 18; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 18;
    }

    // flags
    static get CREATIVE_MODE(){ return 1; };
    static get FLYING(){ return 2; };
    static get ALLOW_FLYING(){ return 4; };
    static get INVINCIBLE(){ return 8; };

    constructor(flags=0, flyingSpeed=.0, walkingSpeed=.0) {
      super();
      this.flags = flags;
      this.flyingSpeed = flyingSpeed;
      this.walkingSpeed = walkingSpeed;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.flags);
      this.writeBigEndianFloat(this.flyingSpeed);
      this.writeBigEndianFloat(this.walkingSpeed);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.flags=this.readByte();
      traceDecode('flags');
      this.flyingSpeed=this.readBigEndianFloat();
      traceDecode('flyingSpeed');
      this.walkingSpeed=this.readBigEndianFloat();
      traceDecode('walkingSpeed');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerAbilities(flags: " + this.flags + ", flyingSpeed: " + this.flyingSpeed + ", walkingSpeed: " + this.walkingSpeed + ")";
    }

  }
  ,

  PlayerDigging: class extends Packet {

    static get ID(){ return 19; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 19;
    }

    // status
    static get START_DIGGING(){ return 0; };
    static get CANCEL_DIGGING(){ return 1; };
    static get FINISH_DIGGING(){ return 2; };
    static get DROP_ITEM_STACK(){ return 3; };
    static get DROP_ITEM(){ return 4; };
    static get SHOOT_ARROW(){ return 5; };
    static get FINISH_EATING(){ return 5; };
    static get SWAP_ITEM_IN_HAND(){ return 6; };

    constructor(status=0, position=0, face=0) {
      super();
      this.status = status;
      this.position = position;
      this.face = face;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.status);
      this.writeBigEndianLong(this.position);
      this.writeByte(this.face);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.status=this.readVaruint();
      traceDecode('status');
      this.position=this.readBigEndianLong();
      traceDecode('position');
      this.face=this.readByte();
      traceDecode('face');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerDigging(status: " + this.status + ", position: " + this.position + ", face: " + this.face + ")";
    }

  }
  ,

  EntityAction: class extends Packet {

    static get ID(){ return 20; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 20;
    }

    // action
    static get START_SNEAKING(){ return 0; };
    static get STOP_SNEAKING(){ return 1; };
    static get LEAVE_BED(){ return 2; };
    static get START_SPRINTING(){ return 3; };
    static get STOP_SPRINTING(){ return 4; };
    static get START_HORSE_JUMP(){ return 5; };
    static get STOP_HORSE_JUMP(){ return 6; };
    static get OPEN_HORSE_INVENTORY(){ return 7; };
    static get START_ELYTRA_FLYING(){ return 8; };

    constructor(entityId=0, action=0, jumpBoost=0) {
      super();
      this.entityId = entityId;
      this.action = action;
      this.jumpBoost = jumpBoost;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.entityId);
      this.writeVaruint(this.action);
      this.writeVaruint(this.jumpBoost);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.entityId=this.readVaruint();
      traceDecode('entityId');
      this.action=this.readVaruint();
      traceDecode('action');
      this.jumpBoost=this.readVaruint();
      traceDecode('jumpBoost');
      return this;
    }

    /** @return {string} */
    toString() {
      return "EntityAction(entityId: " + this.entityId + ", action: " + this.action + ", jumpBoost: " + this.jumpBoost + ")";
    }

  }
  ,

  SteerVehicle: class extends Packet {

    static get ID(){ return 21; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 21;
    }

    // flags
    static get JUMP(){ return 1; };
    static get UNMOUNT(){ return 2; };

    constructor(sideways=.0, forward=.0, flags=0) {
      super();
      this.sideways = sideways;
      this.forward = forward;
      this.flags = flags;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianFloat(this.sideways);
      this.writeBigEndianFloat(this.forward);
      this.writeByte(this.flags);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.sideways=this.readBigEndianFloat();
      traceDecode('sideways');
      this.forward=this.readBigEndianFloat();
      traceDecode('forward');
      this.flags=this.readByte();
      traceDecode('flags');
      return this;
    }

    /** @return {string} */
    toString() {
      return "SteerVehicle(sideways: " + this.sideways + ", forward: " + this.forward + ", flags: " + this.flags + ")";
    }

  }
  ,

  ResourcePackStatus: class extends Packet {

    static get ID(){ return 22; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 22;
    }

    // result
    static get LOADED(){ return 0; };
    static get DECLINED(){ return 1; };
    static get FAILED(){ return 2; };
    static get ACCEPTED(){ return 3; };

    constructor(result=0) {
      super();
      this.result = result;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.result);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.result=this.readVaruint();
      traceDecode('result');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ResourcePackStatus(result: " + this.result + ")";
    }

  }
  ,

  HeldItemChange: class extends Packet {

    static get ID(){ return 23; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 23;
    }

    constructor(slot=0) {
      super();
      this.slot = slot;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianShort(this.slot);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.slot=this.readBigEndianShort();
      traceDecode('slot');
      return this;
    }

    /** @return {string} */
    toString() {
      return "HeldItemChange(slot: " + this.slot + ")";
    }

  }
  ,

  CreativeInventoryAction: class extends Packet {

    static get ID(){ return 24; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 24;
    }

    constructor(slot=0, clickedItem=new Types.Slot()) {
      super();
      this.slot = slot;
      this.clickedItem = clickedItem;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianShort(this.slot);
      this.writeBytes(this.clickedItem.encodeBody(true));
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.slot=this.readBigEndianShort();
      traceDecode('slot');
      this.clickedItem=new Types.Slot().decodeBody(this._buffer);
      this._buffer=this.clickedItem._buffer;
      traceDecode('clickedItem');
      return this;
    }

    /** @return {string} */
    toString() {
      return "CreativeInventoryAction(slot: " + this.slot + ", clickedItem: " + this.clickedItem + ")";
    }

  }
  ,

  UpdateSign: class extends Packet {

    static get ID(){ return 25; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 25;
    }

    constructor(position=0, lines=[]) {
      super();
      this.position = position;
      this.lines = lines;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianLong(this.position);
      for(var dhc5a5c in this.lines) {
        var dhc5a5ct=this.encodeString(this.lines[dhc5a5c]);
        this.writeVaruint(dhc5a5ct.length);
        this.writeBytes(dhc5a5ct);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.position=this.readBigEndianLong();
      traceDecode('position');
      var aramblzm=4;
      this.lines=[];
      for(var dhc5a5c=0;dhc5a5c<aramblzm;dhc5a5c++) {
        var dhc5a5ct=this.readVaruint();
        this.lines[dhc5a5c]=this.decodeString(this.readBytes(dhc5a5ct));
      }
      traceDecode('lines');
      return this;
    }

    /** @return {string} */
    toString() {
      return "UpdateSign(position: " + this.position + ", lines: " + this.lines + ")";
    }

  }
  ,

  Animation: class extends Packet {

    static get ID(){ return 26; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 26;
    }

    // hand
    static get MAIN_HAND(){ return 0; };
    static get OFF_HAND(){ return 1; };

    constructor(hand=0) {
      super();
      this.hand = hand;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.hand);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.hand=this.readVaruint();
      traceDecode('hand');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Animation(hand: " + this.hand + ")";
    }

  }
  ,

  Spectate: class extends Packet {

    static get ID(){ return 27; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 27;
    }

    constructor(player=new Uint8Array(16)) {
      super();
      this.player = player;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.player);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.player=this.readBytes(16);
      traceDecode('player');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Spectate(player: " + this.player + ")";
    }

  }
  ,

  PlayerBlockPlacement: class extends Packet {

    static get ID(){ return 28; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 28;
    }

    // hand
    static get MAIN_HAND(){ return 0; };
    static get OFF_HAND(){ return 1; };

    constructor(position=0, face=0, hand=0, cursorPosition={x:0,y:0,z:0}) {
      super();
      this.position = position;
      this.face = face;
      this.hand = hand;
      this.cursorPosition = cursorPosition;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianLong(this.position);
      this.writeVaruint(this.face);
      this.writeVaruint(this.hand);
      this.writeBigEndianFloat(this.cursorPosition.x);
      this.writeBigEndianFloat(this.cursorPosition.y);
      this.writeBigEndianFloat(this.cursorPosition.z);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.position=this.readBigEndianLong();
      traceDecode('position');
      this.face=this.readVaruint();
      traceDecode('face');
      this.hand=this.readVaruint();
      traceDecode('hand');
      this.cursorPosition={};
      this.cursorPosition.x=this.readBigEndianFloat();
      this.cursorPosition.y=this.readBigEndianFloat();
      this.cursorPosition.z=this.readBigEndianFloat();
      traceDecode('cursorPosition');
      return this;
    }

    /** @return {string} */
    toString() {
      return "PlayerBlockPlacement(position: " + this.position + ", face: " + this.face + ", hand: " + this.hand + ", cursorPosition: " + this.cursorPosition + ")";
    }

  }
  ,

  UseItem: class extends Packet {

    static get ID(){ return 29; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 29;
    }

    // hand
    static get MAIN_HAND(){ return 0; };
    static get OFF_HAND(){ return 1; };

    constructor(hand=0) {
      super();
      this.hand = hand;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.hand);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.hand=this.readVaruint();
      traceDecode('hand');
      return this;
    }

    /** @return {string} */
    toString() {
      return "UseItem(hand: " + this.hand + ")";
    }

  }

}

export { Serverbound };
