# Rule Engine with AST

## Objective

The goal of this project is to develop a simple 3-tier rule engine application consisting of a User Interface (UI), an API, and a Backend with Data Storage. The rule engine determines user eligibility based on attributes such as age, department, income, and spend. The system uses an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.

## Data Structure

The core data structure used for representing the AST is a `Node` class with the following fields:
- **type**: A string indicating the node type ("operator" for AND/OR, "operand" for conditions).
- **left**: Reference to another `Node` (left child).
- **right**: Reference to another `Node` (right child for operators).
- **value**: Optional value for operand nodes (e.g., number for comparisons).

```python
class Node:
    def __init__(self, type, left=None, right=None, value=None):
        self.type = type
        self.left = left
        self.right = right
        self.value = value
```
# Data Storage
Database Choice
For storing rules and application metadata, a relational database like MySQL or PostgreSQL is recommended.

Schema
The schema should include tables for rules and metadata. Here’s a sample schema:

Rules Table 

Field	Type	Description
rule_id	INT	Primary key, auto-increment
rule_string	TEXT	The rule as a string
created_at	TIMESTAMP	Timestamp of rule creation
updated_at	TIMESTAMP	Timestamp of last update

Metadata Table


Field	Type	Description
attribute_id	INT	Primary key, auto-increment
name	VARCHAR(255)	Attribute name
type	VARCHAR(50)	Attribute type (e.g., number, string)
API Design
create_rule(rule_string)
Description: Converts a rule string into a Node object representing the AST.

Parameters:

rule_string (str): A string representing the rule.
Returns: Node: The root of the AST.

combine_rules(rules)
Description: Combines multiple rule strings into a single AST.

Parameters:

rules (list of str): A list of rule strings.
Returns: Node: The root of the combined AST.

evaluate_rule(ast, data)
Description: Evaluates the rule represented by the AST against provided data.

Parameters:

ast (Node): The root of the rule's AST.
data (dict): Dictionary containing attributes (e.g., {"age": 35, "department": "Sales", "salary": 60000, "experience": 3}).
Returns: bool: True if the user meets the rule's criteria, False otherwise.

# Test Cases
Create individual rules: Use create_rule to generate ASTs from example rules and verify their representation.
Combine rules: Use combine_rules to merge example rules and ensure the resulting AST reflects the combined logic.
Evaluate rules: Implement sample JSON data and test evaluate_rule with different scenarios.
Additional rules: Explore combining more rules and test the functionality.
Bonus Features
Error Handling: Implement error handling for invalid rule strings or data formats.
Attribute Validation: Validate that attributes are part of a catalog.
Rule Modification: Allow modification of existing rules, including changing operators, operand values, or sub-expressions.
User-defined Functions: Extend the system to support user-defined functions within the rule language for advanced conditions.
# Installation
Clone the repository:

sh
Copy code
git clone <repository-url>
cd <repository-directory>
Install dependencies:

sh
Copy code
pip install -r requirements.txt
Set up the database and run migrations:

sh
Copy code
python manage.py migrate
Start the application:

sh
Copy code
python manage.py runserver
# Usage
Create Rules: Use the create_rule API endpoint to create new rules.
Combine Rules: Use the combine_rules API endpoint to combine multiple rules.
Evaluate Rules: Use the evaluate_rule API endpoint to check user eligibility based on combined rules.
