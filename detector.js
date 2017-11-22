const os = require('os');

const Detector = (() => {
	function Detector(){}
	Detector.prototype.select = {
		stat: {
          uptime: os.uptime(),
          cpus: os.cpus(),
          // mem: os.freemem(),
          // process: os.constants,
		},
		level: {
          pipe: 'some levels'
		},
		process: {
          id: 123,
          name: 'some process name'
		},
		users: {
          options: [],
          // result: os.userInfo([]),
		},
	}
    return Detector;
})();
exports.detector = Detector.prototype.select;