import { SnippetMapping } from '../types';

type PropTypesMapping = {
  propTypeAny: 'ptany';
  propTypeArray: 'pta';
  propTypeArrayOf: 'ptao';
  propTypeArrayOfRequired: 'ptaor';
  propTypeArrayRequired: 'ptar';
  propTypeBool: 'ptb';
  propTypeBoolRequired: 'ptbr';
  propTypeElement: 'ptel';
  propTypeElementRequired: 'ptelr';
  propTypeEnum: 'pte';
  propTypeEnumRequired: 'pter';
  propTypeExact: 'ptex';
  propTypeExactRequired: 'ptexr';
  propTypeFunc: 'ptf';
  propTypeFuncRequired: 'ptfr';
  propTypeInstanceOf: 'pti';
  propTypeInstanceOfRequired: 'ptir';
  propTypeNode: 'ptnd';
  propTypeNodeRequired: 'ptndr';
  propTypeNumber: 'ptn';
  propTypeNumberRequired: 'ptnr';
  propTypeObject: 'pto';
  propTypeObjectOf: 'ptoo';
  propTypeObjectOfRequired: 'ptoor';
  propTypeObjectRequired: 'ptor';
  propTypeOneOfType: 'ptet';
  propTypeOneOfTypeRequired: 'ptetr';
  propTypeShape: 'ptsh';
  propTypeShapeRequired: 'ptshr';
  propTypeString: 'pts';
  propTypeStringRequired: 'ptsr';
};

export type PropTypesSnippet = SnippetMapping<PropTypesMapping>;

const propTypeArray: PropTypesSnippet = {
  key: 'propTypeArray',
  prefix: 'pta',
  body: ['PropTypes.array'],
  description: 'Array prop type',
};

const propTypeArrayRequired: PropTypesSnippet = {
  key: 'propTypeArrayRequired',
  prefix: 'ptar',
  body: ['PropTypes.array.isRequired'],
  description: 'Array prop type required',
};

const propTypeBool: PropTypesSnippet = {
  key: 'propTypeBool',
  prefix: 'ptb',
  body: ['PropTypes.bool'],
  description: 'Bool prop type',
};

const propTypeBoolRequired: PropTypesSnippet = {
  key: 'propTypeBoolRequired',
  prefix: 'ptbr',
  body: ['PropTypes.bool.isRequired'],
  description: 'Bool prop type required',
};

const propTypeFunc: PropTypesSnippet = {
  key: 'propTypeFunc',
  prefix: 'ptf',
  body: ['PropTypes.func'],
  description: 'Func prop type',
};

const propTypeFuncRequired: PropTypesSnippet = {
  key: 'propTypeFuncRequired',
  prefix: 'ptfr',
  body: ['PropTypes.func.isRequired'],
  description: 'Func prop type required',
};

const propTypeNumber: PropTypesSnippet = {
  key: 'propTypeNumber',
  prefix: 'ptn',
  body: ['PropTypes.number'],
  description: 'Number prop type',
};

const propTypeNumberRequired: PropTypesSnippet = {
  key: 'propTypeNumberRequired',
  prefix: 'ptnr',
  body: ['PropTypes.number.isRequired'],
  description: 'Number prop type required',
};

const propTypeObject: PropTypesSnippet = {
  key: 'propTypeObject',
  prefix: 'pto',
  body: ['PropTypes.object'],
  description: 'Object prop type',
};

const propTypeObjectRequired: PropTypesSnippet = {
  key: 'propTypeObjectRequired',
  prefix: 'ptor',
  body: ['PropTypes.object.isRequired'],
  description: 'Object prop type required',
};

const propTypeString: PropTypesSnippet = {
  key: 'propTypeString',
  prefix: 'pts',
  body: ['PropTypes.string'],
  description: 'String prop type',
};

const propTypeStringRequired: PropTypesSnippet = {
  key: 'propTypeStringRequired',
  prefix: 'ptsr',
  body: ['PropTypes.string.isRequired'],
  description: 'String prop type required',
};

const propTypeNode: PropTypesSnippet = {
  key: 'propTypeNode',
  prefix: 'ptnd',
  body: ['PropTypes.node'],
  description:
    'Anything that can be rendered: numbers, strings, elements or an array',
};

const propTypeNodeRequired: PropTypesSnippet = {
  key: 'propTypeNodeRequired',
  prefix: 'ptndr',
  body: ['PropTypes.node.isRequired'],
  description:
    'Anything that can be rendered: numbers, strings, elements or an array required',
};

const propTypeElement: PropTypesSnippet = {
  key: 'propTypeElement',
  prefix: 'ptel',
  body: ['PropTypes.element'],
  description: 'React element prop type',
};

