var lineReader = require('line-reader');
var fs = require('fs');
var child = require('child_process');
var exec = child.exec;

lineReader.eachLine('file.txt', function(line) {
	var stat = fs.lstatSync(line),
		com  = 'scp',
		dir = line.replace('/Users/yaoyao/web/egret/hor/hornbill_apps', '/home/work/hornbill/apps');
	if (stat.isDirectory()) {
		var arr = dir.split('/');
		arr.pop();
		arr.pop();
		dir = arr.join('/');
		exec("./bash/srcp " + line + ' ' + dir, function (error, stdout, stderr) {
			if (stderr) {
				console.log(stderr)
			}else{
				console.log(stdout)
			}
		});
	}else{
		exec("./bash/sscp " + line + ' ' + dir, function (error, stdout, stderr) {
			if (stderr) {
				console.log(stderr)
			}else{
				console.log(stdout)
			}
		});
	}
});