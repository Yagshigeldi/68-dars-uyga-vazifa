function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(0));
console.log(identity<string>("str"));
console.log(identity<object>({}));

class Stack<T> {
    values: T[] = [];
    push(value: T): void {
        this.values.push(value);
    }

    pop(): T | undefined {
        return this.values.pop()
    }
}