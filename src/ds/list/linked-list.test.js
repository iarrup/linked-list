import {Item, LinkedList} from './linked-list'

describe('Item is the basic node for a linked list', () => {
  test('node can be created with a value, or with both value and next node', () => {
    let n = new Item(10)
    expect(n.getValue()).toBe(10)
  });
  
  test('node can be created with a value, or with both value and next node', () => {
    let n = new Item(10)
    let nn = new Item(20, n)
    expect(nn.getValue()).toBe(20)
    expect(nn.getNext()).toBe(n)

  });

});

describe('LinkedList using Item', () => {
  test('Empty Linked list with head and tail pointing to null', () => {
    let ll = new LinkedList();
    expect(ll.head()).toBe(null);
    expect(ll.tail()).toBe(null);
    expect(ll.length()).toBe(0);
  });

  test('Linked list - prepend an element', () => {
    let ll = new LinkedList();
    ll.prepend(1)
    expect(ll.head().getValue()).toBe(1);
    expect(ll.tail().getValue()).toBe(1);
    expect(ll.length()).toBe(1);
    
    ll.prepend(2)
    expect(ll.head().getValue()).toBe(2);
    expect(ll.tail().getValue()).toBe(1);
    expect(ll.length()).toBe(2);

    ll.prepend(3)
    const first = ll.head()
    const second = first.getNext()
    const third = second.getNext()

    expect(first.getValue()).toBe(3)
    expect(second.getValue()).toBe(2)
    expect(third.getValue()).toBe(1)

    expect(second.getPrev().getValue()).toBe(3)

  });

  test('Linked list - append an element', () => {
    let ll = new LinkedList();
    ll.append(1)
    expect(ll.head().getValue()).toBe(1);
    expect(ll.tail().getValue()).toBe(1);
    expect(ll.length()).toBe(1);
    
    ll.append(2)
    expect(ll.head().getValue()).toBe(1);
    expect(ll.tail().getValue()).toBe(2);
    expect(ll.length()).toBe(2);

    const first = ll.head()
    const second = ll.tail()
    expect(first.getNext()).toBe(second)
    expect(second.getPrev()).toBe(first)
    expect(first.getPrev()).toBe(null)
    expect(second.getNext()).toBe(null)
  });

  test('Linked list - remove from first', () => {
    let ll = new LinkedList();
    expect(ll.removeFromFront()).toBe(undefined)

    ll.append(1)
    const fn = ll.removeFromFront();
    expect(fn.getValue()).toBe(1);
    expect(fn.getNext()).toBe(null)
    expect(fn.getPrev()).toBe(null)
    expect(ll.head()).toBe(null)
    expect(ll.tail()).toBe(null)
    expect(ll.length()).toBe(0);
    

    ll.append(1)
    ll.append(2)
    ll.append(3)
    
    const fn1 = ll.removeFromFront();
    expect(fn1.getValue()).toBe(1);
    expect(fn1.getNext()).toBe(null)
    expect(fn1.getPrev()).toBe(null)
    expect(ll.head().getValue()).toBe(2);
    expect(ll.length()).toBe(2);
    expect(ll.head().getPrev()).toBe(null)
  });

  test('Linked list - remove from last', () => {
    let ll = new LinkedList();
    expect(ll.removeFromEnd()).toBe(undefined)

    ll.append(1)
    const last = ll.removeFromEnd();
    expect(last.getValue()).toBe(1);
    expect(last.getNext()).toBe(null)
    expect(last.getPrev()).toBe(null)
    expect(ll.head()).toBe(null)
    expect(ll.tail()).toBe(null)
    expect(ll.length()).toBe(0);
    

    ll.append(1)
    ll.append(2)
    ll.append(3)
    
    const last1 = ll.removeFromEnd();
    expect(last1.getValue()).toBe(3);
    expect(last1.getNext()).toBe(null)
    expect(last1.getPrev()).toBe(null)
    expect(ll.head().getValue()).toBe(1);
    expect(ll.tail().getValue()).toBe(2);
    expect(ll.length()).toBe(2);
    expect(ll.tail().getNext()).toBe(null);
  });

  test('Linked list - get a node from a given index', () => {
    let ll = new LinkedList();
    ll.append(1)
    ll.append(2)
    ll.append(3)
    ll.append(4)
    ll.append(5)
    ll.append(6)
    
    expect(ll.get(0)).toBe(1);
    expect(ll.get(2)).toBe(3);
    expect(ll.get(ll.length() - 1)).toBe(6);
    expect(ll.get(ll.length())).toBe(undefined);
    expect(ll.get(-1)).toBe(undefined);

  });
  
  test('Linked list - remove a given node', () => {
    let ll = new LinkedList();
    ll.append(0)
    expect(ll.removeAt(0)).toBe(0)

  });

});
