function military(char) {
	var mi = {
		a : 'Alpha',
		b : 'Bravo',
		c : 'Charlie',
		d : 'Delta',
		e : 'Echo',
		f : 'Foxtrot',
		g : 'Golf',
		h : 'Hotel',
		i : 'India',
		j : 'Juliett',
		k : 'Kilo',
		l : 'Lima',
		m : 'Mike',
		n : 'November',
		o : 'Oscar',
		p : 'Papa',
		q : 'Quebec',
		r : 'Romeo',
		s : 'Sierra',
		t : 'Tango',
		u : 'Uniform',
		v : 'Victor',
		w : 'Whiskey',
		x : 'Xray',
		y : 'Yankee',
		z : 'Zulu',
		1 : 'One',
		2 : 'Two',
		3 : 'Three',
		4 : 'Four',
		5 : 'Five',
		6 : 'Six',
		7 : 'Seven',
		8 : 'Eight',
		9 : 'Nine',
		0 : 'Zero'
	};
	if (char === undefined || typeof char != 'string' || char.length > 1 || char.length < 1) {
		return;
	}
	return mi[char];
}

String.prototype.toMilitary = function() {
	var mi = {
		a : 'Alpha',
		b : 'Bravo',
		c : 'Charlie',
		d : 'Delta',
		e : 'Echo',
		f : 'Foxtrot',
		g : 'Golf',
		h : 'Hotel',
		i : 'India',
		j : 'Juliett',
		k : 'Kilo',
		l : 'Lima',
		m : 'Mike',
		n : 'November',
		o : 'Oscar',
		p : 'Papa',
		q : 'Quebec',
		r : 'Romeo',
		s : 'Sierra',
		t : 'Tango',
		u : 'Uniform',
		v : 'Victor',
		w : 'Whiskey',
		x : 'Xray',
		y : 'Yankee',
		z : 'Zulu',
		1 : 'One',
		2 : 'Two',
		3 : 'Three',
		4 : 'Four',
		5 : 'Five',
		6 : 'Six',
		7 : 'Seven',
		8 : 'Eight',
		9 : 'Nine',
		0 : 'Zero',
		' ' : '/'
	};
	var a = this.split('');
	for (var i=0;i<a.length;i++) {
		a[i] = mi[a[i].toLowerCase()];
	}
	return a.join(' ');
}

String.prototype.fromMilitary = function() {
	var a = this.split(' '), b = [];
	for (var i=0;i<a.length;i++) {
		b.push(a[i].charAt().toLowerCase());
	}
	return b.join('').replace(/\//g, ' ')			;
}