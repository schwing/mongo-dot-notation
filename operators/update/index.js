﻿'use strict'

module.exports.isOperator = function(obj){
	return obj && obj instanceof Operator
}

function Operator(name, operatorName){
	this.name = name;
	this.operatorName = operatorName || name;
}

Operator.prototype.value = function(val){
	if (typeof(val) === 'undefined')
		return this._value;
	
	this._value = val;
	return this;
}

module.exports.$set = x => new Operator('$set').value(x)
module.exports.$inc = x => new Operator('$inc').value(isNaN(Number(x)) ? 1 : x)
module.exports.$max = x => new Operator('$max').value(x)
module.exports.$min = x => new Operator('$min').value(x)
module.exports.$mul = x => new Operator('$mul').value(isNaN(Number(x)) ? 1 : x)
module.exports.$rename = x => new Operator('$rename').value(x)
module.exports.$setOnInsert = x => new Operator('$setOnInsert').value(x)
module.exports.$unset = () => new Operator('$unset').value('')
module.exports.$currentDate = () => new Operator('$currentDate').value({$type: 'date'})
module.exports.$timestamp = () => new Operator('$timestamp', '$currentDate').value({$type: 'timestamp'})