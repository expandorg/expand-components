// @flow

import Input from '../Input';
import Submit from '../Submit';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { SelectField } from '../Select';
import Checkbox from '../Checkbox';

import FieldType from './fieldType';

const fieldControls = {
  [FieldType.text]: Input,
  [FieldType.number]: Input,
  [FieldType.email]: Input,
  [FieldType.password]: Input,
  [FieldType.title]: Title,
  [FieldType.paragraph]: Paragraph,
  [FieldType.select]: SelectField,
  [FieldType.checkbox]: Checkbox,
  [FieldType.article]: Article,
  [FieldType.submit]: Submit,
};

export default fieldControls;
