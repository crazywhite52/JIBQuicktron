var sha512 = require("js-sha512");
export default class ApiService {
  constructor() {
    this.GetSecretUpdate = this.GetSecretUpdate.bind(this);
    this.IPAdress = "http://172.18.0.162";
    this.PortAddress = "9500";
    this.user = "jibmis";
    this.jobid = "0123456789";
    this.password = "JIBmis2020**";
  }
  GetSecretUpdate() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var years = now.getFullYear();
    // var hours = now.getHours();
    var hours = ("0" + now.getHours()).slice(-2);
    var fullday = years + month + day + hours;
    var fullmath = "**JIB//" + this.password + "//" + fullday + "**";
    var secret = sha512(fullmath);
    // console.log(fullmath)
    console.log(secret);
    return secret;
  }
  AuthenTest() {
    // example
    let test = Array();
    test = {
      connection: true,
      access: true
    };
    try {
      var pathname = "/authtest";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        },
        body: JSON.stringify(test)
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  // SPACE
  searchSpace(params) {
    // example
    // let params  = Array();
    // params = {
    //   type: "MIS01",
    //   status: true,
    //   volumn:100
    // };
    try {
      var pathname = "/space/searchSpace?";
      if (typeof params.type != "undefined") {
        pathname = pathname + "type=" + params.type + "&";
      }
      if (typeof params.status != "undefined") {
        pathname = pathname + "status=" + params.status + "&";
      }
      if (typeof params.volumn != "undefined") {
        pathname = pathname + "volumn=" + params.volumn + "&";
      }
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  willCreateSpace() {
    try {
      var pathname = "/space/willCreateSpace";
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  imageList() {
    try {
      var pathname = "/space/image_list";
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  createSpace(bodysend) {
    // example bodysend
    // let dimension = Array();
    // dimension = {
    //   width: 10,
    //   length: 10,
    //   height: 10
    // };
    // let bodysend = Array();
    // bodysend = {
    //   type: "MIS02",
    //   dimension: dimension,
    //   desc: "Space description",
    //   status: true,
    //   comment: "",
    //   image: ""
    // };
    try {
      var pathname = "/space/createSpace";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        },
        body: JSON.stringify(bodysend)
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  willUpdateSpace(id) {
    // example id="5d6c9f2158e7bb04419db474"
    try {
      var pathname = "/space/willUpdateSpace?id=" + id;
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  updateSpace(bodysend) {
    // example bodysend
    // let dimension = Array();
    // let filter = Array();
    // let update = Array();
    // let bodysend = Array();
    // filter = {
    //   _id: "5d6a420a58e7bb04419db471"
    // };
    // update = {
    //   image: "SSH06001B"
    // };
    // bodysend = {
    //   filter: filter,
    //   update: update
    // };

    try {
      var pathname = "/space/updateSpace";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        },
        body: JSON.stringify(bodysend)
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  // LOCATION
  searchLocation(params) {
    // example
    // let params  = Array();
    // params = {
    //   // name:"MIS",
    //   shelf:"000",
    //   type:"def",
    //   volumn:2001,
    //   isHigh:false,
    //   heavyLoad:false,
    //   status:true,
    // };
    try {
      var pathname = "/location/searchLocation?";
      if (typeof params.name != "undefined") {
        pathname = pathname + "name=" + params.name + "&";
      }
      if (typeof params.shelf != "undefined") {
        pathname = pathname + "shelf=" + params.shelf + "&";
      }
      if (typeof params.type != "undefined") {
        pathname = pathname + "space.type=" + params.type + "&";
      }
      if (typeof params.volumn != "undefined") {
        pathname = pathname + "space.volumn=" + params.volumn + "&";
      }
      if (typeof params.isHigh != "undefined") {
        pathname = pathname + "isHigh=" + params.isHigh + "&";
      }
      if (typeof params.heavyLoad != "undefined") {
        pathname = pathname + "heavyLoad=" + params.heavyLoad + "&";
      }
      if (typeof params.status != "undefined") {
        pathname = pathname + "status=" + params.status + "&";
      }
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  willCreateLocation() {
    try {
      var pathname = "/location/willCreateLocation";
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  createLocation(bodysend) {
    // example bodysend
    // ตัวอย่างการสร้าง Params
    // let bodysend = Array();
    // let space = Array();
    // space = {
    //   space_id: "5d6c9f2158e7bb04419db474"
    // };
    // bodysend = {
    //   name: "JIB-MISTEST-0002",
    //   shelf: "SID000-A00001",
    //   desc: "MIS TEST STARTUP",
    //   space: space,
    //   isHigh: false,
    //   heavyLoad: false,
    //   status: true
    // };
    try {
      var pathname = "/location/createLocation";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        },
        body: JSON.stringify(bodysend)
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  willUpdateLocation(id) {
    // example id="5d6cadbb58e7bb04419db475"
    try {
      var pathname = "/location/willUpdateLocation?id=" + id;
      var options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        }
        // body: []
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
  updateLocation(bodysend) {
    // example bodysend
    // ตัวอย่างการสร้าง Params
    //  let bodysend = Array();
    //  let filter = Array();
    //  let space = Array();
    //  let update = Array();
    //  filter = {
    //    _id: "5d6cadbb58e7bb04419db475"
    //  };
    //  space = {
    //    space_id: "5d6c9f2158e7bb04419db474"
    //  };
    //  update = {
    //    shelf: "SID000-A00001",
    //    desc: "MIS TEST STARTUP",
    //    space: space,
    //    isHigh: false,
    //    heavyLoad: false,
    //    status: true
    //  };
    //  bodysend = {
    //    filter: filter,
    //    update: update,
    //  };
    try {
      var pathname = "/location/updateLocation";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: this.user,
          secret: this.GetSecretUpdate(),
          jobid: this.jobid
        },
        body: JSON.stringify(bodysend)
      };
      var links = this.IPAdress + ":" + this.PortAddress + pathname;
      return fetch(links, options)
        .then(response => response.json())
        .then(responseData => {
          return Promise.resolve(responseData);
        });
    } catch (err) {
      return err;
    }
  }
}