const propTypeElementRequired: PropTypesSnippet = {
  key: 'propTypeElementRequired',
  prefix: 'ptelr',
  body: ['PropTypes.element.isRequired'],
  description: 'React element prop type required',
};

const propTypeInstanceOf: PropTypesSnippet = {
  key: 'propTypeInstanceOf',
  prefix: 'pti',
  body: ['PropTypes.instanceOf($0)'],
  description: 'Is an instance of a class prop type',
};

const propTypeInstanceOfRequired: PropTypesSnippet = {
  key: 'propTypeInstanceOfRequired',
  prefix: 'ptir',
  body: ['PropTypes.instanceOf($0).isRequired'],
  description: 'Is an instance of a class prop type required',
};

const propTypeEnum: PropTypesSnippet = {
  key: 'propTypeEnum',
  prefix: 'pte',
  body: ["PropTypes.oneOf(['$0'])"],
  description: 'Prop type limited to specific values by treating it as an enum',
};

const propTypeEnumRequired: PropTypesSnippet = {
  key: 'propTypeEnumRequired',
  prefix: 'pter',
  body: ["PropTypes.oneOf(['$0']).isRequired"],
  description:
    'Prop type limited to specific values by treating it as an enum required',
};

const propTypeOneOfType: PropTypesSnippet = {
  key: 'propTypeOneOfType',
  prefix: 'ptet',
  body: ['PropTypes.oneOfType([', '  $0', '])'],
  description: 'An object that could be one of many types',
};

const propTypeOneOfTypeRequired: PropTypesSnippet = {
  key: 'propTypeOneOfTypeRequired',
  prefix: 'ptetr',
  body: ['PropTypes.oneOfType([', '  $0', ']).isRequired'],
  description: 'An object that could be one of many types required',
};

const propTypeArrayOf: PropTypesSnippet = {
  key: 'propTypeArrayOf',
  prefix: 'ptao',
  body: ['PropTypes.arrayOf($0)'],
  description: 'An array of a certain type',
};

const propTypeArrayOfRequired: PropTypesSnippet = {
  key: 'propTypeArrayOfRequired',
  prefix: 'ptaor',
  body: ['PropTypes.arrayOf($0).isRequired'],
  description: 'An array of a certain type required',
};

const propTypeObjectOf: PropTypesSnippet = {
  key: 'propTypeObjectOf',
  prefix: 'ptoo',
  body: ['PropTypes.objectOf($0)'],
  description: 'An object with property values of a certain type',
};

const propTypeObjectOfRequired: PropTypesSnippet = {
  key: 'propTypeObjectOfRequired',
  prefix: 'ptoor',
  body: ['PropTypes.objectOf($0).isRequired'],
  description: 'An object with property values of a certain type required',
};

const propTypeShape: PropTypesSnippet = {
  key: 'propTypeShape',
  prefix: 'ptsh',
  body: ['PropTypes.shape({', '  $0', '})'],
  description: 'An object taking on a particular shape',
};

const propTypeShapeRequired: PropTypesSnippet = {
  key: 'propTypeShapeRequired',
  prefix: 'ptshr',
  body: ['PropTypes.shape({', '  $0', '}).isRequired'],
  description: 'An object taking on a particular shape required',
};

const propTypeExact: PropTypesSnippet = {
  key: 'propTypeExact',
  prefix: 'ptex',
  body: ['PropTypes.exact({', '  $0', '})'],
  description: 'An object with warnings on extra properties',
};

const propTypeExactRequired: PropTypesSnippet = {
  key: 'propTypeExactRequired',
  prefix: 'ptexr',
  body: ['PropTypes.exact({', '  $0', '}).isRequired'],
  description: 'An object with warnings on extra properties required',
};

const propTypeAny: PropTypesSnippet = {
  key: 'propTypeAny',
  prefix: 'ptany',
  body: ['PropTypes.any'],
  description: 'Any prop type',
};

export default [
  propTypeArray,
  propTypeArrayRequired,
  propTypeBool,
  propTypeBoolRequired,
  propTypeFunc,
  propTypeFuncRequired,
  propTypeNumber,
  propTypeNumberRequired,
  propTypeObject,
  propTypeObjectRequired,
  propTypeString,
  propTypeStringRequired,
  propTypeNode,
  propTypeNodeRequired,
  propTypeElement,
  propTypeElementRequired,
  propTypeInstanceOf,
  propTypeInstanceOfRequired,
  propTypeEnum,
  propTypeEnumRequired,
  propTypeOneOfType,
  propTypeOneOfTypeRequired,
  propTypeArrayOf,
  propTypeArrayOfRequired,
  propTypeObjectOf,
  propTypeObjectOfRequired,
  propTypeShape,
  propTypeShapeRequired,
  propTypeExact,
  propTypeExactRequired,
  propTypeAny,
];
