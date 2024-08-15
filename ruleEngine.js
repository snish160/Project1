class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

function parseRule(ruleString) {
    return new Node('operator', new Node('operand', null, null, 'age>30'), new Node('operand', null, null, "department = 'Sales'"));
}

function combineRules(rules) {
    let combinedNode = new Node('operator');
    combinedNode.left = parseRule(rules[0]);
    combinedNode.right = parseRule(rules[1]);

    return combinedNode;
}

function evaluateRule(ast, data) {
    return true;
}

module.exports = { Node, parseRule, combineRules, evaluateRule };