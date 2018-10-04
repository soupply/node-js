/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java393.xml
 */
import Packet from 'packet';
import Types from 'types';

const Status = {

  Handshake: class extends Packet {

    static get ID(){ return 0; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 0;
    }

    // next
    static get STATUS(){ return 1; };
    static get LOGIN(){ return 2; };

    constructor(protocol=393, serverAddress="", serverPort=0, next=0) {
      super();
      this.protocol = protocol;
      this.serverAddress = serverAddress;
      this.serverPort = serverPort;
      this.next = next;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.protocol);
      var dhc5zjzj=this.encodeString(this.serverAddress);
      this.writeVaruint(dhc5zjzj.length);
      this.writeBytes(dhc5zjzj);
      this.writeBigEndianShort(this.serverPort);
      this.writeVaruint(this.next);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.protocol=this.readVaruint();
      traceDecode('protocol');
      var dhc5zjzj=this.readVaruint();
      this.serverAddress=this.decodeString(this.readBytes(dhc5zjzj));
      traceDecode('serverAddress');
      this.serverPort=this.readBigEndianShort();
      traceDecode('serverPort');
      this.next=this.readVaruint();
      traceDecode('next');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Handshake(protocol: " + this.protocol + ", serverAddress: " + this.serverAddress + ", serverPort: " + this.serverPort + ", next: " + this.next + ")";
    }

  }
  ,

  Request: class extends Packet {

    static get ID(){ return 0; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 0;
    }

    constructor() {
      super();
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      return this;
    }

    /** @return {string} */
    toString() {
      return "Request()";
    }

  }
  ,

  Response: class extends Packet {

    static get ID(){ return 0; };

    static get CLIENTBOUND(){ return true; };
    static get SERVERBOUND(){ return false; };

    getId() {
      return 0;
    }

    constructor(json="") {
      super();
      this.json = json;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5c9=this.encodeString(this.json);
      this.writeVaruint(dhc5c9.length);
      this.writeBytes(dhc5c9);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5c9=this.readVaruint();
      this.json=this.decodeString(this.readBytes(dhc5c9));
      traceDecode('json');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Response(json: " + this.json + ")";
    }

  }
  ,

  Latency: class extends Packet {

    static get ID(){ return 1; };

    static get CLIENTBOUND(){ return true; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 1;
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
      this.writeBigEndianLong(this.id);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.id=this.readBigEndianLong();
      traceDecode('id');
      return this;
    }

    /** @return {string} */
    toString() {
      return "Latency(id: " + this.id + ")";
    }

  }

}

module.export = Status;
