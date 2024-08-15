const { parseRule, combineRules, evaluateRule } = require('./ruleEngine');

const rule1 = "((age > 30 AND department = 'Sales') OR ( age<25 AND department = 'marketing')) AND (salary > 50000 OR experience > 5)";
const rule2 = "((age > 25 AND department = 'marketing')) AND (salary > 20000 OR experience > 5) ";

const ast1 = parseRule(rule1);
const ast2 = parseRule(rule2);

const combinedAST = combineRules([rule1, rule2]);

const sampleData = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
const result = evaluateRule(combinedAST, sampleData);

console.log('Result', result);