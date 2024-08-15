const { parseRule, combineRules, evaluateRule } = require('./ruleEngine');

test('Create and evaluate individual rules', () => {
    const rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)";
    const ast1 = parseRule(rule1);
    expect(ast1).toBeDefined();

    const sampleData = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
    const result = evaluateRule(ast1, sampleData);
    expect(result).toBe(true);
});

test('Combine and evaluate rules', () => {
    const rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)";
    const rule2 = "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)";
    const combinedAST = combineRules([rule1, rule2]);

    const sampleData = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
    const result = evaluateRule(combinedAST, sampleData);
    expect(result).toBe(true);
});