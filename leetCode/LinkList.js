class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// 1 ? toInteger
let head = new Node(1);												//		1  toInteger(0,1)
head.next = new Node(0);												//       	 0 toInteger (1)
head.next.next = new Node(1);											//              1

