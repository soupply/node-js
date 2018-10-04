/*
 * This file has been automatically generated by Soupply and released under the MIT license.
 * Generated from data/java393.xml
 */
import Packet from 'packet';
import Types from 'types';

const LoginServerbound = {

  LoginStart: class extends Packet {

    static get ID(){ return 0; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 0;
    }

    constructor(username="") {
      super();
      this.username = username;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      var dhc5cvbf=this.encodeString(this.username);
      this.writeVaruint(dhc5cvbf.length);
      this.writeBytes(dhc5cvbf);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var dhc5cvbf=this.readVaruint();
      this.username=this.decodeString(this.readBytes(dhc5cvbf));
      traceDecode('username');
      return this;
    }

    /** @return {string} */
    toString() {
      return "LoginStart(username: " + this.username + ")";
    }

  }
  ,

  EncryptionResponse: class extends Packet {

    static get ID(){ return 1; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 1;
    }

    constructor(sharedSecret=new Uint8Array(0), verifyToken=new Uint8Array(0)) {
      super();
      this.sharedSecret = sharedSecret;
      this.verifyToken = verifyToken;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.sharedSecret.length);
      this.writeBytes(this.sharedSecret);
      this.writeVaruint(this.verifyToken.length);
      this.writeBytes(this.verifyToken);
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      var aramchcv=this.readVaruint();
      this.sharedSecret=this.readBytes(aramchcv);
      traceDecode('sharedSecret');
      var aramdvaz=this.readVaruint();
      this.verifyToken=this.readBytes(aramdvaz);
      traceDecode('verifyToken');
      return this;
    }

    /** @return {string} */
    toString() {
      return "EncryptionResponse(sharedSecret: " + this.sharedSecret + ", verifyToken: " + this.verifyToken + ")";
    }

  }
  ,

  PluginResponse: class extends Packet {

    static get ID(){ return 2; };

    static get CLIENTBOUND(){ return false; };
    static get SERVERBOUND(){ return true; };

    getId() {
      return 2;
    }

    constructor(messageId=0, successful=false, data=new Types.Bytes()) {
      super();
      this.messageId = messageId;
      this.successful = successful;
      this.data = data;
    }

    /** @return {Uint8Array} */
    encodeBody(reset) {
      if(reset) {
        this.reset();
      }
      this.writeVaruint(this.messageId);
      this.writeBool(this.successful);
      if(successful==true) {
        this.writeBytes(this.data);
      }
      return new Uint8Array(this._buffer);
    }

    /** @param {(Uint8Array|Array)} buffer */
    decodeBody(_buffer) {
      this._buffer=Array.from(_buffer);
      initDecode(this);
      this.messageId=this.readVaruint();
      traceDecode('messageId');
      this.successful=this.readBool();
      traceDecode('successful');
      if(successful==true) {
        this.data=Array.from(this._buffer);
        this._buffer=[];
        traceDecode('data');
      }
      return this;
    }

    /** @return {string} */
    toString() {
      return "PluginResponse(messageId: " + this.messageId + ", successful: " + this.successful + ", data: " + this.data + ")";
    }

  }

}

module.export = LoginServerbound;
