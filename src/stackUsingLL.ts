interface Node<T> {
	value: T,
	previous: Node<T>,
}

class Stack<T> {
	private length:number;
	private head?:Node<T>;
	private maxStack?:Stack<T>;

	constructor() {
		this.length = 0
		this.head = undefined
		this.maxStack = undefined
	}
	push() {

	}

	pop() {

	}

	max() {

	}





}