/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java316.xml
 */
const Types = {

  Statistic: class extends Buffer {

    constructor(name="", value=0) {
      super();
      this.name = name;
      this.value = value;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5y1=this.encodeString(this.name);
      this.writeVaruint(dhc5y1.length);
      this.writeBytes(dhc5y1);
      this.writeVaruint(this.value);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5y1=this.readVaruint();
      this.name=this.decodeString(this.readBytes(dhc5y1));
      traceDecode('name');
      this.value=this.readVaruint();
      traceDecode('value');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Statistic(name: " + this.name + ", value: " + this.value + ")";
    }

  }
  ,

  BlockChange: class extends Buffer {

    constructor(xz=0, y=0, block=0) {
      super();
      this.xz = xz;
      this.y = y;
      this.block = block;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.xz);
      this.writeByte(this.y);
      this.writeVaruint(this.block);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.xz=this.readByte();
      traceDecode('xz');
      this.y=this.readByte();
      traceDecode('y');
      this.block=this.readVaruint();
      traceDecode('block');
      return this;
    }

    /** @return {string} */
    toString() {
      return "BlockChange(xz: " + this.xz + ", y: " + this.y + ", block: " + this.block + ")";
    }

  }
  ,

  Slot: class extends Buffer {

    constructor(id=0, count=0, damage=0, nbt=new Types.Bytes()) {
      super();
      this.id = id;
      this.count = count;
      this.damage = damage;
      this.nbt = nbt;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBigEndianShort(this.id);
      if(id>0) {
        this.writeByte(this.count);
      }
      if(id>0) {
        this.writeBigEndianShort(this.damage);
      }
      if(id>0) {
        this.writeBytes(this.nbt);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.id=this.readBigEndianShort();
      traceDecode('id');
      if(id>0) {
        this.count=this.readByte();
        traceDecode('count');
      }
      if(id>0) {
        this.damage=this.readBigEndianShort();
        traceDecode('damage');
      }
      if(id>0) {
        this.nbt=Array.from(this._buffer);
        this._buffer=[];
        traceDecode('nbt');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "Slot(id: " + this.id + ", count: " + this.count + ", damage: " + this.damage + ", nbt: " + this.nbt + ")";
    }

  }
  ,

  Icon: class extends Buffer {

    // direction and type
    static get WHITE_ARROW(){ return 0; };
    static get GREEN_ARROW(){ return 1; };
    static get RED_ARROW(){ return 2; };
    static get BLUE_ARROW(){ return 3; };
    static get WHITE_CROSS(){ return 4; };
    static get RED_POINTER(){ return 5; };
    static get WHITE_CIRCLE(){ return 6; };
    static get SMALL_WHITE_CIRCLE(){ return 7; };
    static get MANSION(){ return 8; };
    static get TEMPLE(){ return 9; };

    constructor(directionAndType=0, position={x:0,z:0}) {
      super();
      this.directionAndType = directionAndType;
      this.position = position;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeByte(this.directionAndType);
      this.writeByte(this.position.x);
      this.writeByte(this.position.z);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.directionAndType=this.readByte();
      traceDecode('directionAndType');
      this.position={};
      this.position.x=this.readByte();
      this.position.z=this.readByte();
      traceDecode('position');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Icon(directionAndType: " + this.directionAndType + ", position: " + this.position + ")";
    }

  }
  ,

  Property: class extends Buffer {

    constructor(name="", value="", signed=false, signature="") {
      super();
      this.name = name;
      this.value = value;
      this.signed = signed;
      this.signature = signature;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5y1=this.encodeString(this.name);
      this.writeVaruint(dhc5y1.length);
      this.writeBytes(dhc5y1);
      var dhc5yxz=this.encodeString(this.value);
      this.writeVaruint(dhc5yxz.length);
      this.writeBytes(dhc5yxz);
      this.writeBool(this.signed);
      if(signed==true) {
        var dhc5adyr=this.encodeString(this.signature);
        this.writeVaruint(dhc5adyr.length);
        this.writeBytes(dhc5adyr);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5y1=this.readVaruint();
      this.name=this.decodeString(this.readBytes(dhc5y1));
      traceDecode('name');
      var dhc5yxz=this.readVaruint();
      this.value=this.decodeString(this.readBytes(dhc5yxz));
      traceDecode('value');
      this.signed=this.readBool();
      traceDecode('signed');
      if(signed==true) {
        var dhc5adyr=this.readVaruint();
        this.signature=this.decodeString(this.readBytes(dhc5adyr));
        traceDecode('signature');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "Property(name: " + this.name + ", value: " + this.value + ", signed: " + this.signed + ", signature: " + this.signature + ")";
    }

  }
  ,

  ListAddPlayer: class extends Buffer {

    // gamemode
    static get SURVIVAL(){ return 0; };
    static get CREATIVE(){ return 1; };
    static get ADVENTURE(){ return 2; };
    static get SPECTATOR(){ return 3; };

    constructor(uuid=new Uint8Array(16), name="", properties=[], gamemode=0, latency=0, hasDisplayName=false, displayName="") {
      super();
      this.uuid = uuid;
      this.name = name;
      this.properties = properties;
      this.gamemode = gamemode;
      this.latency = latency;
      this.hasDisplayName = hasDisplayName;
      this.displayName = displayName;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.uuid);
      var dhc5y1=this.encodeString(this.name);
      this.writeVaruint(dhc5y1.length);
      this.writeBytes(dhc5y1);
      this.writeVaruint(this.properties.length);
      for(var dhc5c9zj in this.properties) {
        this.writeBytes(this.properties[dhc5c9zj].encodeBody(true));
      }
      this.writeVaruint(this.gamemode);
      this.writeVaruint(this.latency);
      this.writeBool(this.hasDisplayName);
      if(hasDisplayName==true) {
        var dhc5anbf=this.encodeString(this.displayName);
        this.writeVaruint(dhc5anbf.length);
        this.writeBytes(dhc5anbf);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      var dhc5y1=this.readVaruint();
      this.name=this.decodeString(this.readBytes(dhc5y1));
      traceDecode('name');
      var aramcjcv=this.readVaruint();
      this.properties=[];
      for(var dhc5c9zj=0;dhc5c9zj<aramcjcv;dhc5c9zj++) {
        this.properties[dhc5c9zj]=new Types.Property().decodeBody(this._buffer);
        this._buffer=this.properties[dhc5c9zj]._buffer;
      }
      traceDecode('properties');
      this.gamemode=this.readVaruint();
      traceDecode('gamemode');
      this.latency=this.readVaruint();
      traceDecode('latency');
      this.hasDisplayName=this.readBool();
      traceDecode('hasDisplayName');
      if(hasDisplayName==true) {
        var dhc5anbf=this.readVaruint();
        this.displayName=this.decodeString(this.readBytes(dhc5anbf));
        traceDecode('displayName');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "ListAddPlayer(uuid: " + this.uuid + ", name: " + this.name + ", properties: " + this.properties + ", gamemode: " + this.gamemode + ", latency: " + this.latency + ", hasDisplayName: " + this.hasDisplayName + ", displayName: " + this.displayName + ")";
    }

  }
  ,

  ListUpdateGamemode: class extends Buffer {

    // gamemode
    static get SURVIVAL(){ return 0; };
    static get CREATIVE(){ return 1; };
    static get ADVENTURE(){ return 2; };
    static get SPECTATOR(){ return 3; };

    constructor(uuid=new Uint8Array(16), gamemode=0) {
      super();
      this.uuid = uuid;
      this.gamemode = gamemode;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.uuid);
      this.writeVaruint(this.gamemode);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      this.gamemode=this.readVaruint();
      traceDecode('gamemode');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ListUpdateGamemode(uuid: " + this.uuid + ", gamemode: " + this.gamemode + ")";
    }

  }
  ,

  ListUpdateLatency: class extends Buffer {

    constructor(uuid=new Uint8Array(16), latency=0) {
      super();
      this.uuid = uuid;
      this.latency = latency;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.uuid);
      this.writeVaruint(this.latency);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      this.latency=this.readVaruint();
      traceDecode('latency');
      return this;
    }

    /** @return {string} */
    toString() {
      return "ListUpdateLatency(uuid: " + this.uuid + ", latency: " + this.latency + ")";
    }

  }
  ,

  ListUpdateDisplayName: class extends Buffer {

    constructor(uuid=new Uint8Array(16), hasDisplayName=false, displayName="") {
      super();
      this.uuid = uuid;
      this.hasDisplayName = hasDisplayName;
      this.displayName = displayName;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.uuid);
      this.writeBool(this.hasDisplayName);
      if(hasDisplayName==true) {
        var dhc5anbf=this.encodeString(this.displayName);
        this.writeVaruint(dhc5anbf.length);
        this.writeBytes(dhc5anbf);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      this.hasDisplayName=this.readBool();
      traceDecode('hasDisplayName');
      if(hasDisplayName==true) {
        var dhc5anbf=this.readVaruint();
        this.displayName=this.decodeString(this.readBytes(dhc5anbf));
        traceDecode('displayName');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "ListUpdateDisplayName(uuid: " + this.uuid + ", hasDisplayName: " + this.hasDisplayName + ", displayName: " + this.displayName + ")";
    }

  }
  ,

  Modifier: class extends Buffer {

    // operation
    static get ADD_SUBSTRACT_AMOUNT(){ return 0; };
    static get ADD_SUBSTRACT_AMOUNT_PERCENTAGE(){ return 1; };
    static get MULTIPLY_AMOUNT_PERCENTAGE(){ return 2; };

    constructor(uuid=new Uint8Array(16), amount=.0, operation=0) {
      super();
      this.uuid = uuid;
      this.amount = amount;
      this.operation = operation;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBytes(this.uuid);
      this.writeBigEndianDouble(this.amount);
      this.writeByte(this.operation);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      this.amount=this.readBigEndianDouble();
      traceDecode('amount');
      this.operation=this.readByte();
      traceDecode('operation');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Modifier(uuid: " + this.uuid + ", amount: " + this.amount + ", operation: " + this.operation + ")";
    }

  }
  ,

  Attribute: class extends Buffer {

    constructor(key="", value=.0, modifiers=[]) {
      super();
      this.key = key;
      this.value = value;
      this.modifiers = modifiers;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5zk=this.encodeString(this.key);
      this.writeVaruint(dhc5zk.length);
      this.writeBytes(dhc5zk);
      this.writeBigEndianDouble(this.value);
      this.writeVaruint(this.modifiers.length);
      for(var dhc5brzl in this.modifiers) {
        this.writeBytes(this.modifiers[dhc5brzl].encodeBody(true));
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5zk=this.readVaruint();
      this.key=this.decodeString(this.readBytes(dhc5zk));
      traceDecode('key');
      this.value=this.readBigEndianDouble();
      traceDecode('value');
      var aramb9az=this.readVaruint();
      this.modifiers=[];
      for(var dhc5brzl=0;dhc5brzl<aramb9az;dhc5brzl++) {
        this.modifiers[dhc5brzl]=new Types.Modifier().decodeBody(this._buffer);
        this._buffer=this.modifiers[dhc5brzl]._buffer;
      }
      traceDecode('modifiers');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Attribute(key: " + this.key + ", value: " + this.value + ", modifiers: " + this.modifiers + ")";
    }

  }
  ,

  OptionalPosition: class extends Buffer {

    constructor(hasPosition=false, position=0) {
      super();
      this.hasPosition = hasPosition;
      this.position = position;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBool(this.hasPosition);
      if(hasPosition==true) {
        this.writeBigEndianLong(this.position);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.hasPosition=this.readBool();
      traceDecode('hasPosition');
      if(hasPosition==true) {
        this.position=this.readBigEndianLong();
        traceDecode('position');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "OptionalPosition(hasPosition: " + this.hasPosition + ", position: " + this.position + ")";
    }

  }
  ,

  OptionalUuid: class extends Buffer {

    constructor(hasUuid=false, uuid=new Uint8Array(16)) {
      super();
      this.hasUuid = hasUuid;
      this.uuid = uuid;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeBool(this.hasUuid);
      this.writeBytes(this.uuid);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.hasUuid=this.readBool();
      traceDecode('hasUuid');
      this.uuid=this.readBytes(16);
      traceDecode('uuid');
      return this;
    }

    /** @return {string} */
    toString() {
      return "OptionalUuid(hasUuid: " + this.hasUuid + ", uuid: " + this.uuid + ")";
    }

  }

}

export { Types }
