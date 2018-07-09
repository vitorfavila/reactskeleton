import Noty from 'noty';
import swal from 'sweetalert';

require("noty/src/noty.scss");
require("noty/src/themes/metroui.scss");

export function Notify(type, message, time = null) {
    new Noty({
        layout: 'topRight',
        timeout: 2000,
        theme: 'metroui',
        text: message,
        type: type,
        timeout: typeof time === 'number' ? time : 2000,
    }).show();
}

export function Swal(type, title, text = null) {
    // type = "warning", "error", "success" and "info"
    swal({
      title: title,
      text: typeof text === 'string' ? text : false,
      icon: type,
    });
}

// class Notify
// {
//     constructor(type, message, time = null) {
//         this.type = type;
//         this.message = message;
//         this.time = time;
//       }

//       show() {

//       }
// }

