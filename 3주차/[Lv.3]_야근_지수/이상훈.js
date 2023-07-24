class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    const { heap } = this;
    heap.push(value);

    let child = heap.length - 1;
    let parent = Math.floor(child / 2);

    while (child > 1) {
      if (heap[parent] > heap[child]) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent;
      parent = Math.floor(child / 2);
    }
  }

  pop() {
    const { heap } = this;
    if (this.size() <= 0) return null;
    if (this.size() === 1) return heap.pop();

    const result = heap[1];
    heap[1] = heap.pop();

    let parent = 1;
    let child = 2;

    while (child < heap.length) {
      if (child + 1 < heap.length && heap[child + 1] > heap[child]) child++;
      if (heap[parent] > heap[child]) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      parent = child;
      child *= 2;
    }

    return result;
  }

  peek() {
    const { heap } = this;
    return heap[1];
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(n, works) {
  const heap = new MaxHeap();

  works.forEach((work) => {
    heap.push(work);
  });

  while (n > 0 && heap.peek() > 0) {
    const value = heap.pop();
    heap.push(value - 1);
    n--;
  }

  return heap.heap.filter((idx) => idx !== 0).reduce((acc, value) => acc + value * value, 0);
}
