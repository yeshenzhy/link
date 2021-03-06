/*
 * @Author: suxiao
 * @Date: 2019-06-29 12:32:04
 * @LastEditors: suxiao
 * @LastEditTime: 2019-06-29 21:45:11
 * @Description: 头部注释-介绍开发人员信息
 * @新建文件，养成良好的编码习惯
 */
/**
 * @description: [基础类]
 * @return {class} result [返回一个类]
 */
let _len = Symbol('_len')
class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
    this.previous = null;
  }
}
/**
 * @desc: 单向链表类
 * @ADT模型
 *
 *@function find(ele): [根据element查找其在链表中的节点]
 *@function findPre(ele): [根据element查找当前节点上一个节点]
 *@function insert(ele,item): [在已知节点后面向链表插入一个元素]
 *@function remove(ele): [删除一个节点]
 *@function display(): [显示链表中的元素]
 *@function show(): [只显示当前节点]
 *@function advance(n): [使当前节点向前移动n个节点]
 *@function isEmpty(): [判断链表是否为空]
 *@function size(n): [返回链表节点数]
 */
class Link {
  constructor() {
    this.head = new Node('head');
    this.currentNode = this.head;
    this[_len] = 1;
  }
  /**
   * @description: [根据节点值查找链表]
   * @param {String} ele [节点值]
   * @return {Object} result [链表]
   */
  find(ele) {
    let currentNode = this.head;
    while (currentNode.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  /**
   * @description: [查找上一个节点]
   * @param {String} ele [节点值]
   * @return {Object} result [当前节点对象]
   */
  findPre(ele) {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode
  }
  /**
   * @description: [插入一个节点]
   * @param {String} ele [插入的节点值]
   * @param {String} item [插入位置的节点名]
   * @return {Object} result [新的链表]
   */
  insert(ele, item) {
    const newNode = new Node(ele);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this[_len]++;
  }
  /**
   * @description: [移除一个节点]
   * @param {String} ele [移除节点名称]
   * @return {Object} result [新的链表]
   */
  remove(ele) {
    let preNode = this.findPre(ele)
    while (preNode.next != null) {
      preNode.next = preNode.next.next;
      this[_len]--;
    }
  }
  /**
   * @description: [显示链表所有节点]
   * @return {Array} result [所有节点element]
   */
  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
  /**
   * @description: [显示链表当前节点]
   * @return {String} result [当前节点]
   */
  show() {
    return this.currentNode.element;
  }
  /**
   * @description: [当前节点（this.currentNode）向前移动N个位置]
   * @param {Number} n [移动的位数]
   * @return {Object} result [新的节点]
   */
  advance(n) {
    if (n <= 0) {
      return
    }
    let index = 0;
    while (index < n && this.currentNode.next != null) {
      this.currentNode = this.currentNode.next;
      index++;
    }
  }
  /**
   * @description: [判断链表是否为空]
   * @return {Boolean} result [布尔值]
   */
  isEmpty() {
    return this[_len] === 0;
  }
  /**
   * @description: [链表长度]
   * @return {Number} result [链表节点数]
   */
  size() {
    return this[_len];
  }
}

const link = new Link();
link.insert('aaa', 'head');
link.insert('bbb', 'aaa');
link.advance(2);
console.log(link.show());
console.log(link.size())