'use strict';

import EventEmitter from 'metal-events';

const emitter = new EventEmitter();
debugger;
emitter.many('myEvent', 2, () => console.log('triggered'));

emitter.emit('myEvent');
emitter.emit('myEvent');
emitter.emit('myEvent');
