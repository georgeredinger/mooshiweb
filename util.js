function hexdump(data) {
    const linelen = 16;
    let a = [];
    let b = [];
    for (let i = 0; i < data.length; i++) {
	a.push(('00' + data[i].toString(16)).slice(-2));
	if (data[i] > 31 && data[i] < 127)
	    b.push(String.fromCharCode(data[i]));
	else
	    b.push('.');
    }

    lines = [];
    for (let i = 0; i < a.length / linelen; i++) {
	let addrpart = String("0000" + i * linelen).slice(-4);
	let hexpart = a.slice(i * linelen, i * linelen + linelen).join(' ');
	let txtpart = b.slice(i * linelen, i * linelen + linelen).join('');
	lines.push(addrpart + ': ' + hexpart + '    |' + txtpart + '|');
    }
    return(lines.join('\n'));
}
